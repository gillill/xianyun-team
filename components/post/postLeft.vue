<template>
  <div class="left-div">
    <div class="left-div-top">
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item title="热门城市" name="1">
          <div class="nav-box"><span>1</span> <i>北京</i> <a href="javaScript:;">世界著名古都和现代化国际城市</a></div>
          <div>2 广州 粤港澳大湾区、泛珠江三角洲经济区</div>
          <div>3 上海 长江入海口，东隔东中国海</div>
          <div>4 成都 国家历史文化名城</div>
          <div>5 西安 中国国际形象最佳城市之一</div>
        </el-collapse-item>
        <el-collapse-item title="推荐城市" name="2">
          <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
          <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
        </el-collapse-item>
        <el-collapse-item title="奔向海岛" name="3">
          <div>简化流程：设计简洁直观的操作流程；</div>
          <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
          <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
        </el-collapse-item>
        <el-collapse-item title="主题推荐" name="4">
          <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
          <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
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
  data() {
    return {
      activeName: '1'
    };
  }
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

