import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/login',
    name: 'Login',
    component: () =>
      import('@/pages/login/login')
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'profile',
        component: () =>
          import('@/pages/home/page/profile')
      }
    ]
  }
]

export const asyncRouterMap = []

export default new Router({
  routes: constantRouterMap
})
