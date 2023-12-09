/*
task-state 自己是一个类，带有标准的成员，
然后可以有实例方法，绑定一个 primise；
使用方法：
* 引入 import PromiseState from '../plugin/task-state/PromiseState.js';
* 在 data 部分定义 ts = new PromiseState()
* 执行异步任务时绑定 promise 对象 this.ts.bind(promise)
* 在 template 中绑定 ts 对象的成员，如 v-if="ts.o" v-text="ts.d.xxx"
*/

class PromiseState {
  constructor() {
    this.p = false // 进行进行中标准，pending, processing
    this.o = false // 执行成功 ok 标志, promise resolved
    this.e = false // 执行结果报错出现异常 error 标志, promise rejected，可能是 Error 类对象
    this.c = Number.NaN // code 错误码，成功为 0
    this.m = '' // message 调用结果说明，通常出错时给出
    this.d = {} // data 调用结果响应，初始化为空对象
    this.s = 0 // sequence 第几次调用
    this.b = undefined // begin time
    this.f = undefined // finish time
    // 以下是可选成员，用于关联请求相关信息
    this.t = '' // type
    this.u = '' // url, path
    this.up = '' // url prefix for ipu background worker
    this.r = {} // request
  }
}

export default PromiseState
