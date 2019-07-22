<template>
  <div class="container">
    <!-- 面包屑 -->
    <el-breadcrumb separator="/" class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/post' }">旅游攻略</el-breadcrumb-item>
      <el-breadcrumb-item>攻略详情</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 左侧文章显示 组件-->
    <SaiBan :data="postData" />
    <!-- 底部评论显示 -->
    <Comment />
    <div class="correlation">
      <Correlation />
    </div>
  </div>
</template>

<script>
import SaiBan from "@/components/post/articles/saiban.vue"
import Comment from "@/components/post/comment.vue"
import Correlation from "@/components/post/correlation.vue"

export default {
  data() {
    return {
      postData: [
        {}
      ]
    }
  },
  components: {
    SaiBan,
    Comment,
    Correlation
  },
  mounted() {
    // this.$axios({
    //   url:"/posts",
    //   params:{
    //     id:4
    //   }
    // }).then(res=>{
    //   console.log(res,122);
    //   this.postData=res.data.data
    //   console.log(this.postData); 
    // })
  }

}
</script>

<style lang="less" scoped>
.container {
  width: 1000px;
  margin: 0 auto;
  position: relative;
  .correlation {
    width: 280px;
    position: absolute;
    right: 0px;
    top: 0px;
  }
  .breadcrumb {
    margin: 20px 0;
  }
}
</style>



