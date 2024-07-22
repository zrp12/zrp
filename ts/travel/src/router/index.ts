import { createRouter, createWebHistory } from 'vue-router'
// 引入了一个类型定义 RouteRecordRaw 约定路由的类型
import type { RouteRecordRaw } from "vue-router"
// vue3 98% 代码是用ts 写的， 而不是js
// ts 是js的超级 减少js 开发90%以上的错误 都是自类型的缺失
// js写起来跟java一样
// 静态编译，类型检测
// 直接用js 写没问题，加上一些
const rootRoutes: RouteRecordRaw[] = [{
    path: '/',
    component: () => import('@/views/HomePage/HomePage.vue')
}]

const router = createRouter({
    history: createWebHistory(),
    routes: rootRoutes
})

export default router

