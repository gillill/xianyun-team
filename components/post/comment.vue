<template>
  <div class="container">
    <footer>
      <ul>
        <li><span class="iconfont icon-bianji"></span>
          <p>评论()</p>
        </li>
        <li @click="handleShoucang"><span class="iconfont icon-shoucang"></span>
          <p>收藏</p>
        </li>
        <li><span class="iconfont icon-icon-test"></span>
          <p>分享</p>
        </li>
        <li @click="handleLike"><span class="iconfont icon-dianzan"></span>
          <p>点赞({{$store.state.post.postDatas.like}})</p>
        </li>
      </ul>
      <p class="commentTitle">评论</p>
      <!-- 输入框 -->
      <div class="userInput">

        <el-input
          type="textarea"
          size:medium
          placeholder="说点什么吧"
          class="commentText"
          v-model="commentText"
        >

        </el-input>
        <!-- 上传图片 -->
       <el-upload
  action="/upload"
  list-type="picture-card"
  :headers="getToken()"
  :on-success="handleSuccess"
  :file-list="fileList"
  :on-preview="handlePictureCardPreview"
  :on-remove="handleRemove">
  <i class="el-icon-plus"></i>
</el-upload>
<el-dialog :visible.sync="dialogVisible" size="tiny">
  <img width="100%" :src="dialogImageUrl" alt="">
</el-dialog>

        <!-- 提交按钮 -->
        <el-button
          type="primary"
          class="submit"
          @click="handleSubmit"
        >提交</el-button>
      </div>
      <!--p]评论列表 -->
      <div class="commentList">
        <li
          v-for="(item,index) in dataList"
          :key="index"

        >
          <p><img
              src="http://157.122.54.189:9095/assets/images/avatar.jpg"
              alt=""
              class="userAvatar"
            >
            {{item.account.nickname}}
            {{item.updated_at | formatDate}}
          </p>
          <p>{{item.content}}</p>
          <img
            src="http://157.122.54.189:9095/uploads/92d94f3bff6c40459bffa3e580368449.jpg"
            alt=""
            class="userImage"
          >
        </li>
      </div>

      <!-- 底部分页 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageIndex-0"
        :page-sizes="[1, 2, 3, 4]"
        :page-size="pageSize-0"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total-0"
      >
      </el-pagination>

    </footer>
  </div>
</template>

<script>
import moment from 'moment'
import { formatDate } from "assets/data.js"
export default {

  data() {
    return {
      fileList:[],
      commentText: "",
       dialogImageUrl: '',
      dialogVisible: false,
      id: this.$route.query.id,
      total: "",
      pageIndex: 1,
      pageSize: 1,
      commentList: []
    }
  },
  filters: {
    formatDate(time) {
      var date = new Date(time);
      return formatDate(date, 'yyyy-MM-dd hh:mm');
    }

  },
  methods: {
    // getData(){
    //   return{'files':"picture-card"}
    // },
    handleSubmit(){
      console.log(456);
      this.$store.commit("post/setCommentListContent",this.commentText)
      // this.commentList.push(this.commentText)
    },
    getToken(){
      var token =this.$store.state.user.userInfo.token
      return {'Authorization':token}
    },

  //  上传成功的钩子函数
  handleSuccess(response, file, fileList){
  
  },
  handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },


    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
      this.pageSize = val
      // this.init()
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      this.pageIndex = val
      // this.init()
    },
    handleShoucang() {
      this.$axios({
        url: "/posts/star",
        params: {
          id: this.id
        },
        headers: {
          Authorization: `Bearer ${this.$store.state.user.userInfo.token}`
        }
      }).then(res => {
        if (res.data.status === 0) {
          this.$message.success(res.data.message)
        }
      })
    },
    // 点赞
    handleLike() {
      // 给文章的进行点赞
      this.$axios({
        url: "/posts/like",
        params: {
          id: this.id
        },
        headers: {
          Authorization: `Bearer ${this.$store.state.user.userInfo.token}`
        }
      }).then(res => {
        if (res.data.status === 0) {
          this.$message.success(res.data.message)
          // console.log(4567878);

          let likenum = this.$store.state.post.postDatas.like + 1
          this.$store.commit("post/setPostDataLike", likenum)
          // console.log(likenum, 999);

        }
      })
    },
 
    init(){
       // 获取文章评论数据
    this.$axios({
      url: "/posts/comments",
      params: {
        post: this.id,
        _limit: this.total,
        // 每页显示2，显示第二页3-4
        // 每页显示的条数1,2;3-4；每页显示的条数3:0-3
        _start:0,
      }
    }).then(res => {
      console.log(res,245);
      this.commentList = res.data.data
      console.log(this.commentList, 99);
      this.$store.commit("post/setCommentList",res.data.data)
      this.total = res.data.data.length
    })
    }
  },
   computed: {
    dataList() {
      return this.commentList.slice(
        (this.pageIndex - 1) * this.pageSize,
        this.pageSize * this.pageIndex
      )
    }
    
  },
  mounted() {
    this.init()
    // 获取文章评论数据
    // this.$axios({
    //   url: "/posts/comments",
    //   params: {
    //     post: this.id,
    //     _limit: this.pageSize,
    //     // 每页显示的条数1,2;3-4；每页显示的条数3:0-3
    //     _start: 0,
    //   }
    // }).then(res => {
    //   // console.log(res,245);
    //   this.commentList = res.data.data
    //   console.log(this.commentList, 99);
    //   this.total = res.data.data.length
    // })

  }
}
</script>

<style lang="less" scoped>
.container {
  // width: 700px;
  margin: 0 auto;
  footer {
    width: 700px;
    ul {
      li {
        cursor: pointer;
      }
    }
    .userInput {
      position: relative;
    }
    .commentList {
      margin: 30px 0;
      li {
        border: 1px solid #ccc;
        padding: 20px;
        // cursor: pointer;
        p {
          .userAvatar {
            width: 20px;
            height: 20px;
            border-radius: 50%;
          }
        }
        .userImage {
          width: 80px;
          height: 80px;
          padding: 10px;
          border: 1px dashed #ccc;
        }
      }
    }
  }
}
.commentTitle {
  font-size: 23px;
}
.commentText {
  margin: 20px 0;
}

.submit {
  position: absolute;
  right: 10px;
  bottom: 100px;
}
.iconfont {
  color: orange;
  font-size: 40px;
}
ul {
  overflow: hidden;
  margin: 0 auto;
  width: 400px;
  li {
    float: left;
    margin: 35px 25px;
    span {
      display: block;
    }
    p {
      color: #666;
      font-size: 14px;
    }
  }
}
</style>


