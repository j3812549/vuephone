<template>
  <ul class="list">
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.list
  display flex
  flex-direction column
  justify-content center
  position absolute
  width .4rem
  bottom 0
  right 0
  top 0.0rem
  .item
    line-height .4rem
    color $bgColor
    text-align center
</style>
