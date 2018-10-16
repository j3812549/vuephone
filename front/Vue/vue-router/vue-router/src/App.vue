<template>
  <div id="app">
    <home></home>
    <router-view/>
  </div>
</template>

<script>
import Home from '@/pages/Home'
export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
</style>
