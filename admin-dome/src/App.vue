<template>
  <div id="app">
    <el-container style="height: 100vh; border: 1px solid #eee">

      <!-- 侧边导航栏 -->
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu router :default-openeds="['1', '2']">
          <!-- 前端elementUI 后端express 实现简单的后台内容管理 -->
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-document"></i>内容管理</template>
            <el-menu-item-group>
              <el-menu-item index="/articles/list">文章列表</el-menu-item>
              <el-menu-item index="/articles/create">新建文章</el-menu-item>
            </el-menu-item-group>            
          </el-submenu>
          <!-- 账户管理暂时没有后台数据 -->
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-user"></i>账户管理(无数据)</template>
            <el-menu-item-group>
              <template slot="title">普通用户</template>
              <!-- <el-menu-item index="2-1">用户</el-menu-item>
              <el-menu-item index="2-2">会员</el-menu-item> -->
            </el-menu-item-group>
            <el-menu-item-group title="管理员">
              <!-- <el-menu-item index="2-3">超级管理员</el-menu-item> -->
              <!-- <el-submenu index="2-4"> -->
              <!-- <template slot="title">职能类型管理员</template>
              <el-menu-item index="2-4-1">管理评论类</el-menu-item>
              <el-menu-item index="2-4-2">管理公告类</el-menu-item>
              <el-menu-item index="2-4-3">管理消息类</el-menu-item>
              <el-menu-item index="2-4-4">管理.......类</el-menu-item> -->
            <!-- </el-submenu> -->
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
  
      <!-- 内容 -->
      <el-container>
        <!-- 表格头部样式 -->
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>登录账号名...</span>
        </el-header>
        
        <!-- 表格内的动态数据 -->
        <el-main>
          <router-view></router-view>
        </el-main>

      </el-container>
   
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {}
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
html,body{
  padding: 0;
  margin: 0;
}

.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  .el-aside {
    color: #333;
  }
</style>
