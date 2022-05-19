import Vue from 'vue'
import App from './App.vue'
import router from './router'
// Vant组件库配置选择方式三 导入所有 Vant 组件
import Vant from 'vant'
import 'vant/lib/index.css'

Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
