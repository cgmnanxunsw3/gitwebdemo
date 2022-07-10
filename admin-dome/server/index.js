// 这是一个后端文件夹server下的js文件   前后端使用到的工具都装到同一文件夹了
//1 引用express
const express = require('express')
//2 创建express实例
const app = express()

//5 定义数据模型 允许跨域cors
app.use(require('cors')())
//7-2 express要识别客户端提交过来的json数据
app.use(express.json)

//6 连接数据库 MongoDB
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/databaseadmin-dome',{
  useNewUrlParser:true,
  useFindAndModify:true,
  userCreateIndex:true,
})
// 创建Article模型  （创建数据库模型 后端mongodb自动创建数据库和字段）
const Article = mongoose.model('Article',new mongoose.Schema({
  title:{type:String},
  author:{type:String},
  introduce:{type:String},
}))

//4 app.get：展示数据的接口   应用于默认首页列表展示    
app.get('/',async(req,res) => {
  res.send('index')
})

//7-1 app.post:创建数据的接口   应用于新增文章 Article.create
app.post('/api/articles',async (req,res) => {
  const article = await Article.create(req.body)
  res.send(article)
})

// 8 文章列表接口 Article.find
app.get('/api/articles',async(req,res) => {
  const articles =await Article.find()
  res.send(articles)
})

// 9 删除文章
app.delete('/api/article/id', async (req,res) => {
  await Article.findByIdDelete(req.params.id)
  res.send({
    status: true
  })
})

// 10-1 文章详情页接口
app.get('/api/articles/:id',async(req,res) => {
  const article =await Article.findById(req.params.id)
  res.send(article)
})
// 10-2 修改文章接口
app.put('/api/articles/:id',async(req,res) => {
  const article =await Article.findByIdAndUpdate(req.params.id,req.body)
  res.send(article)
})

//3 启用监听 listen(port: number, hostname: string, callback?: () => void): Server
// 端口：3001
app.listen(3001,() => {
  console.log('http://localhost:3001/')
})