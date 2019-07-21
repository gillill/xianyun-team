<template>
  <div class="container">
    <!-- 左侧导航模块 -->
    <PostLeft :data='data' />

    <!-- 右侧模块 -->
    <PostRight :datas='datas' />
  </div>
</template>

<script>
import PostLeft from '@/components/post/postLeft.vue'
import PostRight from '@/components/post/postRight.vue'
export default {
  data() {
    return {
      data:[],
      datas:[]
    }
  },
  mounted() {
    this.$axios({
      url: '/posts/cities',
      method: 'get',
    }).then(res => {
      // console.log(res);
      
      const { data } = res.data
      this.data = data
      // console.log(this.data)
    })
    this.$axios({
      url:'/posts',
      method:'get',
    }).then(res=>{
      console.log(res)
      const {data} = res.data
      this.datas = data
    })
    // this.$axios({
    //   url:'/postkinds',
    //   method:'get',
    // }).then(res=>{
    //   console.log(res)
    // })
  },
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


