<template>
  <div>
    <van-cell>
    <!-- 标题区域的插槽 -->
      <template #title>
        <div class="title-box">
        <!-- 标题 -->
          <span>{{ title }}</span>
        <!-- 单张图片 -->
          <img :src="cover.images[0]" alt="" class="thumb" v-if="cover.type === 1">
        </div>
        <!-- 三张图片 -->
        <div class="thumb-box"  v-if="cover.type === 3">
          <img :src="item" alt="" class="thumb" v-for="(item,i) in cover.images" :key="i">
          <!-- <img :src="cover.images[0]" alt="" class="thumb">
          <img :src="cover.images[1]" alt="" class="thumb">
          <img :src="cover.images[2]" alt="" class="thumb"> -->
        </div>
      </template>
    <!-- label 区域的插槽 -->
      <template #label>
      <div class="label-box">
      <span>{{ author }}&nbsp;&nbsp; {{ commentnum }}条评论 &nbsp;&nbsp; 发布日期{{ pubdate }}</span>
      <!-- 关闭按钮 -->
      <van-icon name="cross" />
      </div>
      </template>
      </van-cell>
  </div>
</template>

<script>
export default {
  name: 'ArticleInfo',
  // 自定义属性
  props: {
    // 文章标题
    title: {
      type: String,
      default: ''
    },
    // 作者名字
    author: {
      type: String,
      default: ''
    },
    // 评论条数
    commentnum: {
      type: [Number, String],
      default: 0
    },
    // 发布日期
    pubdate: {
      type: String,
      default: ''
    },
    // 文章封面
    cover: {
      type: Object,
      default: function () {
        return { cover: 0 }
      }
    }
  }
}
</script>

<style lang="less" scope>
  .label-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  }
  .thumb {
  // 矩形黄金比例：0.618
  width: 113px;
  height: 70px;
  background-color: #f8f8f8;
  object-fit: cover;
  border-radius: 5%;
  }
  .title-box {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
    span{
      font-weight: 500;
      font-size: 14px;
        line-height: 26px;
    }
  }
  .thumb-box {
  display: flex;
  justify-content: space-between;
  }
</style>
