<template>
  <div class="home-container">
    <!-- <h1>HomePage 组件</h1> -->
    <!-- NavBar Vant顶部导航栏 -->
    <van-nav-bar title="vue路由-新闻头条(下拉刷新 上拉加载)" fixed />

    <!-- 文章列表内容 -->
    <!-- 上拉加载更多 -->
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <!-- vant 组件实现下拉刷新 -->
      <van-list v-model="loading" :finished="finished" finished-text="暂无更多内容，等待接口数据添加......" @load="onLoad">
        <!-- 组件遍历文章列表 -->
        <ArticleInfo
        v-for="item in artlist"
        :key="item.id"
        :title="item.title"
        :author="item.aut_name"
        :commentnum="item.comm_count"
        :pubdate="item.pubdate"
        :cover="item.cover"
        ></ArticleInfo>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
// 导入接口
import { getArticleListAPI } from '@/api/articleAPI.js'
// 导入组件
import ArticleInfo from '@/components/Article/ArticleInfo.vue'
export default {
  name: 'HomePage',
  data () {
    return {
      // 页码值
      page: 1,
      // 每页显示数据条数
      limit: 12,
      artlist: [],
      // 是否正在加载下一页数据  true 则不会反复触发load事件
      // 下一页数据请求完毕 一定要改为 false
      loading: true,
      // 所有数据是否加载完毕 如果没有更多数据 就要把finished 改为 true
      finished: false,
      // 是否在下拉刷新
      isLoading: false
    }
  },
  created () {
    this.initArticleList()
  },
  methods: {
    // 封装获取文章列表数据的方法
    async initArticleList () {
      // 发起GET请求，获取文章的列表数据
      const { data: res } = await getArticleListAPI(this.page, this.limit)
      // console.log(res)  this.artlist = res
      // 上拉加载更多 旧数据在前 新数据在后
      this.artlist = [...this.artlist, ...res]
      this.loading = false
      if (res.length === 0) {
        this.finished = true
      }
    },
    onLoad () {
      console.log('触发')
      // 页码值 +1
      this.page++
      // 重新请求接口获取数据
      this.initArticleList()
    }
  },
  onRefresh () {

  },
  components: {
    ArticleInfo
  }
}
</script>

<style lang="less" scope>
.home-container{
  padding: 46px 0px 50px 0px;

  .van-nav-bar {
    background-color:#22BABB;
    // color: aliceblue;

    .van-nav-bar__title {
          color: #ffffff;
          font-weight: 600;
          }

    }

}

</style>
