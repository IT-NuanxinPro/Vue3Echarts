export default function throttle(fn, delay = 200) {
  let timer = null
  return function delayFunc() {
    if (timer) return
    timer = setTimeout(() => {
      // eslint-disable-next-line prefer-rest-params
      fn.apply(this, arguments)
      timer = null
    }, delay)
  }
}
