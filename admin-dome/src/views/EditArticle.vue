<template>
  <div>
    <el-form @submit.native.prevent="ArticleSave" ref="form" :model="article" label-width="80px">
  <el-form-item label="文章标题">
    <el-input v-model="article.title"></el-input>
  </el-form-item>
    <el-form-item label="作者">
    <el-input v-model="article.author"></el-input>
  </el-form-item>

  <!-- <el-form-item label="发布时间">
    <el-col :span="11">
      <el-date-picker type="date" placeholder="选择日期" v-model="article.date01" style="width: 100%;"></el-date-picker>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-time-picker placeholder="选择时间" v-model="article.date02" style="width: 100%;"></el-time-picker>
    </el-col>
  </el-form-item> -->

  <el-form-item label="文章简介">
    <el-input type="textarea" v-model="article.introduce"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" native-type="submit">保存修改</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        article: {
          title: '',
          author: '',
          introduce: ''
        }
      }
    },
    methods: {
      ArticleSave() {
        this.$http.put(`articles/${this.params.id}`,this.article).then(res => {
          this.$message({
            message:'文章修改成功！',
            type:'success'
          })
          this.$router.push('/articles/list')
          // console.log(res.data)
        });
      },
      fetch(){
        this.$http.get(`/articles/${this.$route.params.id}`).then(res => {
          this.article = res.data
        })
      }
    },
  }
</script>