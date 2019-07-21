<template>
  <div class="right-box">
    <div class="search">
      <el-input placeholder="请输入内容" v-model="input3">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
      <div class="tuijian">
        推荐:
        <a href="javaScript:;">广州</a>
        <a href="javaScript:;">上海</a>
        <a href="javaScript:;">北京</a>
      </div>
    </div>

    <div class="tuijian-gonglue">
      <h2>推荐攻略</h2>
      <el-button class="tj-btn" type="primary" icon="el-icon-edit">写游记</el-button>
    </div>

    <!-- 攻略文章 -->
    <div>
      <div class="tj-method">
        <h3>塞班贵？一定是你的打开方式不对！6000块玩转塞班</h3>
        <p><a href="">大家对塞班岛总存在着这样的误解，知道它是美属地盘，就理所当然地觉得这里的花费一定很高，花费高有高的玩法，那如果只有6000块的预算呢？要怎么玩？关于旅行这件事，我们要让钱花得更有道理，收下这份攻略，带你6000块花式玩转塞班。图：塞班岛。 by第5季旅游一、怎样用6000块玩转塞班？大多数出境游客人不做预算或最终花费远远超出预算，对预算的合理分配对控制我们旅行的花费就很重要了，如何只花6000块玩转塞班岛，对预算超支say no？下面从5个方面来为您一一解读：机票+酒店、岛上交通、玩乐项目、吃以及购买纪念品。1.怎样订机票+酒店性价比最高？机票和酒店的花销往往会占据我们旅行大半的花销，假设机票酒店为塞班行预算的一半，剩下的吃行玩购为预算的另一半，如果能在机票酒店这部分省下钱，也就意味着在塞班岛用来吃行玩购的钱就增加了怎样去塞班？可以转机也可以直飞，转机大多会从韩国转，提前蹲守能买到韩国飞塞班的特价机票，2000以下就能入手，加上国内飞韩国的机票来回塞班得5000+，还没算上在塞班的住宿费用，转机还有中途等待的时间，光花在路途上的时间就比直飞要多上一倍甚至更多，转乘奔波劳累，非联程票还要担心行李托运问题，所以建议大家有直飞还是尽量选择直飞。在酒店上，旅途中我们呆在酒店的时间远比在外游玩的时间少，酒店干净整洁基本就能满足我们休息的需求，塞班不是个享受酒店的地方而且还真不能跟国内星级酒店等位比较，所以不建议大家花过多的钱在塞班的酒店体验上。怎样在机票酒店上获得最高性价比的体验？ 直飞塞班的航班一般和酒店一起打包成机票+酒店套餐，价格要比单定机票、酒店要更加便捷实惠，往往3千多就能把机票和酒店一键搞定。</a></p>
        <el-row type='flex' justify="space-between" align="center" class="method-imgbox">
          <a href=""><img src="https://n3-q.mafengwo.net/s10/M00/E8/E4/wKgBZ1octoCABhgLAAafahORRLs91.jpeg?imageView2%2F2%2Fw%2F1360%2Fq%2F90" alt=""></a>
          <a href=""><img src="https://images.mafengwo.net/images/i/face/brands_v3/6@2x.png" alt=""></a>
          <a href=""><img src="https://p1-q.mafengwo.net/s10/M00/E9/33/wKgBZ1octwiAAKAoAAJ9ixcJc9M71.jpeg?imageView2%2F2%2Fw%2F1360%2Fq%2F90" alt=""></a>
        </el-row>

        <!-- 文章下面烦得一逼的小图标 -->
        <el-row type="flex" justify="space-between" class="tj-bottom">
          <el-row type="flex" align="center">
            <span class="tj-zuobiao">
              <i class="el-icon-location-outline"></i>
              北京市
            </span>
            <el-row type="flex" align="center" class="tj-by">
              by
              <a href=""><img src="http://157.122.54.189:9095/assets/images/avatar.jpg" alt="" class="user-img"></a>
              <a href="">地球发动机</a>
            </el-row>
            <span class="tj-eyes">
              <i class="el-icon-view">
                2933
              </i>
            </span>
          </el-row>
          <span class="tj-zan">30 赞</span>
        </el-row>
      </div>
      <div class="tj-method">
        <h3>塞班贵？一定是你的打开方式不对！6000块玩转塞班</h3>
        <p><a href="">大家对塞班岛总存在着这样的误解，知道它是美属地盘，就理所当然地觉得这里的花费一定很高，花费高有高的玩法，那如果只有6000块的预算呢？要怎么玩？关于旅行这件事，我们要让钱花得更有道理，收下这份攻略，带你6000块花式玩转塞班。图：塞班岛。 by第5季旅游一、怎样用6000块玩转塞班？大多数出境游客人不做预算或最终花费远远超出预算，对预算的合理分配对控制我们旅行的花费就很重要了，如何只花6000块玩转塞班岛，对预算超支say no？下面从5个方面来为您一一解读：机票+酒店、岛上交通、玩乐项目、吃以及购买纪念品。1.怎样订机票+酒店性价比最高？机票和酒店的花销往往会占据我们旅行大半的花销，假设机票酒店为塞班行预算的一半，剩下的吃行玩购为预算的另一半，如果能在机票酒店这部分省下钱，也就意味着在塞班岛用来吃行玩购的钱就增加了怎样去塞班？可以转机也可以直飞，转机大多会从韩国转，提前蹲守能买到韩国飞塞班的特价机票，2000以下就能入手，加上国内飞韩国的机票来回塞班得5000+，还没算上在塞班的住宿费用，转机还有中途等待的时间，光花在路途上的时间就比直飞要多上一倍甚至更多，转乘奔波劳累，非联程票还要担心行李托运问题，所以建议大家有直飞还是尽量选择直飞。在酒店上，旅途中我们呆在酒店的时间远比在外游玩的时间少，酒店干净整洁基本就能满足我们休息的需求，塞班不是个享受酒店的地方而且还真不能跟国内星级酒店等位比较，所以不建议大家花过多的钱在塞班的酒店体验上。怎样在机票酒店上获得最高性价比的体验？ 直飞塞班的航班一般和酒店一起打包成机票+酒店套餐，价格要比单定机票、酒店要更加便捷实惠，往往3千多就能把机票和酒店一键搞定。</a></p>
        <el-row type='flex' justify="space-between" align="center" class="method-imgbox">
          <a href=""><img src="https://n3-q.mafengwo.net/s10/M00/E8/E4/wKgBZ1octoCABhgLAAafahORRLs91.jpeg?imageView2%2F2%2Fw%2F1360%2Fq%2F90" alt=""></a>
          <a href=""><img src="https://images.mafengwo.net/images/i/face/brands_v3/6@2x.png" alt=""></a>
          <a href=""><img src="https://p1-q.mafengwo.net/s10/M00/E9/33/wKgBZ1octwiAAKAoAAJ9ixcJc9M71.jpeg?imageView2%2F2%2Fw%2F1360%2Fq%2F90" alt=""></a>
        </el-row>

        <!-- 文章下面烦得一逼的小图标 -->
        <el-row type="flex" justify="space-between" class="tj-bottom">
          <el-row type="flex" align="center">
            <span class="tj-zuobiao">
              <i class="el-icon-location-outline"></i>
              北京市
            </span>
            <el-row type="flex" align="center" class="tj-by">
              by
              <a href=""><img src="http://157.122.54.189:9095/assets/images/avatar.jpg" alt="" class="user-img"></a>
              <a href="">地球发动机</a>
            </el-row>
            <span class="tj-eyes">
              <i class="el-icon-view">
                2933
              </i>
            </span>
          </el-row>
          <span class="tj-zan">30 赞</span>
        </el-row>
      </div>
      <div class="tj-method">
        <h3>塞班贵？一定是你的打开方式不对！6000块玩转塞班</h3>
        <p><a href="">大家对塞班岛总存在着这样的误解，知道它是美属地盘，就理所当然地觉得这里的花费一定很高，花费高有高的玩法，那如果只有6000块的预算呢？要怎么玩？关于旅行这件事，我们要让钱花得更有道理，收下这份攻略，带你6000块花式玩转塞班。图：塞班岛。 by第5季旅游一、怎样用6000块玩转塞班？大多数出境游客人不做预算或最终花费远远超出预算，对预算的合理分配对控制我们旅行的花费就很重要了，如何只花6000块玩转塞班岛，对预算超支say no？下面从5个方面来为您一一解读：机票+酒店、岛上交通、玩乐项目、吃以及购买纪念品。1.怎样订机票+酒店性价比最高？机票和酒店的花销往往会占据我们旅行大半的花销，假设机票酒店为塞班行预算的一半，剩下的吃行玩购为预算的另一半，如果能在机票酒店这部分省下钱，也就意味着在塞班岛用来吃行玩购的钱就增加了怎样去塞班？可以转机也可以直飞，转机大多会从韩国转，提前蹲守能买到韩国飞塞班的特价机票，2000以下就能入手，加上国内飞韩国的机票来回塞班得5000+，还没算上在塞班的住宿费用，转机还有中途等待的时间，光花在路途上的时间就比直飞要多上一倍甚至更多，转乘奔波劳累，非联程票还要担心行李托运问题，所以建议大家有直飞还是尽量选择直飞。在酒店上，旅途中我们呆在酒店的时间远比在外游玩的时间少，酒店干净整洁基本就能满足我们休息的需求，塞班不是个享受酒店的地方而且还真不能跟国内星级酒店等位比较，所以不建议大家花过多的钱在塞班的酒店体验上。怎样在机票酒店上获得最高性价比的体验？ 直飞塞班的航班一般和酒店一起打包成机票+酒店套餐，价格要比单定机票、酒店要更加便捷实惠，往往3千多就能把机票和酒店一键搞定。</a></p>
        <el-row type='flex' justify="space-between" align="center" class="method-imgbox">
          <a href=""><img src="https://n3-q.mafengwo.net/s10/M00/E8/E4/wKgBZ1octoCABhgLAAafahORRLs91.jpeg?imageView2%2F2%2Fw%2F1360%2Fq%2F90" alt=""></a>
          <a href=""><img src="https://images.mafengwo.net/images/i/face/brands_v3/6@2x.png" alt=""></a>
          <a href=""><img src="https://p1-q.mafengwo.net/s10/M00/E9/33/wKgBZ1octwiAAKAoAAJ9ixcJc9M71.jpeg?imageView2%2F2%2Fw%2F1360%2Fq%2F90" alt=""></a>
        </el-row>

        <!-- 文章下面烦得一逼的小图标 -->
        <el-row type="flex" justify="space-between" class="tj-bottom">
          <el-row type="flex" align="center">
            <span class="tj-zuobiao">
              <i class="el-icon-location-outline"></i>
              北京市
            </span>
            <el-row type="flex" align="center" class="tj-by">
              by
              <a href=""><img src="http://157.122.54.189:9095/assets/images/avatar.jpg" alt="" class="user-img"></a>
              <a href="">地球发动机</a>
            </el-row>
            <span class="tj-eyes">
              <i class="el-icon-view">
                2933
              </i>
            </span>
          </el-row>
          <span class="tj-zan">30 赞</span>
        </el-row>
      </div>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.right-box {
  width: 720px;
  .tuijian {
    margin-top: 10px;
    color: rgb(149, 152, 152);
  }
  .tuijian-gonglue {
    position: relative;
    border-bottom: 1px solid rgb(230, 231, 231);
    h2 {
      //   border-bottom: 1px solid rgb(46, 94, 149);
      margin-top: 10px;
      color: rgb(46, 94, 149);
      padding: 15px 0 15px 0;
    }
    /deep/.tj-btn {
      background-color: rgb(46, 94, 149);
      position: absolute;
      right: 0px;
      top: 8px;
    }
  }
}
.search {
  .el-input__inner {
    border: rgb(46, 94, 149);
  }
  .el-button {
    background-color: rgb(46, 94, 149);
    border-radius: 0 5px 5px 0;
  }
  /deep/.el-icon-search:before {
    color: white;
  }
}
.tj-method {
  margin-top: 15px;
  h3 {
    font-weight: 400;
  }
  p {
    margin: 15px 0 15px 0;
    line-height: 1.5;
    font-size: 14px;
    height: 70px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    a {
      color: #666;
    }
  }
  .tj-bottom {
    padding-bottom: 15px;
    border-bottom: 1px solid rgb(201, 199, 199);
    color: #666;
    margin: 15px 0;
    .tj-zuobiao {
      margin-right: 10px;
    }
    .tj-by {
      margin-right: 10px;
      img {
        display: block;
        width: 16px;
        height: 16px;
        border-radius: 100px;
        margin: 3px 5px 5px;
      }
    }
    .tj-eyes {
      margin-top: 1px;
    }
    .tj-zan {
      color: rgb(46, 94, 149);
    }
  }

  .method-imgbox {
    img {
      width: 220px;
      height: 150px;
      display: block;
      -o-object-fit: cover;
      object-fit: cover;
    }
  }
}
</style>
