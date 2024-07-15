import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', //layoutContainer
      component: () => import('../views/layoutContainer.vue'),
      redirect: '/musicHouse/homePage',
      children: [
        //音乐馆，我的音乐...
        {
          path: 'musicHouse',
          component: () => import('../views/first/musicHouse.vue'),
          children: [
            //首页，歌手...
            {
              path: 'homePage',
              component: () => import('../views/second/homePage.vue')
            },
            {
              path: 'singerPage',
              component: () => import('../views/second/singerPage.vue')
            }
          ]
        },
        {
          path: '/myMusic',
          component: () => import('../views/first/myMusic.vue')
        },
        {
          path: '/clientEnd',
          component: () => import('../views/first/clientEnd.vue')
        },
        {
          path: '/openPlatform',
          component: () => import('../views/first/openPlatform.vue')
        },
        {
          path: '/vipPart',
          component: () => import('../views/first/vipPart.vue')
        }
      ]
    }
  ]
})

export default router
