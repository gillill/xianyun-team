<template>
     <div class="map">
        <div id="container" style="width:410px; height:270px;"></div>
      </div>
</template>


<script>
export default {
  data(){
    return{

    }
  },
  mounted () {
       // 页面加加载之后执行
    window.onLoad  = function(){
        // 生成地图.container是显示地图的div的id
        console.log();
        
        var map = new AMap.Map('container', {
            zoom:11,//放大级别
            center: [  118.8718107,31.32846821],//中心点坐标，经纬度
            viewMode:'3D',//使用3D视图
        });

        // 创建一个 Marker 实例：
       
        var marker = new AMap.Marker({
            //content: "<div style='width:20px; height:20px; background:red;'>1</div>",
            position: new AMap.LngLat(118.8718107, 31.32846821),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
            title: '高淳'
        });
        var marker2 = new AMap.Marker({
            //content: "<div style='width:20px; height:20px; background:red;'>1</div>",
            position: new AMap.LngLat(118.732506, 32.126942),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
            title: '江山'
        });

        map.add([marker,marker2]);
    }

    // 地图的链接
    var key = "65a518024f68f5e718605eb0394aca27"
    var url =  `https://webapi.amap.com/maps?v=1.4.15&key=${ key}&callback=onLoad`;
    var jsapi = document.createElement('script');
    jsapi.charset = 'utf-8';
    jsapi.src = url;
    document.head.appendChild(jsapi);
  }
}
</script>

<style lang="less" scoped>

</style>

