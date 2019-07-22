<template>
  <div class="container">
    <div class="left_contain">
      <h1>{{postData.title}}</h1>
      <hr>
      <div class="read ">
        <span>攻略:{{postData.updated_at |formatDate}}</span>
        <span>阅读:{{postData.watch}}</span>
      </div>
      <!-- 文章具体内容展示 -->
      <div
        class="post_detail"
        v-html="postData.content"
      >

      </div>

    </div>
    <!-- <input type="hidden" :value="getPostData"> -->
  </div>
</template>

<script>
import { formatDate } from "assets/data.js"
export default {
  data() {
    return {
      id: this.$route.query.id - 0,
      postData: {}
    }
  },
  methods: {
    init() {
      const { id } = this.$route.query
      // setTimeout(() => {
      this.$axios({
        url: "/posts",
        params: { id: id - 0 }
      }).then(res => {
        console.log(res, 777);
        console.log(this.$route.query);
        this.postData = res.data.data[0]
        this.$store.commit("post/setPostData", res.data.data[0])

      })
    }
  },
  mounted() {
    this.init()
  },
  watch: {
    $route() {
      this.init()
    }
  },

  filters: {
    formatDate(time) {
      var date = new Date(time);
      return formatDate(date, 'yyyy-MM-dd hh:mm');
    }

  },
}
</script>

<style lang="less" scoped>
.container {
  .left_contain {
    width: 700px;
    overflow: hidden;

    p {
      line-height: 24px;
    }
    .read {
      // float: right;
      text-align: right;
      span {
        color: #ccc;
        font-size: 16px;
      }
      margin: 15px 0;
      overflow: hidden;
    }
    .post_detail {
      /deep/ img {
        max-width: 100%;
        max-height: 100%;
      }
    }
  }
}
</style>

