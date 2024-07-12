import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/layoutContainer.vue'),
      redirect: '/musicHouse',
      children: [
        {
          path: '/musicHouse',
          component: () => import('../views/musicHouse.vue')
        },
        {
          path: '/myMusic',
          component: () => import('../views/myMusic.vue')
        },
        {
          path: '/clientEnd',
          component: () => import('../views/clientEnd.vue')
        },
        {
          path: '/openPlatform',
          component: () => import('../views/openPlatform.vue')
        },
        {
          path: '/vipPart',
          component: () => import('../views/vipPart.vue')
        }
      ]
    }
  ]
})

export default router
