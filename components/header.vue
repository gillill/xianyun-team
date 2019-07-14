<template>
  <div class='container'>
    <el-row type='flex' justify="space-between" class="main">
      <!-- logo -->
      <div class="logo">
        <nuxt-link to="/">
          <img src="http://157.122.54.189:9093/images/logo.jpg" alt="">
        </nuxt-link>
      </div>
      <!-- 首页导航 -->
      <div>
        <el-row type="flex" class="navs">
          <nuxt-link to="/">首页</nuxt-link>
          <nuxt-link to="/post">旅游攻略</nuxt-link>
          <nuxt-link to="/hotel">酒店</nuxt-link>
          <nuxt-link to="/air">国内机票</nuxt-link>
        </el-row>
      </div>
      <!-- 登陆下拉菜单 -->
      <div class="login-users">
        <div v-if="!$store.state.user.userInfo.token">
          <nuxt-link to="/user/login">登陆/注册</nuxt-link>
        </div>
        <div v-else>
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              <img :src="$axios.defaults.baseURL + $store.state.user.userInfo.user.defaultAvatar" alt="">
              {{$store.state.user.userInfo.user.nickname}} <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-circle-plus">个人中心</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-plus-outline" @click.native="handleLogout()">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  methods: {
    handleLogout() {
      const { commit } = this.$store
      commit('user/cleanUserInfo')
      this.$message({
        message: '退出成功',
        type: 'success'
      })
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  box-shadow: 0 2px 1px #ddd;
}
.main {
  width: 1000px;
  margin: 0 auto;
  height: 60px;
  line-height: 60px;
}

.logo {
  margin-right: 20px;
  img {
    width: 156px;
    height: 42px;
    margin-top: 9px;
  }
}

.navs {
  flex: 1;

  a {
    display: block;
    padding: 0 20px;
    height: 60px;
    box-sizing: border-box;

    &:hover {
      color: #6bbfd8;
      border-bottom: 2px #6bbfd8 solid;
    }
  }

  .nuxt-link-exact-active {
    background: #fff;
    color: #6bbfd8;
    border-bottom: 2px #6bbfd8 solid;

    &:hover {
      color: #6bbfd8;
    }
  }
}

.el-dropdown-link {
  img {
    width: 36px;
    height: 36px;
    vertical-align: middle;
    border-radius: 50%;
  }
}
.login-users {
  cursor: pointer;
}
</style>

