<template>
  <div id="app">
    <h1>{{count}}</h1>
    <h2>{{myCount}}</h2>
    <router-view/>
  </div>
</template>

<script>
// Vuex库中的mapState的方法,可以将数据获取
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapState({
      count: state => {
        return state.app.count
      }
    }),
    ...mapGetters(['myCount'])
  }
}
</script>

<style>
</style>
