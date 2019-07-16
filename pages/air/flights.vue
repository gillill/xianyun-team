<template>
  <section class="contianer">
    <el-row type="flex" justify="space-between">

      <!-- 顶部过滤列表 -->
      <div class="flights-content">
        <!-- 过滤条件 -->
        <div>

        </div>

        <!-- 航班头部布局 -->
        <FlightsListHead/>

        <!-- 航班信息 -->
        <div>
            <FlightsItem
            v-for="(item,index) in flightsData.flights"
            :key="index"
            :data='item'
            />
        </div>
      </div>

      <!-- 侧边栏 -->
      <div class="aside">
        <!-- 侧边栏组件 -->
      </div>
    </el-row>
  </section>
</template>

<script>

import moment from "moment";
import FlightsListHead from '@/components/air/flightsListHead.vue'
import FlightsItem from '@/components/air/FlightsItem.vue'

export default {
  data() {
    return {
        flightsData:{}
    }
  },
  components: {
      FlightsListHead,
      FlightsItem
  },
  mounted() {
      this.$axios({
          url:'/airs',
          method: 'get',
          params: this.$route.query
      }).then(res=>{
        //   const {flights} = res.data
        this.flightsData = res.data
      })
  }
}
</script>

<style scoped lang="less">
.contianer {
  width: 1000px;
  margin: 20px auto;
}

.flights-content {
  width: 745px;
  font-size: 14px;
}

.aside {
  width: 240px;
}
</style>