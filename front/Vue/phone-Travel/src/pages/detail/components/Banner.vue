<template>
  <div class="banner">
    <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1610/83/83a873f755d64992a3.water.jpg_600x330_9d4add39.jpg" />
    <div class="banner-info">
      <div class="banner-tittle">南昌万达主题乐园</div>
      <div class="banner-number">
        <span class="iconfont banner-icon">&#xe63e;</span>
        39
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBanner'
}
</script>

<style lang="stylus" scoped>
.banner
  position relative
  overflow hidden
  height 0
  padding-bottom 55%
  .banner-img
    width 100%
  .banner-info
    position absolute
    display flex
    left 0
    right 0
    bottom 0
    line-height .6rem
    color #fff
    background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
    .banner-tittle
      flex 1
      font-size .32rem
      padding 0 .2rem
    .banner-number
      margin-top .14rem
      padding 0 .4rem
      height .32rem
      line-height .32rem
      border-radius .2rem
      background rgba( 0, 0, 0, .8)
      font-size .3rem
      .banner-icon
        font-size .3rem
</style>
