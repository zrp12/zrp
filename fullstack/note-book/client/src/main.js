import { createApp } from 'vue'
import { createPinia } from 'pinia'

import '@/assets/style/reset.css'   // 初始化样式
import 'lib-flexible/flexible.js'   // 修改跟字体大小

import App from './App.vue'
import router from './router'

// 1. 引入你需要的组件
import { Button, Form, Field, CellGroup, Icon, Uploader, ActionSheet } from 'vant';
// 2. 引入组件样式
import 'vant/lib/index.css';


const app = createApp(App)

// 3. 注册你需要的组件
app.use(Button);
app.use(Form);
app.use(Field);
app.use(CellGroup);
app.use(Icon);
app.use(createPinia())
app.use(router)
app.use(Uploader)
app.use(ActionSheet)

app.mount('#app')
