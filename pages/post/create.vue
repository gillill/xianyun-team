<template>
  <div class="container">
    <el-row type="flex" justify="space-between" class="main">
      <div class="add">
        <h2>发表新攻略</h2>
        <p class="create-desc">分享你的个人游记，让更多人看到哦！</p>
        <el-form class="myForm">
          <el-form-item>
            <el-input type="text" autocomplete="off" placeholder="请输入标题" v-model="form.title"></el-input>
          </el-form-item>
          <div>
            <VueEditor :config="config" ref="vueEditor" v-model="form.content" />
          </div>

          <el-form-item label="选择城市">
            <el-autocomplete
              :fetch-suggestions="queryCitySearch"
              placeholder="请搜索游玩城市"
              @select="handleCitySelect"
              class="el-autocomplete"
              v-model="form.city"
            ></el-autocomplete>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm" class="btnForm">提交</el-button>或者
            <span class="bcDraftBox" @click="bcDraftBox">保存到草稿</span>
          </el-form-item>
        </el-form>
      </div>
      <div class="aside">
        <div class="draft-box">
          <h4 class="draft-title">草稿箱（{{darftContent.length}}）</h4>
          <div class="draft-list">
            <div class="draft-item" v-for="(item,index) in darftContent" :key="index">
              <div class="draft-post-title" @click="handelDraftEdit(index)">
                {{item.title}}
                <span>🖌</span>
                <p>{{item.time}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </el-row>
  </div>
</template>
<script>
import moment from "moment";
import "quill/dist/quill.snow.css";
let VueEditor;

if (process.browser) {
  VueEditor = require("vue-word-editor").default;
}

export default {
  components: {
    VueEditor
  },
  data() {
    return {
      form: {
        city: "",
        content: "",
        title: ""
      },
      darftContent: [
        {
          city: "",
          content: "",
          title: "",
          time: ""
        }
      ],
      config: {
        modules: {
          // 工具栏
          toolbar: [
            ["bold", "italic", "underline", "strike"], // toggled buttons
            ["blockquote", "code-block"],
            ["image", "video"],

            [{ header: 1 }, { header: 2 }], // custom button values
            [{ list: "ordered" }, { list: "bullet" }],
            [{ script: "sub" }, { script: "super" }], // superscript/subscript
            [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
            [{ direction: "rtl" }] // text direction
          ]
        },
        // 主题
        theme: "snow",
        uploadImage: {
          url: "http://localhost:1337/upload",
          name: "files",
          uploadBefore(file) {
            return true;
          },
          uploadProgress(res) {},
          uploadSuccess(res, insert) {
            insert("http://localhost:1337" + res.data[0].url);
          },
          uploadError() {},
          showProgress: false
        },

        uploadVideo: {
          //url: "http://157.122.54.189:9095/upload",
          url: "http://localhost:1337/upload",
          name: "files",
          uploadBefore(file) {
            return true;
          },
          uploadProgress(res) {},
          uploadSuccess(res, insert) {
            insert("http://localhost:1337" + res.data[0].url);
          },
          uploadError() {}
        }
      }
    };
  },
  methods: {
    queryCitySearch(value, cb) {
      if (!value.trim()) {
        cb([]);
        return;
      }
      this.$axios({
        url: "/cities",
        params: {
          name: value
        }
      }).then(res => {
        const { data } = res.data;

        const newData = data.map(v => {
          return {
            ...v,
            value: v.name
          };
        });

        cb(newData);
      });
    },
    handleCitySelect(item) {
      this.form.city = item.name;
    },
    submitForm() {
      const data = {
        city: this.form.city,
        content: this.$refs.vueEditor.editor.root.innerHTML,
        title: this.form.title
      };

      const rules = {
        title: {
          value: this.form.title,
          message: "请输入标题"
        },
        content: {
          value: this.$refs.vueEditor.editor.root.innerHTML,
          message: "内容不能为空"
        },
        city: {
          value: this.form.city,
          message: "请输入城市名称"
        }
      };
      let valid = true;

      Object.keys(rules).forEach(v => {
        if (!valid) return;

        if (!rules[v].value) {
          valid = false;
          this.$message.warning(rules[v].message);
        }
      });
      if (valid) {
        this.$axios({
          url: "/posts",
          method: "POST",
          data,
          headers: {
            Authorization: `Bearer ${this.$store.state.user.userInfo.token}`
          }
        }).then(res => {
          if (res.data.status === 0) {
            this.$message({
              type: "success",
              message: res.data.message
            });
            this.$router.push("/post");
          }
        });
      }
    },
    bcDraftBox() {
      this.time = moment(new Date()).format("YYYY-MM-DD");

      const draftForm = {
        city: this.form.city,
        content: this.$refs.vueEditor.editor.root.innerHTML,
        title: this.form.title,
        time: this.time
      };

      const rules = {
        title: {
          value: this.form.title,
          message: "请输入标题"
        },
        content: {
          value: this.$refs.vueEditor.editor.root.innerHTML,
          message: "内容不能为空"
        },
        city: {
          value: this.form.city,
          message: "请输入城市名称"
        }
      };
      let valid = true;

      Object.keys(rules).forEach(v => {
        if (!valid) return;

        if (!rules[v].value) {
          valid = false;
          this.$message.warning(rules[v].message);
        }
      });
      if (valid) {
        this.darftContent.push(draftForm);
      }
    },
    handelDraftEdit(index) {
      const data = this.darftContent[index];
      this.form.title=data.title,
      this.$refs.vueEditor.editor.root.innerHTML=data.content,
      this.form.city=data.city
    }
  },
  mounted() {}
};
</script>

<style lang="less" scoped>
.container {
  /deep/ .ql-editor {
    height: 280px;
  }
  .main {
    width: 1000px;
    margin: 0 auto;
    padding: 20px;
    .add {
      h2 {
        font-weight: 400;
        font-size: 22px;
        margin-bottom: 10px;
      }
      .create-desc {
        font-size: 12px;
        color: #999;
        margin-bottom: 10px;
      }
      .myForm {
        width: 750px;
        .editor {
          width: 100%;
          height: 375px;
        }
        .bcDraftBox {
          color: #ffa500;
          &:hover {
            cursor: pointer;
            text-decoration: underline;
          }
        }
      }
    }
    .draft-box {
      border: 1px solid #ddd;
      padding: 10px;
      width: 150px;
      .draft-title {
        margin-bottom: 10px;
        font-weight: 400;
        color: #666;
        .draft-item {
          margin-bottom: 10px;
          font-size: 14px;
          .draft-post-title {
            &:hover {
              cursor: pointer;
              color: #ffb800;
            }
          }
        }
      }
    }
  }
}
</style>
