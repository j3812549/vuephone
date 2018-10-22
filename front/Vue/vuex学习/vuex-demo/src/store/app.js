import { INCREMENT, DECREMENT } from './mutation-types'

const app = {

  // 全局状态
  state: {
    count: 0
  },

  // 对state 数据进行包装，拼接数据，过滤。就是计算属性
  getters: {
    myCount (state) {
      return `current count is ${state.count}`
    }
  },

  // 要改变全局状态，需要通过mutations来改变
  mutations: {
    // mutations定义的方法，里面都会传入一个state的参数
    [INCREMENT] (state, n) {
      state.count += n
    },
    [DECREMENT] (state, n) {
      state.count -= n
    }
  },

  // 数据业务逻辑，不改变页面行为
  // 可以理解为对mutations的调用，来改变state的值，但是不改变mutations的方法
  actions: {
    // actions会传入一个context的参数
    async myIncrease (context, obj) {
      // 做些额外的计算，再调用mutations改变state的值
      context.commit(INCREMENT, 2)
      console.log('>>>>>>>>>>>>>', obj)
      const products = [1, 2, 3, 4, 5] // await axios.get(....)

      return products
    },
    myDecrement (context) {
      context.commit(DECREMENT, 3)
    }
  }
}

export default app
