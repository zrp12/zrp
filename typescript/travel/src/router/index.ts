import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from "vue-router" 
import HomePage from '@/views/HomePage/HomePage.vue' // home
import TheRoot from '@/views/TheRoot.vue' // layout

const rootRoutes: RouteRecordRaw[] = [
    {
        path: 'home',
        name: 'Home',
        component: HomePage
        // component: () => import('@/views/HomePage/HomePage.vue')
    }
]

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'App',
        component: TheRoot,
        redirect: '/home',
        children:rootRoutes
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
    // routes: rootRoutes
})

export default router

