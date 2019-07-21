<template>
  <div class="container">
    <footer>
    <ul>
      <li><span class="iconfont icon-bianji"></span> <p>评论(1)</p></li>
      <li><span class="iconfont icon-shoucang"></span> <p>收藏</p></li>
      <li><span class="iconfont icon-icon-test"></span> <p>分享</p></li>
      <li><span class="iconfont icon-dianzan"></span> <p>点赞(1)</p></li>
    </ul>
    <p class="commentTitle">评论</p>
    <!-- 输入框 -->
    <div class="userInput">

    
   <el-input
  type="textarea"
  size:medium
  placeholder="说点什么吧"
  class="commentText"
  v-model="commentText">
  
</el-input>
<!-- 上传图片 -->
<el-upload
  action="http:127.0.0.1:1337/upload"
  size:small
  list-type="picture-card"
  class="upload"
  :on-preview="handlePictureCardPreview"
  :on-remove="handleRemove">
  <i class="el-icon-plus"></i>
</el-upload>

<!-- 提交按钮 -->
<el-button type="primary" class="submit">提交</el-button>
</div>
<!--p]评论列表 -->
<div class="commentList">
 <li>
   <p><img src="" alt="" class="userAvatar"> 地球发动机  2019-07-21 3:25</p>
   <p></p>
   <img src="http://157.122.54.189:9095/uploads/ab2fdb517f9e4a5e81fc1cefaaaf5e4d.jpg"  alt="" class="userImage">
 </li>
</div>

<!-- 底部分页 -->
 <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="1"
      :page-sizes="[1, 2, 3, 4]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>

</footer>
  </div>
</template>

<script>
export default {
  data(){
    return{
      commentText:"",
      dialogVisible:"",
      dialogImageUrl:"",
    
    }
  },
  methods: {
     handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
       handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
  },
  mounted () {
     this.$axios({
      url:"/posts/comments",
      params:{
        post:4,
        _sort:"systemSort",
        _limit:2,
        _start:1,
      }
    }).then(res=>{
      console.log(res);
     
    })
  }


}
</script>

<style lang="less" scoped>
.container{
  // width: 700px;
  margin: 0 auto;
  footer{
    width:700px;
    .userInput{
     position: relative;
    }
    .commentList{
      margin:30px 0;
      li{
        border: 1px solid #ccc;
        padding:20px;
        p{
          .userAvatar{
            width: 20px;
            height: 20px;
            border-radius: 50%
          }
          
        }
        .userImage{
            width: 80px;
            height: 80px;
            padding:10px;
            border:1px dashed #ccc;
            
          }
      }
    }
  }
}
.commentTitle{
  font-size: 23px;
}
.commentText{
  margin:20px 0;
}

.submit{
  position: absolute;
  right: 10px;
  bottom:100px;
}
.iconfont{
  color:orange;
  font-size: 40px;
}
ul{
  overflow: hidden;
  margin: 0 auto;
  width: 400px;
  li{
    float: left;
    margin:35px 25px;
    span{
      display: block;
    }
    p{
      color: #666;
      font-size: 14px;
    }
  }
}

</style>


