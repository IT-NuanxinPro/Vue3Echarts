import { defineStore } from 'pinia'
import moment from 'moment'
export const useBigScreenStore = defineStore('bigScreen', {
  state: () => ({
    dateCurrent: moment().subtract(1, 'days').format('YYYY-MM-DD'), // 前一天
    dateStart: moment().startOf('year').format('YYYY-MM-DD'), // 今年开始
    regionInfo: {
      regionCode: '13',
      regionName: '天津市'
    },
  }),
  getters: {
    regionTianjin: (state) => {
      if (state.regionInfo.regionCode === '13') {
        return '132000'
      }
      return state.regionInfo.regionCode
    },
    regionTianJinLZ: (state) => {
      if (state.regionInfo.regionCode === '13') {
        return '130'
      }
      return state.regionInfo.regionCode
    },
    handleNo1: (state) => {
      // 如果本月的1号比当前日期大，那么就是上个月的1号
      if (moment(state.dateMonthStart).isAfter(moment(state.dateCurrent).startOf('month'))) {
        return moment(state.dateMonthStart).subtract(1, 'months').format('YYYY-MM-DD')
      }
      return state.dateMonthStart
    }
  },
  actions: {
    setRegionInfo(state, value) {
      if (value.regionCode) {
        state.regionInfo.regionCode = value.regionCode
      }
      if (value.regionName) {
        state.regionInfo.regionName = value.regionName
      }
      if (value.year) {
        state.regionInfo.year = value.year
      }
    },
  }
})