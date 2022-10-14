import { createWebHashHistory, createRouter } from 'vue-router'

import Home from '../views/home/home.vue'
import About from '../views/about/about.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: () => import('@/views/home/home.vue')
    },
    {
      path: '/about',
      component: () => import('@/views/about/about.vue')
    }
  ]
})

export default router