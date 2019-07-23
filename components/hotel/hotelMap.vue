<template>
  <div class="hotelmap">
    <el-row>
      <el-col :span="16">
        <div id="map"></div>
      </el-col>
      <el-col :span="8">
        <div class="info">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="风景" name="first">
              <ul>
                <li v-for="(item,index) in scenicList" :key="index">
                  <span>{{item.name}}</span>
                  <span>{{item.distance}}</span>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="交通" name="second">
              <ul>
                <li v-for="(item,index) in trafficList" :key="index">
                  <span>{{item.name}}</span>
                  <span>{{item.distance}}</span>
                </li>
              </ul>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      titleList: ["景点", "交通"],
      activeName: "first",
      scenicList: [
        { name: "人民广场", distance: "0公里" },
        { name: "人民广场", distance: "0公里" },
        { name: "人民广场", distance: "0公里" },
        { name: "人民广场", distance: "0公里" },
        { name: "人民广场", distance: "0公里" },
        { name: "人民广场", distance: "0公里" },
        { name: "人民广场", distance: "0公里" },
        { name: "人民广场", distance: "0公里" },
        { name: "人民广场", distance: "0公里" },
        { name: "人民广场", distance: "0公里" }
      ],
      trafficList: [
        { name: "(公交站)", distance: "0公里" },
        { name: "(公交站)", distance: "0公里" },
        { name: "(公交站)", distance: "0公里" },
        { name: "(公交站)", distance: "0公里" }
      ]
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  mounted() {
    window.onLoad = function() {
      var map = new AMap.Map("map", {
        zoom: 13, //放大级别
        center: [113.395493, 23.124029], //中心点坐标，经纬度
        viewMode: "3D" //使用3D视图
      });
      // 创建一个 Marker 实例：
      var marker1 = new AMap.Marker({
        position: new AMap.LngLat(113.395493, 23.124029), 
        title: "车陂",
        icon:
          "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-1.png"
      });
      var marker2 = new AMap.Marker({
        position: new AMap.LngLat(113.40477, 23.122978), 
        title: "东圃",
        icon:
          "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-2.png"
      });
      var marker3 = new AMap.Marker({
        position: new AMap.LngLat(113.380577, 23.12661), 
        title: "棠下",
        icon:
          "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-3.png"
      });
      var markerList = [marker1, marker2, marker3];
      // 将创建的点标记添加到已有的地图实例：
      map.add(markerList);
    };
    var url =
      "https://webapi.amap.com/maps?v=1.4.15&key=f36d75e91d581307315c4b0b4fb7cdb3&callback=onLoad";
    var jsapi = document.createElement("script");
    jsapi.charset = "utf-8";
    jsapi.src = url;
    document.head.appendChild(jsapi);
  }
};
</script>
<style lang="less" scoped>
.hotelmap {
  padding: 30px 0;
  #map {
    width: 640px;
    height: 360px;
  }
  .info {
    width: 335px;
    height: 360px;
    ul {
      overflow-y: auto;
      overflow-x: hidden;
      max-height: 300px;
      li {
        padding: 10px 0;
        display: flex;
        justify-content: space-between;
        color: #909399;
        span:last-child {
            padding-right: 20px;
        }
      }
    }
  }
}
</style>
