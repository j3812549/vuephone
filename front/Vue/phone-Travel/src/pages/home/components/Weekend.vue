<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom"
       v-for="item of recommendList"
       :key="item.id"
       >
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/74/a665dfecf12ae.jpg_r_640x214_5d22909a.jpg',
        title: '南昌必游TOP10',
        desc: '看山看谁，看看历史对南昌的侵润'
      },
      {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1509/6e/49ebb42da82957.jpg_r_640x214_29dfe99b.jpg',
        title: '南昌秋天美',
        desc: '深秋的南昌，秋风徐徐，落叶极美'
      },
      {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/df/9bcc134d126bc4.jpg_r_640x214_58a1f389.jpg',
        title: '陶醉青山绿水间',
        desc: '整个城市青山环绕，湖泊点缀其间'
      },
      {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/bd/688c12889af7ad.jpg_r_640x214_cc490c32.jpg',
        title: '带着宝贝玩乐',
        desc: '全家出游，可以说是再好不过的美事了'
      },
      {
        id: '0007',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1711/63/6340336461c16842a3.img.png_200x200_ac63191b.png',
        title: '红色景点巡礼',
        desc: '那段峥嵘的岁月中所留下的痕迹比比皆是'
      }]
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.title
  margin-top .2rem
  line-height .8rem
  background #eee
  text-indent .2rem
.item-img-wrapper
  overflow hidden
  padding-bottom 33.9%
  height 0
.item-img
  width 100%
.item-info
  padding .1rem
  .item-title
    line-height .54rem
    font-size .32rem
    ellipsis()
  .item-desc
    font-size .24rem
    line-height .3rem
    color #616161
    ellipsis()
</style>
