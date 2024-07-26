import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { createPinia } from 'pinia'
import { useRouter } from 'vue-router'

const pinia = createPinia()
const router = useRouter()

const app = createApp(App)

app
    .use(pinia)
    .use(router)
    .mount('#app')
