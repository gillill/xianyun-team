<template>
  <div class="left-div">
    <div class="left-div-top">
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item v-for="(item,index) in data" :key="index" :title="item.type" :name="index">
          <div class="nav-box" v-for="(item,index) in item.children" :key="index">
            <a href="javascript:;"><span>{{index+1}}</span>
              <i>{{item.city}}</i></a>
            <a href="javascript:;">{{item.desc}}</a>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>

    <div class="left-div-bottom">
      <div class="city">推荐城市</div>
      <img src="@/static/images/pic_sea.jpeg" alt="">
    </div>

  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      activeName: '1'
    };
  },
}
</script>

<style lang="less" scoped>
.left-div {
  // height: 1000px;
  width: 230px;
  margin-right: 50px;
  .nav-box span {
    font-size: 24px;
    color: rgb(46, 94, 149);
    font-family: Source Sans Pro;
  }
  .nav-box i {
    color: rgb(46, 94, 149);
  }
  .nav-box a {
    color: rgb(149, 152, 152);
  }
}
.left-div-top {
  margin-bottom: 40px;
  .left-div-top el-collapse-item {
    padding-left: 20px;
  }
}
.city {
  padding-bottom: 5px;
  font-weight: 700;
  color: rgb(46, 94, 149);
  border-bottom: 1px solid rgb(211, 214, 214);
}
.left-div-bottom img {
  margin-top: 10px;
  width: 100%;
  height: 100%;
}
/deep/.el-collapse-item__header {
  height: 40px;
  line-height: 40px;
}
</style>

