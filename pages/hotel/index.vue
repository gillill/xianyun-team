<template>
  <div class="container">
    <Search/>
    <Map/>
    <HotelFilters/>
  </div>
</template>

<script>
import Search from "@/components/hotel/search"
import Map from "@/components/hotel/map"
import HotelFilters from "@/components/hotel/hotelFilters"
export default {
  components: {
    Search,
    Map,
    HotelFilters
  },
  data() {
    return {
     
    }
  },
  methods: {
  
    },
    mounted() {
      this.$axios({
        url:`/hotels`
      }).then(res=>{
        console.log(res);
        
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
