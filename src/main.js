// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'jquery'
import axios from 'axios'
// 公共方法
import common from '@/commonFunction/common.js' 
// mds加密文件
import md5 from '@/commonFunction/jquery.md5.min.js' 

Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.prototype.common = common
Vue.prototype.md5 = md5

// Vue.prototype.HOST = '/api'
axios.defaults.baseURL = '/api'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
