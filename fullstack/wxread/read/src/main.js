import { createApp } from 'vue'
import { createPinia } from 'pinia'

import '@/assets/style/reset.css' // 初始化样式
import 'lib-flexible/flexible.js' //修改根字体大小

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
