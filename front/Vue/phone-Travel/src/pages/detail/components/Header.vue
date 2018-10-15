<template>
  <div>
    <router-link tag="div" to="/" class="header-abs">
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <div class="header-fixed">

    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader'
}
</script>

<style lang="stylus" scoped>
.header-abs
  position absolute
  left .2rem
  top .2rem
  width .8rem
  height .8rem
  line-height .8rem
  border-radius .4rem
  background rgba(0, 0, 0, .8)
  text-align center
  .header-abs-back
    color #fff
    font-size .4rem
.header-fixed
  position relative
  overflow hidden
  height .86rem
  line-height .86rem
  text-align center
  color  #fff
  background $bgColor
  font-size .32rem
  .header-icon
    position absolute
    top 0
    left 0
    width .64rem
    text-align center
    font-size .4rem
    color #fff
</style>
