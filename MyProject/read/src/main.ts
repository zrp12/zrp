import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/style/reset.css'
import 'lib-flexible/flexible.js'
import { createPinia } from 'pinia'

import { Dialog } from 'vant';
import 'vant/lib/index.css';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';


const pinia = createPinia()

const app = createApp(App)

app
    .use(pinia)
    .use(router)
    .use(ElementPlus)
    .use(Dialog)
    
app
    .mount('#app')
