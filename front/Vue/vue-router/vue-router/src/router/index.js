import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'

Vue.use(Router)

const User = {
  template: '<div>User {{ $route.params.id }}</div>',
  watch: {
    // 使用watch监视路由的变化,可以使用 beforeRouteUpdate 导航守卫监视
    '$route' (to, from) {
      // 将要跳转的路由——to
      // 现在所在的路由——from
      // console.log(to, from)
    }
  },
  //  beforeRouteUpdate 导航守卫
  beforeRouteUpdate (to, from, next) {
    // console.log(to)
    // console.log(from)
    // console.log(next)
  }
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/user/:id',
      component: User
    }
  ]
})
