<template>
  <div class="right-box">
    <div class="search">
      <el-input placeholder="请输入内容" v-model="input" v-on:keyup.native="handleCity(input)">
        <el-button slot="append" icon="el-icon-search" @click="handleCity(input)"></el-button>
      </el-input>
      <div class="tuijian">
        推荐:
        <a href="javaScript:;" v-for="(item,index) in cityData" :key="index" @click.prevent="handleCity(item)">{{item}} </a>
      </div>
    </div>

    <div class="tuijian-gonglue">
      <h2>推荐攻略</h2>
      <el-button @click="handleYouJi" class="tj-btn" type="primary" icon="el-icon-edit">写游记</el-button>
    </div>

    <div class="tj-method" v-for="(item,index) in dataList" :key="index">
      <el-row class="tjone-bot" type="flex" v-if="item.images.length<3">
        <el-col :span="8" class="tj-one">
          <a href="" @click.prevent="handleClick(item.id)" v-for="(items,index) in item.images" v-if="index<1" :key="index"><img :src="items" alt=""></a>
        </el-col>
        <el-col :span="16">
          <h3 class="a-hover"><a href="" @click.prevent="handleClick(item.id)">{{item.title}}</a></h3>
          <p><a href="" @click.prevent="handleClick(item.id)">{{item.summary}}</a></p>
          <!-- 文章下面烦得一逼的小图标 -->
          <el-row type="flex" justify="space-between" class="tjone-bottom">
            <el-row type="flex" align="center">
              <span class="tj-zuobiao">
                <i class="el-icon-location-outline"></i>
                {{item.cityName}}
              </span>
              <el-row type="flex" align="center" class="tj-by">
                by
                <a href=""><img :src="$axios.defaults.baseURL+item.account.defaultAvatar" alt="" class="user-img"></a>
                <a href="">{{item.account.nickname}}</a>
              </el-row>
              <span class="tj-eyes">
                <i class="el-icon-view">
                  {{item.watch}}
                </i>
              </span>
            </el-row>
            <span class="tj-zan">30 赞</span>
          </el-row>
        </el-col>
      </el-row>
      <el-row v-else>
        <h3 class="a-hover"><a href="" @click.prevent="handleClick(item.id)">{{item.title}}</a></h3>
        <p><a href="" @click.prevent="handleClick(item.id)">{{item.summary}}</a></p>
        <el-row type='flex' justify="space-between" align="center" class="method-imgbox">
          <a href="" @click.prevent="handleClick(item.id)" v-for="(items,index) in item.images" v-if="index<3" :key="index"><img :src="items" alt=""></a>
        </el-row>
        <!-- 文章下面烦得一逼的小图标 -->
        <el-row type="flex" justify="space-between" class="tj-bottom">
          <el-row type="flex" align="center">
            <span class="tj-zuobiao">
              <i class="el-icon-location-outline"></i>
              {{item.cityName}}
            </span>
            <el-row type="flex" align="center" class="tj-by">
              by
              <a href=""><img :src="$axios.defaults.baseURL+item.account.defaultAvatar" alt="" class="user-img"></a>
              <a href="">{{item.account.nickname}}</a>
            </el-row>
            <span class="tj-eyes">
              <i class="el-icon-view">
                {{item.watch}}
              </i>
            </span>
          </el-row>
          <span class="tj-zan">30 赞</span>
        </el-row>
      </el-row>

    </div>
    <!-- fenye -->
    <div class="block">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pageIndex" :page-sizes="[3, 5, 8, 10]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      //   dataList: [],
      pageIndex: 1,
      pageSize: 3,
      total: 0,
      cityData: [
        "广州", "上海", "北京"
      ]

    }
  },

  methods: {
    handleSizeChange(value) {
      this.pageSize = value
      // this.setDataList()
    },
    handleCurrentChange(value) {
      this.pageIndex = value
      // this.setDataList()
    },
    handleClick(id) {
      this.$router.push({
        path: '/post/detail',
        query: {
          id
        }
      })
    },
    handleCity(item) {
      if (!item) {
        this.$axios({
          url: '/posts'
        }).then(res => {
          this.data = res.data.data
          this.$store.commit('post/setCicy', res.data)
        })
      } else {
        this.$axios({
          url: '/posts?city=' + item
        }).then(res => {
          this.data = res.data.data
          this.$store.commit('post/setCicy', res.data)
        })
      }

    },
    handleYouJi() {
      this.$router.push('/post/create')
    }
  },
  mounted() {
    //   console.log(this.$axios);
    this.$axios({
      url: '/posts',
      method: 'get',
    }).then(res => {
      const { data } = res.data
      this.total = res.data.total
      this.data = data
      this.$store.commit('post/setCicy', res.data)
    })
  },
  computed: {
    dataList() {
      let data = this.$store.state.post.cityData.data.slice(
        (this.pageIndex - 1) * this.pageSize,
        this.pageSize * this.pageIndex
      );
      return data;
    }
  },
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
    height: 66px;
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
  .tj-one a img {
    width: 220px;
    height: 150px;
    display: block;
    -o-object-fit: cover;
    object-fit: cover;
  }
}
.tjone-bot {
  margin-bottom: 15px;
  border-bottom: 1px solid rgb(201, 199, 199);
}
.tjone-bottom {
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
.block {
  margin-bottom: 20px;
}
.tuijian > a:hover,
.a-hover:hover {
  color: rgb(46, 94, 149);
}
</style>
