import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入首页组件
import Home from '@/views/Home/Home.vue'
// 导入用户user页面组件
import UserPage from '@/views/User/User.vue'
// 把 VueRouter 安装为Vue的组件

Vue.use(VueRouter)

// 路由规则的数组
const routes = [
  { path: '/', component: Home },
  { path: '/userpage', component: UserPage }
]

// 创建实例对象
const router = new VueRouter({
  routes
})

export default router
