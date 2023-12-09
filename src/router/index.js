import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/bigScreen',
    },
    {
      path: '/bigScreen',
      name: 'bigScreen',
      component: () => import('@/views/bigScreen/Layout.vue'),
    }
  ]
})

export default router
