<template>
  <section class="contianer">
    <el-row type="flex" justify="space-between">

      <!-- 顶部过滤列表 -->
      <div class="flights-content">
        <!-- 过滤条件 -->
        <div>

        </div>

        <!-- 航班头部布局 -->
        <FlightsListHead />

        <!-- 航班信息 -->
        <div>
          <FlightsItem v-for="(item,index) in dataList" :key="index" :data='item' />
          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pageIndex" :page-sizes="[5, 10, 15, 20]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total">
          </el-pagination>
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
      flightsData: {},
      dataList: [],
      pageIndex: 1,
      pageSize: 10,
      total: 0
    }
  },
  components: {
    FlightsListHead,
    FlightsItem
  },
  mounted() {
    this.$axios({
      url: '/airs',
      method: 'get',
      params: this.$route.query
    }).then(res => {
      //   const {flights} = res.data
      this.flightsData = res.data
      this.total = this.flightsData.flights.length
      this.dataList = this.flightsData.flights.slice(0, this.pageSize)
    })
  },
  methods: {
    // 条数切换, value是当前选中的条数
    handleSizeChange(value) {
      this.pageSize = value;
      // 根据页数切割当前数据
      this.setDataList();
    },
    // 页数的切换，value是选中的页数
    handleCurrentChange(value) {
      this.pageIndex = value;
      // 根据页数切割当前数据
      this.setDataList();
    },
    setDataList() {
      // 根据页数切割当前数据
      this.dataList = this.flightsData.flights.slice(
        (this.pageIndex - 1) * this.pageSize,
        this.pageSize * this.pageIndex
      );
    }
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