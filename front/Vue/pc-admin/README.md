# 该项目引入的插件
vue 2.5.2
vuex 3.0.1
vue-router 3.0.1
stylus 0.54.5
stylus-loader 3.0.2

iview 3.1.3————————UI框架
# 关于class的命名
<div class="index">
  <div class="index-div"></div>
  <h1 class="index-title"></h1>
  <img class="index-img" />
</div>

# styles应对应的格式
使用stylus 语法 
<style lang="stylus" scoped>
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
  .app-img
    width 100%
  
</style>

# pc-admin

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
