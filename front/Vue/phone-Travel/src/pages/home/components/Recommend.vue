<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom"
       v-for="item of recommendList"
       :key="item.id"
       >
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1610/88/88ec04f6d021724da3.water.jpg_200x200_d9307de0.jpg',
        title: '大连海洋世界',
        desc: '浪漫大连首战，浪漫的海洋主题乐园'
      },
      {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1701/c0/c0899de1bcef6f9a3.img.jpg_200x200_b5b00164.jpg',
        title: '南昌新中原大剧院',
        desc: '唱戏啊，快活啊'
      },
      {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1705/1c/1c9ea91d1d73e159a3.water.jpg_200x200_7d604203.jpg',
        title: '南昌万达文化旅游城',
        desc: '万达玩人园，你值得死亡'
      },
      {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1610/83/83a873f755d64992a3.water.jpg_200x200_f7acbacd.jpg',
        title: '南昌万达主题公园',
        desc: '120米的跳楼机，跳下来你就死定了'
      },
      {
        id: '0005',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1610/88/88ec04f6d021724da3.water.jpg_200x200_d9307de0.jpg',
        title: '大连海洋世界',
        desc: '浪漫大连首战，浪漫的海洋主题乐园'
      },
      {
        id: '0006',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1602/49/4917c5b8d400d5b890.img.jpg_200x200_4e55a084.jpg',
        title: '凤凰沟',
        desc: '不要问我，我也不知道这个沟是干嘛的'
      },
      {
        id: '0007',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1711/63/6340336461c16842a3.img.png_200x200_ac63191b.png',
        title: '南昌金燕国际温泉',
        desc: '美女与温泉，想想也不错，嗯。。。继续敲代码'
      },
      {
        id: '0008',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1608/9c/9c744efe971f8966a3.water.jpg_200x200_3bfda054.jpg',
        title: '怪石岭生态公园',
        desc: '南昌假长城所在地'
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
.item
  display flex
  height 1.9rem
  overflow hidden
  .item-img
    width 1.7rem
    height 1.7rem
    padding .1rem
  .item-info
    min-width 0
    flex 1
    padding .1rem
    .item-title
      line-height .54rem
      font-size .32rem
      ellipsis()
    .item-desc
      line-height .4rem
      color #ccc
      ellipsis()
    .item-button
      line-height .44rem
      margin-top .16rem
      background #ff9300
      padding 0 .2rem
      border-radius .06rem
      color #fff
</style>
