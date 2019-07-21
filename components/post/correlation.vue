<template>
  <div class="container">
 <h4>相关攻略</h4>

   <div class="correlationList">
    <li v-for="(item,index) in correlationList" :key="index">
      <div class="correlation_image">
        <img :src=item.images[0] alt="">
      </div>
      <div class="correlation_text">
        <p>{{item.title}}</p>
        <div class="correlation_detail">
          <span >{{item.updated_at |timeFormat}}</span> <span>阅读{{item.watch}}</span>
        </div>
      </div>
    </li>

   </div>

  </div>
</template>

<script>
import moment from 'moment'
export default {
  data(){
  return{ 
    correlationList:[] 
  }
  },
  filters: {
    timeFormat:function(value){
      return value=moment().format('YYYY-MM-DD, hh:mm')
    }
  },
  mounted () {
     this.$axios({
       url:"/posts/recommend",
       parmas:{
         id:4
       }
     }).then(res=>{
       console.log(res,123);
      this.correlationList=res.data.data
       
     })
  }
}
</script>

<style lang="less" scoped>
.correlationList{
   li{
     border-top:1px solid #ccc;
     border-bottom: 1px solid #ccc;
     padding:30px 0;
     width: 280px;
     display: flex;
     justify-content: space-between;
     .correlation_image{
       img{
         width: 80px;
         height: 80px;
       }
     }
     p{
       margin-bottom: 20px;
     }
     .correlation_detail{
       color: #ccc;
       font-size: 14px;
     }
   }
}
</style>


