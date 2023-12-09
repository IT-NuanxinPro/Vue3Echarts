// 全局封装loading，基于element-plus
import { ElLoading } from 'element-plus'

const loading = {
  loadingInstance: null,
  open(title, backgroundColor) {
    // 创建实例,而且会打开加载 窗口
    if (this.loadingInstance === null) {
      this.loadingInstance = ElLoading.service({
        fullscreen: true,
        lock: true,
        spinner: 'el-icon-loading',
        text: `${title || '拼命加载中...'}`,
        background: backgroundColor || 'rgba(0, 0, 0, 0.7)'
      })
    }
  },
  close() {
    // 关闭加载窗口
    if (this.loadingInstance !== null) {
      this.loadingInstance.close()
    }
    this.loadingInstance = null
  }
}

export default loading
