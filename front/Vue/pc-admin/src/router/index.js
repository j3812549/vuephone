import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import publish from '@/pages/home/components/artical-publish-center'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/login',
    name: 'Login',
    component: () =>
      import('@/pages/login/login')
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'app',
        name: 'app', // name名对应路由,用英语命名组件，会用于显示
        component: publish,
        redirect: 'app/app-a1',
        meta: {
          title: 'APP系统', // 标题
          icon: 'ios-checkmark', // 图标（到iview中找）
          power: 'APP系统' // 控制权限用的，命名跟标题一样即可
        },
        children: [
          {
            path: 'app-a1',
            name: 'app/app-a1', // 对应上级路由
            component: publish,
            meta: {
              title: 'APP1',
              icon: 'ios-checkmark'
            },
            children: [
              {
                path: 'app-a1-a1',
                name: 'app/app-a1/app-a1-a1',
                component: () =>
                  import('@/pages/home/page/App-admin/App-A1/App-A1-A1'),
                meta: {
                  title: 'APP1-1',
                  icon: 'ios-checkmark'
                }
              }
            ]
          },
          {
            path: 'app-a2',
            name: 'app/app-a2',
            component: () =>
              import('@/pages/home/page/App-admin/App-A2'),
            meta: {
              title: 'APP2',
              icon: 'ios-checkmark'
            }
          }
        ]
      },
      {
        path: 'education',
        name: 'education',
        component: publish,
        redirect: 'education/education-1',
        meta: {
          title: '教育系统',
          icon: 'ios-checkmark',
          power: '教育系统'
        },
        children: [
          {
            path: 'education-1',
            name: 'education/education-1',
            component: () =>
              import('@/pages/home/page/education-admin/education-admin'),
            meta: {
              title: 'education',
              icon: 'ios-checkmark'
            }
          }
        ]
      }
    ]
  }
]

export const asyncRouterMap = []

export default new Router({
  routes: constantRouterMap
})
