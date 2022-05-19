<template>
  <div>
    <!-- <h1>App根组件</h1> -->
    <!-- 路由占位符 -->
    <router-view></router-view>
    <!-- tabbar Vant标签 -->
    <van-tabbar route>
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/userpage">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less" scope></style>
