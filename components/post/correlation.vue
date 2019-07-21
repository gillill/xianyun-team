<template>
  <div class="container">
 <h4>相关攻略</h4>

   <div class="correlationList">
    <li>
      <div class="correlation_image">
        <img src="http://157.122.54.189:9095/uploads/ab2fdb517f9e4a5e81fc1cefaaaf5e4d.jpg" alt="">
      </div>
      <div class="correlation_text">
        <p>文章的标题</p>
        <div class="correlation_detail">
          <span>2019-07-21 3:50</span> <span>阅读</span>
        </div>
      </div>
    </li>

   </div>

  </div>
</template>

<script>
export default {
  data(){
  return{   
  }
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
     .correlation_image{
       img{
         width: 80px;
         height: 80px;
       }
     }
   }
}
</style>


