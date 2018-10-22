import { asyncRouterMap, constantRouterMap } from '@/router/index'
import store from '../index'

/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param roleRoutes
 * @param route
 */
function hasPermission (roleRoutes, route) {
  if (route.meta && route.meta.power) {
    // 遍历roleRoutes对比route title
    return roleRoutes.some(roleRoute => route.meta.power === roleRoute.power)
  } else {
    return true
  }
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param routes asyncRouterMap
 * @param roleRoutes
 */
function filterAsyncRouter (routes, roleRoutes) {
  const res = []

  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(roleRoutes, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRouter(tmp.children, roleRoutes)
      }
      res.push(tmp)
    }
  })

  return res
}

const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = constantRouterMap.concat(routers)
    }
  },
  actions: {
    GenerateRoutes ({ commit }, data) {
      return new Promise(resolve => {
        const { routes } = data
        let accessedRouters
        // 管理员拥有所有页面路由
        if (store.getters.role === '管理员') {
          accessedRouters = asyncRouterMap
        } else {
          accessedRouters = filterAsyncRouter(asyncRouterMap, routes)
        }
        commit('SET_ROUTERS', accessedRouters)
        resolve()
      })
    }
  }
}

export default permission
