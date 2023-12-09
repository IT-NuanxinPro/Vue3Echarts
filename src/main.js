import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import '@/assets/style/global.scss'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

// 模拟挂载一个全局方法
function test() {
  return '我是全局方法'
}
const app = createApp(App)

app.config.globalProperties.$Test = test

app.use(ElementPlus, {
  locale: zhCn,
})

app.use(createPinia())
app.use(router)


app.mount('#app')
