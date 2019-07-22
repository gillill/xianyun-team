<template>
  <div class="container">
    <footer>
    <ul>
      <li><span class="iconfont icon-bianji"></span> <p>评论(1)</p></li>
      <li @click="handleShoucang"><span class="iconfont icon-shoucang"></span> <p>收藏</p></li>
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
 <li v-for="(item,index) in commentList" :key="index">
   <p><img :src=item.account.defaultAvatar alt="" class="userAvatar"> 
   {{item.account.nickname}}  
   {{item.updated_at | timeFormat}}
   </p>
   <p>{{item.content}}</p>
   <img :src=item2  alt="" class="userImage" v-for="(item2,index2) in item.pics" :key="index2">
 </li>
</div>

<!-- 底部分页 -->
 <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage-0"
      :page-sizes="[1, 2, 3, 4]"
      :page-size="pageSize-0"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total-0">
    </el-pagination>

</footer>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  
  data(){
    return{
      commentText:"",
      dialogVisible:"",
      dialogImageUrl:"",
       id:4,
       total:"",
       currentPage:"",
       pageSize:"",
       commentList:[]
    }
  },
  filters: {
    timeFormat:function(value){
      return value=moment().format('YYYY-MM-DD, hh:mm')
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
        // console.log(`每页 ${val} 条`);
        this.pageSize=val
      },
      handleCurrentChange(val) {
        // console.log(`当前页: ${val}`);
        this.currentPage=val
      },
      handleShoucang(){
        this.$axios({
          url:"/posts/star",
          params:{
            id:4
          },
          headers: {
          Authorization: `Bearer ${this.$store.state.user.userInfo.token}`
        }
        }).then(res=>{
          if(res.data.status===0){
        this.$message.success(res.data.message)
      }
        })
      }
  },
  mounted () {
     this.$axios({
      url:"/posts/comments",
      params:{
        post:4,
        // _sort:"systemSort",
        _limit:6,
        _start:0,
      }
    }).then(res=>{
      // console.log(res,245);
      this.commentList=res.data.data
      console.log(this.commentList,99);
      this.total=res.data.data.length
      
     
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
    ul{
       li{
         cursor:pointer
       }
     }
    .userInput{
     position: relative;
     
    }
    .commentList{
      margin:30px 0;
      li{
        border: 1px solid #ccc;
        padding:20px;
        // cursor: pointer;
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


