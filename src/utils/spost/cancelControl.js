import axios from 'axios'

class CancelControl {
  /* 构造函数 */
  constructor() {
    this.allCancelApi = {}
  }

  /* 此方法记录请求函数 calcelAPI:接口名称或者url */
  setAbortAPI(calcelAPI) {
    const { CancelToken } = axios
    const source = CancelToken.source()
    this.allCancelApi[calcelAPI] = source
    return source.token
  }

  /* 执行此方法取消请求 calcelAPI:接口名称或者url */
  abort(calcelAPI) {
    if (this.allCancelApi[calcelAPI]) {
      this.allCancelApi[calcelAPI].cancel('Cancel')
    }
  }
}

export default CancelControl
