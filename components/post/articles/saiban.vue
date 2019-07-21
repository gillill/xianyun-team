<template>
  <div class="container">
    <div class="left_contain">
      <h1>{{postData.title}}</h1>
      <hr>
      <div class="read ">
        <span>攻略:{{postData.updated_at}}</span>
        <span>阅读:{{postData.watch}}</span>
      </div>
      <!-- 文章具体内容展示 -->
      <div class="post_detail" v-html="postData.content"  >
        


      </div>

    </div>
  </div>
</template>

<script>
import moment  from 'moment'
export default {
data(){
  return{
    postData:{}
  }
},
mounted () {
 this.$axios({
      url:"/posts",
      params:{
        id:4
      }
    }).then(res=>{
      console.log(res);
      this.postData=res.data.data[0]
    })
  
},
props: {
    // 传入大的数组
    data: {
      type: Array,
      default: [],
        
    }
  },
  // filters: {
  //   createdTime:(value)=>{
  //    value= moment(value).format('YYYY-MM-DD')
  //   }
  // }
}
</script>

<style lang="less" scoped>
.container {
  .left_contain {
    width: 700px;
    overflow: hidden;

    p{
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
    .post_detail{
      /deep/ img{
        max-width: 100%;
        max-height:100%;
      }
    }
   
  }
}

</style>

