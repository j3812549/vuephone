<template>
  <div>
    <h1>hello router</h1>
    <h2>这里是Home</h2>
    <p><router-link :userId="user.item1" :to="'/user/' + user.item1">动态路由分配User id 1 </router-link></p>
    <p><router-link :userId="user.item2" :to="'/user/' + user.item2">动态路由分配User id 2 </router-link></p>
    <p><router-link :userId="user.item3" :to="'/user/' + user.item3">动态路由分配User id 3 </router-link></p>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      user: {
        item1: 1,
        item2: 2,
        item3: 3
      }
    }
  }
}
</script>

<style>
</style>
