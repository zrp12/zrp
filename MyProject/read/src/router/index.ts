import { createRouter, createWebHistory } from "vue-router"
import type { RouteRecordRaw } from "vue-router"

// RouteRecordRaw 约定路由的类型
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home/Home.vue"),
    meta: {
      title: "首页"
    }
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login.vue"),
    meta: {
      title: "登录"
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router