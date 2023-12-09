/* eslint-disable indent */
import axios from 'axios'
import loading from '@/utils/loading'
import PromiseState from './promiseState'
import CancelControl from './cancelControl'

const config = {
  APIFormat: 'h5proxy'
}
const mode = import.meta.env.MODE
const baseURLs = {
  development: import.meta.env.VITE_APP_API_Dev_URL,
  test: import.meta.env.VITE_APP_API_Test_URL,
  production: import.meta.env.VITE_APP_API_Production_URL
}
const API = axios.create({
  timeout: 10 * 1000 * 6 * 100,
  contentType: 'application/json',
  baseURL: baseURLs[mode],
  headers: {
    'Content-Type': 'application/json'
  }
})

const cancelControl = new CancelControl()
/* 请求拦截器 */
API.interceptors.request.use((config1) => {
  if (config1.multipleCancel) { // 如果设置了连续请求时取消之前的请求
    const key = `${config1.url}+${config1.data.key}`
    cancelControl.abort(key)
    config1.cancelToken = cancelControl.setAbortAPI(key)
  }
  return config1
})

export const newStore = new PromiseState()

export const spost = (store, path, data, { multipleCancel = false } = {}) => {
  return new Promise((resolve, reject) => {
    store.b = new Date()
    store.t = 'ajax'
    store.u = path
    store.r = data
    store.p = true
    store.o = false
    store.e = false
    store.m = ''
    store.d = {}
    store.s += 1
    data = { ...data } || {}
    let post
    switch (config.APIFormat) {
      case 'h5proxy':
        post = API.post(path, data, { multipleCancel })
        break
      default:
        return
    }
    post
      .then((res) => {
        const d = res.data
        store.f = new Date()
        store.p = false
        store.c = d.STATUS.toString()
        store.d = d.DATA || {}
        if (store.c === '0000') {
          store.o = true
          store.e = false
          store.m = d.MESSAGE
          resolve(store)
        } else {
          store.o = false
          store.e = true
          store.m = d.MESSAGE || '服务调用异常'
          reject(store)
          this.$message({
            message: store.m,
            type: 'error'
          })
        }
      })
      .catch((d) => {
        if (d.message === 'Cancel') {
          // 再一次请求转圈
          store.p = true
          store.o = false
          store.e = false
          store.m = ''
          return
        }
        store.f = new Date()
        store.p = false
        store.o = false
        store.e = true
        store.c = -2
        if (d.status === 404) {
          store.m = '后台服务暂未开通'
        } else {
          store.m = d.MESSAGE || '服务调用异常'
        }
        this.$message({
          message: store.m,
          type: 'error'
        })
        store.d = d
        reject(store)
      })
  })
}
export const spostExport = (path, filename, data, isDownload = false) => {
  return new Promise((resolve, reject) => {
    const loadingText = isDownload ? '正在下载,请稍后...' : '正在导出,请稍后...'
    loading.open(loadingText)
    data = { ...data } || {}
    let post
    switch (config.APIFormat) {
      case 'h5proxy':
        post = API.post(path, data, {
          responseType: 'blob'
        })
        break
      default:
        return
    }
    post
      .then(async (res) => {
        const d = res.data
        const blob = new Blob([d])
        const fileName = filename || '导出文件'
        if ('download' in document.createElement('a')) {
          const link = document.createElement('a')
          link.download = `${fileName}.xlsx`
          link.style.display = 'none'
          link.href = URL.createObjectURL(blob)
          document.body.appendChild(link)
          link.click()
          URL.revokeObjectURL(link.href)
          document.body.removeChild(link)
        }
        resolve()
        loading.close()
      })
      .catch(() => {
        loading.close()
        this.$message({
          message: isDownload ? '下载失败' : '导出失败',
          type: 'error'
        })
        reject()
      })
  })
}

/**
     * @description: 保留两位小数(处理特殊情况)
     * @param {Number} num 需要处理的数字
     * @param {Boolean} isHaveZero 是否需要保留0
     * @return {Number} 返回处理后的数字
     * */
export const keepTwoDecimal = (num, isHaveZero) => {
  if (Number.isNaN(num)) return
  if (isHaveZero) return num.toFixed(2)
  const roundedNumber = Math.round(parseFloat(num) * 100) / 100
  return Number.isInteger(roundedNumber) ? roundedNumber : roundedNumber.toFixed(2)
}

/**
     * @description: 处理数据(处理特殊情况)
     * @param {Number} val 需要处理的数字
     * @param {Boolean} isPercent 是否需要转化为百分数
     * @param {Boolean} isHaveZero 是否需要保留0
     * @param {Boolean} isHavePercent 是否需要保留百分号
     * @return {string} 返回处理后的数字
     * */
export const handleData = (val, isPercent = false, isHaveZero = false, isHavePercent = false) => {
  // val为0,且显示包含0
  if (val === 0) {
    return isHaveZero ? '0.00%' : 0
  }
  if (!val) {
    return '--'
  }
  if (isPercent) {
    return isHavePercent ? `${keepTwoDecimal((val * 100), isHaveZero)}` : `${keepTwoDecimal((val * 100), isHaveZero)}%`
  }
  return val
}
