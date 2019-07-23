<template>
    <div class="hoList">
        <div class="hoLeft">
          <!-- <img :src="`${data.data.photos}`" alt=""> -->
        </div>
        <div class="hoMiddle"></div>
        <div class="hoRight"></div>
    </div>
</template>


<script>
export default {
  
  data(){
    return{
      // hotelData:[],
    }
  },
   props: {
    // 传入的对象
    data: {
      type: Object,
      default: {},
      data:{
        type: Array,
        default: []
      }
    }
  },
  mounted () {
    console.log(this.data.data);
    
  }
}
</script>

<style lang="less" scoped>

</style>

