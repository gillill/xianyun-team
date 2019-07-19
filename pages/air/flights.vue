<template>
  <section class="contianer">
    <el-row type="flex" justify="space-between">

      <!-- 顶部过滤列表 -->
      <div class="flights-content">
        <!-- 过滤条件 -->
        <FlightsFilters :data='cacheFlightsData' @changeDataList='changeDataList' />

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
      <FlightsAside />
    </el-row>
  </section>
</template>

<script>

import moment from "moment";
import FlightsListHead from '@/components/air/flightsListHead.vue'
import FlightsItem from '@/components/air/FlightsItem.vue'
import FlightsFilters from '@/components/air/FlightsFilters.vue'
import FlightsAside from '@/components/air/flightsAside.vue'

export default {
  data() {
    return {
      flightsData: {
        flights: [],
        info: {},
        options: {}
      },
      cacheFlightsData: {
        flights: [],
        info: {},
        options: {}
      },
      pageIndex: 1,
      pageSize: 10,
      total: 0
    }
  },
  components: {
    FlightsListHead,
    FlightsItem,
    FlightsFilters,
    FlightsAside
  },
  computed: {
    dataList() {
      return this.flightsData.flights.slice(
        (this.pageIndex - 1) * this.pageSize,
        this.pageSize * this.pageIndex
      )
    }
  },
  //   watch: {
  //       $router() {

  //       }
  //   },
  beforeRouterUpdate(to, from, next) {
    next()
    this.getDate()
  },
  mounted() {
      this.getDate()
  },
  methods: {
    getDate() {
      this.$axios({
        url: '/airs',
        method: 'get',
        params: this.$route.query
      }).then(res => {
        //   const {flights} = res.data
        this.flightsData = res.data
        this.cacheFlightsData = { ...res.data }
        this.total = this.flightsData.flights.length
      })
    },
    // 条数切换, value是当前选中的条数
    handleSizeChange(value) {
      this.pageSize = value;
    },
    // 页数的切换，value是选中的页数
    handleCurrentChange(value) {
      this.pageIndex = value;
    },
    changeDataList(arr) {
      this.flightsData.flights = arr
      this.total = this.flightsData.flights.length
      this.pageIndex = 1
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
.el-pagination {
  padding: 2px 20%;
}
</style>