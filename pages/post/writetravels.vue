<template>
  <div class="container">
    <div class="el-row is-justify-space-between el-row--flex">
      <div class="main">
        <h2>发表新攻略</h2>
        <p class="create-desc">分享你的个人游记，让更多人看到哦！</p>
        <form class="el-form">
          <div class="el-form-item">
            <div class="el-form-item__content">
              <div class="el-input">
                <input type="text" autocomplete="off" placeholder="请输入标题" class="el-input__inner" />
              </div>
            </div>
          </div>
        </form>
        
        <!-- 富文本框使用 -->
          <!-- <quill-editor
          v-model="content"
          ref="myQuillEditor"
          :options="editorOption"
          >
        </quill-editor> -->
         
         
        
        <!-- 底部发布 -->
        <div class="create-button">
          <button type="button" class="el-button el-button--primary el-button--small">
            <span>发布</span>
          </button>
          <span class="submit-side">
            或者
            <a href="javascript:;">保存到草稿</a>
          </span>
        </div>
      </div>
      <!-- 侧边栏-草稿箱 -->
      <div class="aside">
        <div class="draft-box">
          <h4 class="draft-title">草稿箱（5）</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

// import VueQuillEditor from 'vue-quill-editor'
// Vue.use(VueQuillEditor)

export default {
  data () {
    return {
      // content: null,
      // editorOption: {
      // }
    }
  },
  // components: {
  //   VueQuillEditor
  // }
 
};
</script>

<style lang="less" scoped>
.container {
  width: 1000px;
  margin: 0 auto;
  padding: 20px 0;
  .el-row--flex.is-justify-space-between {
    justify-content: space-between;
  }
  .el-row--flex {
    display: flex;
  }
  .el-row {
    box-sizing: border-box;
  }
  .main {
    width: 750px;
    .main h2[data-v-a7cc81fa] {
      font-weight: 400;
      font-size: 22px;
      margin-bottom: 10px;
      .create-desc {
        font-size: 12px;
        color: #999;
        margin-bottom: 10px;
      }
    }
  }
}
</style>


