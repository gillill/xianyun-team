<template>
  <div class="container">
    <h4>相关攻略</h4>

    <div class="correlationList">
      <li
        v-for="(item,index) in correlationList"
        :key="index"
        @click="handleShow(item.id)"
      >
        <div class="correlation_image">
          <img
            :src=item.images[0]
            alt=""
          >
        </div>
        <div class="correlation_text">
          <p>{{item.title}}</p>
          <div class="correlation_detail">
            <span>{{item.updated_at |formatDate}}</span> <span>阅读{{item.watch}}</span>
          </div>
        </div>
      </li>

    </div>

  </div>
</template>

<script>
import { formatDate } from "assets/data.js"
export default {
  data() {
    return {
      correlationList: []
    }
  },
  filters: {
    formatDate(time) {
      var date = new Date(time);
      return formatDate(date, 'yyyy-MM-dd hh:mm');
    }
  },
  mounted() {
    this.$axios({
      url: "/posts/recommend",
      parmas: {
        id: this.$route.query.id
      }
    }).then(res => {
      console.log(res, 123);
      this.correlationList = res.data.data

    })
  },
  methods: {
    handleShow(id) {
      console.log(id);
      //  this.$router.push('/post/detail?id=' + id)
      // setTimeout(() => {
        this.$router.push('/post/detail?id=' + id)  
      // }, 1000)
    }
  }
}
</script>

<style lang="less" scoped>
.correlationList {
  li {
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    padding: 30px 0;
    width: 280px;
    display: flex;
    justify-content: space-between;
    .correlation_image {
      img {
        width: 80px;
        height: 80px;
      }
    }
    p {
      margin-bottom: 20px;
    }
    .correlation_detail {
      color: #ccc;
      font-size: 14px;
    }
  }
}
</style>


