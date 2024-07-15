import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/Register.vue')
    },
    {
      path: '/noteClass',
      name: 'noteClass',
      component: () => import('@/views/NoteClass.vue')
    }
  ]
})

// 全局路由守卫
const whitePath = ['/login', '/register']
router.beforeEach((to, from, next) => {
  if (!whitePath.includes(to.path)) {
    // 判断本地有无用户数据
    if(!localStorage.getItem('userInfo')) {
      next('/login')
    } else {
      next()
    }
  }
})

export default router
