<template>
  <div class="Login">
    <div class="login-user" align="center">
      <h1 class="login-user-title">欢迎使用后台管理系统</h1>
      <div>
        <font>账号：</font>
        <input type="text" :value="user" />
      </div>
      <div>
        <font>密码：</font>
        <input type="password" :value="password" />
      </div>
      <div>
        <button @click="login">登入</button>
      </div>
    </div>
    <img class="Login-img" src="https://img.zcool.cn/community/0144f7583d3571a8012060c8496d1e.jpg@1280w_1l_0o_100sh.jpg" />
  </div>
</template>

<script>
import { setToken } from '@/utils/auth'

export default {
  name: 'Login',
  data () {
    return {
      user: '222',
      password: '333'
    }
  },
  methods: {
    preventImg () {
      for (var i = 0; i < document.images.length; i++) {
        document.images[i].onmousedown = function (e) {
          e.preventDefault()
        }
      }
    },
    login () {
      this.axios.get(process.env.BASE_API + 'login/login.json')
        .then((res) => {
          var token = res.data.data.token
          setToken(token)
          this.$router.push({path: '/home'})
        })
    }
  },
  mounted () {
    this.preventImg()
  }
}
</script>

<style lang="stylus" scoped>
.Login
  position fixed
  width 100%
  height 100%
  -webkit-box-sizing inherit
  color #fff
  .Login-img
    width 100%
    height 100%
  .login-user
    position absolute
    right 0
    left 0
    padding 35px 35px 15px
    margin 120px auto
    .login-user-title
      font-size 26px
      text-align center
      font-weight 600
      padding-bottom 30px
</style>
