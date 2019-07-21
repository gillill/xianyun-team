<template>
  <div class="container">
    <!-- 左侧导航模块 -->
   <PostLeft/>

   <!-- 右侧模块 -->
   <PostRight/>
  </div>
</template>

<script>
import PostLeft from '@/components/post/postLeft.vue'
import PostRight from '@/components/post/postRight.vue'
export default {
  components: {
    PostLeft,
    PostRight
  }
}
</script>

<style lang="less" scoped>
  .container {
    display: flex;
    width: 1000px;
    margin: 20px auto 0;
    }
</style>


