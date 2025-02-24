/*
 * @Author: sakurahuang
 * @Description: 
 * @Date: 2025-02-24 20:00:22
 */
import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
  ],
})

export default router
