<template>
    <div class="hoList clearfloat">
      <div>
        <div class="hoLeft" @click="handleTo">
          <img :src="`${data.photos}`" alt="">
        </div>
        <div class="hoMiddle">
            <h2 @click="handleTo">{{data.name}}</h2>
            <span>{{data.alias}}</span>
            <i
            class="el-icon-trophy"
            ></i><i
            class="el-icon-trophy"
            ></i><i
            class="el-icon-trophy"
            ></i>
            <span>{{data.hoteltype.name}}</span>
            <div class="box clearfloat">
              <div class="star">
              <i class="el-icon-star-on"></i>
              <i class="el-icon-star-on"></i>
              <i class="el-icon-star-on"></i>
              <i class="el-icon-star-on"></i>
              <i class="el-icon-star-on"></i>
              <span class="fen">{{data.stars}}分</span>
              </div>
              <div class="comment">
                <span>{{data.common_remarks}}</span>
                <span>条评价</span>
              </div>
              <div class="travel">
                 <span>{{data.very_good_remarks}}</span>
                <span>条篇游记</span>
              </div>
            </div>
            <div style="margin-top:15px;">
              <i class="el-icon-location"></i>
              <span>位于:{{data.address}}</span>
            </div>
        </div>
        <div class="hoRight">
          <div  class="clearfloat products"
          v-for="(item,index) in data.products"
          :key="index">
            <div  style="float:left">{{item.name}}</div>
            <div style="float:right">
              <span style="color: rgb(223, 100, 18);">￥{{item.price}}</span>
              <span>起</span>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>


<script>
export default {
  
  data(){
    return{
    }
  },
   props: {
    // 传入的对象
    data: {
      type: Object,
      default: {
      }
    }
  },
  methods: {
    handleTo(){
      this.$router.push("/hoteldetails")
    }
  }
}
</script>

<style lang="less" scoped>
  .clearfloat:after{display:block;clear:both;content:"";visibility:hidden;height:0}
   .clearfloat{zoom:1}
  .hoList{
    padding: 30px 0;
    border-bottom: 1px solid rgb(189, 189, 189);
    .hoLeft{
      float: left;
      width: 300px;
      height: 205px;
      cursor: pointer;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .hoMiddle{
      float: left;
      margin-left: 15px;
      width: 430px;
      h2{   
          color: black;
      cursor: pointer;

      }
      .el-icon-trophy{
        color: rgb(223, 100, 18);
      }
      .el-icon-star-on{
        font-size: 25px;
        color: rgb(230, 181, 21);
      }   
      .el-icon-star-on:nth-child(4){
        color: rgb(206, 206, 206);
      }
      .el-icon-star-on:nth-child(5){
        color: rgb(206, 206, 206);
      }
      .fen{
        color: rgb(223, 100, 18);
        font-size: 15px;
        }
      .box{
        height: 20px;
        line-height: 20px;
        margin-top: 5px;
      }
      .star {
        float: left;
      }
      .comment{
        float: left;
        margin-left: 30px;
      }
      .travel{
        float: left;
        margin-left: 70px;

      }

    }
    .hoRight{
      float: right;
      width: 200px;
    .products{
      cursor: pointer;
      padding: 12px 12px 12px 5px;
      border-bottom: 1px solid rgb(189, 189, 189);
      &:hover{
        background-color: rgb(212, 212, 212)
      }
    }

    }
  }
</style>

