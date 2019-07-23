<template>
  <div class="container">
    <Search/>
    <Map/>
    <HotelFilters/>
    <HotelsList v-for='(item,i) in hotelsData.data'  :key="i" :data="item"/>
  </div>
</template>

<script>
import Search from "@/components/hotel/search"
import Map from "@/components/hotel/map"
import HotelFilters from "@/components/hotel/hotelFilters"
import HotelsList from "@/components/hotel/hotelsList"
export default {
  components: {
    Search,
    Map,
    HotelFilters,
    HotelsList
  },
  data() {
    return {
      hotelsData:{}
    }
  },
  methods: {
  
    },
    mounted() {
      this.$axios({
        url:`/hotels`,
        method:"GET"
      }).then(res=>{
        // console.log(res);
        const {data} = res
        this.hotelsData = data
        console.log(this.hotelsData);
        
      })
    }
}
</script>

<style lang="less" scoped>
  .container {
  width: 1000px;
  margin: 5px auto;
  font-size: 14px;
  color: rgb(121, 121, 121);
}
</style>
