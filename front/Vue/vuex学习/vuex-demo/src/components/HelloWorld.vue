<template>
  <div id="app">
    <button @click="increase">增加</button>
    <button @click="decrease">减少</button>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
import { INCREMENT, DECREMENT } from '@/store/mutation-types'
export default {
  name: 'HelloWorld',
  methods: {
    ...mapMutations([INCREMENT, DECREMENT]),
    ...mapActions(['myIncrease', 'myDecrement']),
    // increase () {
    //   // 调用mapMutations引入进来的方法
    //   // this.$store.commit('increment')
    //   // this.increment()
    //   // this.$store.state.count += 1
    //   // 调用mapActions引入进来的方法
    //   this.myIncrease()
    // },
    async increase () {
      // 调用mapMutations引入进来的方法
      this.$store.commit(INCREMENT, 2)
      // this.increment()
      // this.$store.state.count += 1
      // 调用mapActions引入进来的方法
      // const produsts = await this.myIncrease({
      //   id: 123
      // })
      // console.log(produsts)
    },
    decrease () {
      // 调用mapMutations引入进来的方法
      this.$store.commit(DECREMENT, 3)
      // this.decrement()
      // this.$store.state.count -= 1
      // 调用mapActions引入进来的方法
      // this.myDecrement()
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
