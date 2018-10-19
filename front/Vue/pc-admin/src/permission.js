import router from './router'
// import store from './store'

// const whiteList = ['/login'] // 不重定向白名单
router.beforeEach((to, from, next) => {
  // if (getToken()) {

  next()
  // if (to.path === '/login') {
  //   next({ path: '/' })
  // } else {
  //   if (store.getters.routes.length === 0) {
  //     store.dispatch('GetInfo').then(res => {
  //       store.dispatch('GetRoleRoutes').then(res => {
  //         const routes = res.data
  //         store.dispatch('GenerateRoutes', { routes }).then(() => {
  //           router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
  //           next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
  //         }).catch(() => {
  //           store.dispatch('FedLogOut').then(() => {
  //             next({ path: '/' })
  //           })
  //         })
  //       }).catch((err) => {
  //         store.dispatch('FedLogOut').then(() => {
  //           console.log(err)
  //           next({ path: '/' })
  //         })
  //       })
  //     }).catch(() => {
  //       store.dispatch('FedLogOut').then(() => {
  //         next({ path: '/' })
  //       })
  //     })
  //   } else {
  //     store.dispatch('GetInfo').then(res => {
  //       next()
  //     }).catch(() => {
  //       store.dispatch('FedLogOut').then(() => {
  //         next({ path: '/' })
  //       })
  //     })
  //   }
  // }
  // } else {
  //   if (whiteList.indexOf(to.path) !== -1) {
  //     next()
  //   } else {
  //     store.dispatch('FedLogOut').then(() => {
  //       next(`/login`)
  //     })
  //   }
  // }
})

router.afterEach(() => {
})
