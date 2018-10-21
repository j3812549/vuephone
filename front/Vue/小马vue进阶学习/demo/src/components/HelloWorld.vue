<template>
  <div class="hello">
    <h1 class="hello-h1">你好哇，打的不错，谢谢~</h1>
    <pre>{{ content }}</pre>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      content: ''
    }
  },
  mounted () {
    this.axios.post('http://api.komavideo.com/news/list').then(body => {
      this.content = body.data
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello-h1{
    color: aqua
  }
</style>
