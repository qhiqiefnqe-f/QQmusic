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
          redirect: '/musicHouse/homePage',
          children: [
            //首页，歌手...
            {
              path: 'homePage',
              component: () => import('../views/second/homePage.vue')
            },
            {
              path: 'singerPage',
              component: () => import('../views/second/singerPage.vue')
            },
            {
              path: 'newMusic',
              component: () => import('../views/second/newMusic.vue')
            },
            {
              path: 'rangePage',
              component: () => import('../views/second/rangePage.vue')
            },
            {
              path: 'classifyPage',
              component: () => import('../views/second/classifyPage.vue')
            },
            {
              path: 'radioPage',
              component: () => import('../views/second/radioPage.vue')
            },
            {
              path: 'mvPage',
              component: () => import('../views/second/mvPage.vue')
            },
            {
              path: 'albumPage',
              component: () => import('../views/second/albumPage.vue')
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
