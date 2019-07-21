<template>
  <div class="container">
    <div>
      <div class="main">
        <span>酒店</span>>
        <span>南京酒店</span>>
        <span>好来阁商务酒店</span>
        <h2 class="binguanname">好来阁商务宾馆</h2>
        <p class="Englishname">hao lai ge shang wu hotel</p>
        <p class="address">高淳县淳溪镇镇兴路118号(高淳县委党校对面)</p>
      </div>
      <div class="binguan"></div>
      <div class="tupian">
        <div class="img-left">
          <img src="http://157.122.54.189:9093/images/hotel-pics/1.jpeg" />
        </div>
        <div class="img-right">
          <div class="img-right-one"><img src="http://157.122.54.189:9093/images/hotel-pics/1.jpeg"></div>
          <div class="img-right-one"><img src="http://157.122.54.189:9093/images/hotel-pics/2.jpeg"></div>
          <div class="img-right-one"><img src="http://157.122.54.189:9093/images/hotel-pics/3.jpeg"></div>
          <div class="img-right-one"><img src="http://157.122.54.189:9093/images/hotel-pics/4.jpeg"></div>
          <div class="img-right-one"><img src="http://157.122.54.189:9093/images/hotel-pics/5.jpeg"></div>
          <div class="img-right-one"><img src="http://157.122.54.189:9093/images/hotel-pics/6.jpeg"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.container {
  width: 1000px;
  margin: 0 auto;
  padding: 20px 0;
  .main {
    .binguanname {
      padding-top: 20px;
    }
    .Englishname {
      color: #666;
    }
    .address {
      color: #666;
    }
  }
  .tupian{
    height: 700px;
    margin-top: 30px;
    .img-left{
      float: left;
      img{
       width: 640px;
      height: 342px;
      }
     
    }
    .img-right{
      height: 360px;
      width: 33%;
      // background-color: red;
      float: right;
      .img-right-one{
        // padding: 0 10px;
        width: 50%;
        float: left;
        img{
          width: 160px;
        padding-left:10px;
        padding-right: 10px;          
        }
      }
    }
  }
}
</style>


