<template>
  <div class="detail">
    <!-- 面包屑 -->
    <div class="detail-crumbs">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '#' }">酒店</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '#' }">南京酒店</el-breadcrumb-item>
        <el-breadcrumb-item>好来阁商务宾馆</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- 详情信息 -->
    <div class="detail-info">
      <span class="name">好来阁商务宾馆</span>
      <i class="iconfont iconhuangguan"></i>
      <i class="iconfont iconhuangguan"></i>
      <i class="iconfont iconhuangguan"></i>
      <i class="iconfont iconhuangguan"></i>
      <i class="iconfont iconhuangguan"></i>
      <p>hao lai ge shang wu hotel</p>
      <i class="el-icon-location icon"></i>
      <span>高淳县淳溪镇镇兴路118号(高淳县委党校对面)</span>
    </div>
    <!-- 图片详情 -->
    <div class="detail-img">
      <el-row>
        <el-col :span="16">
          <div class="img-left">
            <img :src="displayUrl" alt />
          </div>
        </el-col>
        <el-col :span="8">
          <div class="img-right">
            <el-row type="flex" justify="center">
              <el-col :span="24">
                <div
                  class="img-item"
                  v-for="(item,index) in imgList"
                  :key="index"
                  @click="changeImg(item.url)"
                >
                  <img :src="item.url" alt />
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 地图组件 -->
    <Hotelmap />
    <!-- 基本信息 -->
    <div class="baseinfo">
      <el-row class="base-item">
        <el-col :span="4">基本信息</el-col>
        <el-col :span="5">入住时间: 14:00之后</el-col>
        <el-col :span="5">离店时间: 12:00之前</el-col>
        <el-col :span="5">2014年开业 / 2014年装修</el-col>
        <el-col :span="5">酒店规模: 250间客房</el-col>
      </el-row>
      <el-row class="base-item">
        <el-col :span="4">主要设施</el-col>
        <el-col :span="20">入住时间: 14:00之后</el-col>
      </el-row>
      <el-row class="base-item">
        <el-col :span="4">停车服务</el-col>
        <el-col :span="20">倒贴停车</el-col>
      </el-row>
      <el-row class="base-item">
        <el-col :span="4">品牌信息</el-col>
        <el-col :span="20">你猜</el-col>
      </el-row>
    </div>
    <!-- 评论 -->
    <div class="comment">
      <div class="com-haed">
        <p>10条真实用户评论</p>
        <el-row>
          <el-col :span="4">
            <el-row :span="8">总评数：10</el-row>
            <el-row :span="8">好评数：10</el-row>
            <el-row :span="8">差评数：10</el-row>
          </el-col>
          <el-col :span="20">
            <el-row class="server">
              <el-col :span="6">
                <div class="recommend">
                  <div class="star">推荐</div>
                  <el-rate
                    v-model="value"
                    disabled
                    show-score
                    text-color="#ff9900"
                    score-template="{value}"
                    class="good"
                  ></el-rate>
                </div>
              </el-col>
              <el-col :span="6" class="circle">
                <span class="circle-item">环境</span>
                <el-progress
                  type="circle"
                  :width="80"
                  :text-inside="true"
                  :stroke-width="3"
                  :percentage="25"
                   color="#f90"
                ></el-progress>
              </el-col>
              <el-col :span="6" class="circle">
                <span class="circle-item">产品</span>
                <el-progress
                  type="circle"
                  :width="80"
                  :text-inside="true"
                  :stroke-width="3"
                  :percentage="25"
                  color="#f90"
                ></el-progress>
              </el-col>
              <el-col :span="6" class="circle">
                <span class="circle-item">服务</span>
                <el-progress
                  type="circle"
                  :width="80"
                  :text-inside="true"
                  :stroke-width="3"
                  :percentage="25"
                   color="#f90"
                ></el-progress>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
      <Comment />
    </div>
  </div>
</template>
<script>
import Hotelmap from "@/components/hotel/hotelMap";
import Comment from "@/components/hotel/comment";
export default {
  components: {
    Hotelmap,
    Comment
  },
  data() {
    return {
      imgList: [
        { id: 1, url: "http://157.122.54.189:9093/images/hotel-pics/1.jpeg" },
        { id: 2, url: "http://157.122.54.189:9093/images/hotel-pics/2.jpeg" },
        { id: 3, url: "http://157.122.54.189:9093/images/hotel-pics/3.jpeg" },
        { id: 4, url: "http://157.122.54.189:9093/images/hotel-pics/4.jpeg" },
        { id: 5, url: "http://157.122.54.189:9093/images/hotel-pics/5.jpeg" },
        { id: 6, url: "http://157.122.54.189:9093/images/hotel-pics/6.jpeg" }
      ],
      displayUrl: "http://157.122.54.189:9093/images/hotel-pics/1.jpeg",
      value: 3.5
    };
  },
  methods: {
    changeImg(url) {
      this.displayUrl = url;
    }
  }
};
</script>


<style lang="less" scoped>
.detail {
  width: 1000px;
  margin: 0 auto;
  .detail-crumbs {
    padding: 20px 0;
  }
  .detail-info {
    padding-bottom: 30px;
    .name {
      font-size: 25px;
      font-weight: 600;
    }
    i {
      color: #f90;
      font-size: 20px;
    }
    .icon {
      color: #409eff;
      font-size: 16px;
    }
  }
  .detail-img {
    img {
      width: 100%;
      height: 100%;
      cursor: pointer;
    }
    .img-left {
      width: 640px;
      height: 360px;
    }
    .img-right {
      width: 360px;
      .img-item {
        float: left;
        width: 160px;
        height: 110px;
        padding: 0 14px 14px 0;
      }
    }
  }
  .baseinfo {
    .base-item {
      padding: 20px 0;
      border-bottom: 1px solid #ccc;
    }
  }
  .comment {
    .com-haed {
      padding: 30px 0;
      p {
        font-size: 16px;
        font-weight: bold;
        padding-bottom: 15px;
      }
      .server {
        color: #f90;
        .recommend {
          position: relative;
          .star {
            width: 70px;
            height: 70px;
            border-radius: 50%;
            border: 2px solid #f90;
            opacity: 0.3;
            text-align: center;
            line-height: 70px;
            font-size: 24px;
            transform: rotate(-30deg);
          }
          .good {
            position: absolute;
            top: 26px;
            left: -22px;
          }
        }
        .circle{
            position: relative;
            .circle-item{
                position: absolute;
                top: 18px;
                left: 25px;
            }
        }
      }
    }
  }
}
</style>
