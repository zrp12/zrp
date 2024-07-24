import { createApp } from 'vue'
import '@/assets/main.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia';
import { 
    Tabbar,
    TabbarItem,
    Form,
    CellGroup,
    Field,
    Button,
    NavBar,
    Checkbox,
    Search,
    Icon
} from 'vant'
import 'vant/lib/index.css';

const pinia = createPinia();


const app = createApp(App)
app
    .use(Tabbar)
    .use(TabbarItem)
    .use( Form)
    .use(CellGroup)
    .use(Field)
    .use(Button)
    .use(NavBar)
    .use(Checkbox)
    .use(Search)
    .use(Icon)

app
    .use(router)
    .use(pinia)

app
    .mount('#app')
