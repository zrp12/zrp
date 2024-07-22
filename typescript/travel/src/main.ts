import { createApp } from 'vue'
import '@/assets/main.css'
import App from './App.vue'
import router from './router/index'
import { createPinia } from 'pinia'
import { 
    Tabbar,
    TabbarItem
} from 'vant'
import 'vant/lib/index.css'
const pinia = createPinia();

const app = createApp(App);
app
    .use(Tabbar)
    .use(TabbarItem)
app
    .use(router)
    .use(pinia)
app
    .mount('#app')
// createApp(App).mount('#app')
