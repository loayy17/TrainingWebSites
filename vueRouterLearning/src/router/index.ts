import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/contactuS',
      name: 'Contact US',
      component: () => import('../views/ContactUs.vue')
    },
    {
      path: '/aboutus',
      name: 'About US',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/links',
      name: 'Links',
      component: () => import('../views/Links.vue')
    },
    {
      path: '/pageone',
      name: 'Pages',
      component: () => import('../views/Pages.vue')
    }
  ]
})

export default router
