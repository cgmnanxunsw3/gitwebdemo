<template>
  <div>
    <el-table :data="articles">
      <el-table-column prop="author" label="作者" width="120">
      </el-table-column>
      <el-table-column prop="articletitle" label="文章标题" width="160">
      </el-table-column>
      <el-table-column prop="introduce" label="文章简介">
      </el-table-column>

      <el-table-column fixed="right" label="操作" width="100">
      <template slot-scope="scope">
        <!-- {{scope.row}} -->
        <el-button @click="remove(scope.row._id)" type="text" size="small">删除</el-button>
        <el-button @click="edit(scope.row._id)" type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
    data() {
          // const item = {
          //   // date: '2016-05-02',
          //   author: '名字',
          //   articletitle: '《XXX》',
          //   introduce: '文章简要介绍'
          // };
      return {
          // tableData: Array(20).fill(item)
        articles: []
      };
    },
    methods:{
      fetchdata(){
        // 重新刷新数据 复用方法
         this.$http.get('articles').then(res => {
        this.articles = res.data});
      },
      remove(id){
        this.$http.delete(`articles/${id}`).then(res => {
          this.$message({
            message:'文章删除成功！',
            type:'success'
          });
        this.fetchdata()
        });
      },
      edit(id){
        this.$router.push(`articles/${id}/edit`)
      },
    },created() {
        this.fetchdata()
    }
  };   
</script>
