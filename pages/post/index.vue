<template>
  <div class="container">
   首页
  </div>
</template>

<script>

export default {
<<<<<<< HEAD
  data() {
    return {
      data:[],
      datas:[],
    }
  },
  mounted() {
    this.$axios({
      url: '/posts/cities',
      method: 'get',
    }).then(res => {
      const { data } = res.data
      this.data = data
    })
  },
  components: {
    PostLeft,
    PostRight
  }
=======
>>>>>>> b97f6f88a55b86893e44b1f16dc49f8f120cab3b
}
</script>

