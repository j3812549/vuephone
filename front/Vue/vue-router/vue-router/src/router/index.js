import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const User = {
  template: `
  <div>
    <h1>User {{ $route.params.id }}</h1>
    <router-view></router-view>
  </div>
  `,
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
      path: '/user/:id',
      component: User,
      children: [
        {
          path: 'profile',
          name: 'user1',
          component: 1
        },
        {
          path: 'posts',
          name: 'user2',
          component: 2
        }
      ]
    }
  ]
})
