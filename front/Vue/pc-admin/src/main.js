// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from '@/store/index'
import App from './App'
import router from './router'
import axios from '@/utils/request.js'
import iview from 'iview'
import '@/permission' // 权限验证
import 'stylus/reset/reset.css'
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false
Vue.prototype.axios = axios

Vue.use(iview, axios)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
