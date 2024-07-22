import { createApp } from 'vue'
import { createPinia } from 'pinia'

import '@/assets/style/reset.css' // 初始化样式
import 'lib-flexible/flexible.js' //修改根字体大小

// 1. 引入你需要的组件
import { Button, Form, Field, CellGroup } from 'vant';
// 2. 引入组件样式
import 'vant/lib/index.css';


import App from './App.vue'
import router from './router'

const app = createApp(App)

// 3. 注册你需要的组件
app.use(Button);
app.use(Form);
app.use(Field);
app.use(CellGroup);

app.use(createPinia())
app.use(router)

app.mount('#app')
