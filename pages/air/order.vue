<template>
  <div class="container">
    <el-row type="flex" justify="space-between">
      <!-- 订单表单 -->
      <OrderForm/>

      <!-- 侧边栏 -->
      <OrderAside :data="$store.state.air.infoData"/>
    </el-row>
  </div>
</template>

 <script>
import OrderForm from "@/components/air/orderForm.vue";
import OrderAside from '@/components/air/orderAside.vue'
export default {
  data() {
    return {
      // infoData: {
      //   insurances: [],
      //   seat_infos:{}
      // }
    }
  },
  // mounted() {
  //     const {query} = this.$route
  //     this.$axios({
  //         url:`airs/${query.id}`,
  //         params: {
  //             seat_xid:query.seat_xid
  //         }
  //     }).then(res=>{
  //         this.infoData = res.data
  //     })
  // },
  components: {
    OrderForm,
    OrderAside
  },
  methods: {
    
  }
}
</script>

 <style lang="less" scoped>
.container {
  width: 1000px;
  margin: 20px auto;
}

/*aside*/
.aside {
  width: 350px;
  height: fit-content;
  border: 1px #ddd solid;
}
</style> 