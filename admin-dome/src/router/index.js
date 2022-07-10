import Vue from 'vue'
import VueRouter from 'vue-router'
import ListArticle from '../views/ListArticle.vue'
import CreateArticle from '../views/CreateArticle.vue'

Vue.use(VueRouter)

const routes = [
  // 首页
  { 
    path: '/',
    name: 'home',
    redirect:'/articles/list',
  },
  // 文章列表页
  {
    path: '/articles/list',
    name: 'articles-list',
    component: ListArticle
  },
  // 新建文章页
  {
    path: '/articles/create',
    name: 'articles-create',
    component:CreateArticle
  },
  //编辑文章页
  {
    path: '/articles/:id/edit',
    name: 'articles-edit',
    component:EditArticle
  }


]

const router = new VueRouter({
  routes
})

export default router