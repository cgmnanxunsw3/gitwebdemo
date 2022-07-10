import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

Vue.config.productionTip = false

import axios from 'axios'
// 创建axios实例 防止冲突在http前加$
Vue.prototype.$http = axios.create({
  baseURL:'http://localhost:3001/api'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
