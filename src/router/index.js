import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '@/pages/Index';
import Tasks from '@/pages/Tasks';
import Completed from '@/pages/Completed';

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      component: Index
    },
    {
      path: '/tasks',
      component: Tasks
    },
    {
      path: '/completed',
      component: Completed
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
