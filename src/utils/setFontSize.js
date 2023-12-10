export function setFontSize() {
  // 获取文档宽度
  const clientWidth =
    window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
  const clientHeight =
    window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight

  // 未获取到宽度 返回undefined
  if (!clientWidth || !clientHeight) return 1

  // 根据文档宽度和设计稿的宽度 获取单位转换比例
  let fontSize
  if (clientWidth / clientHeight >= 21 / 9) {
    fontSize = clientWidth / 1800
  } else {
    fontSize = clientWidth / 1440
  }

  // 返回大小
  return fontSize
}