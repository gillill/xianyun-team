<template>
    <div class="box ">
      <div class="detail clearfloat">
        <div class="quyu clearfloat">
          <div class="area">区域：</div>
          <div class="cities" ref="cities">
          <span  
            v-for="(item,index) in cityList"
            class="aTxt"
            :key="index">
            <el-link href="#" >{{item}}</el-link>
            </span>
          </div>
          <div class="open" style="padding:0 50px;"><i ref="icon" class="el-icon-caret-bottom"></i>
          <span class="zhankai"  @click="openCities">等43个地区</span>
          </div>
        </div>
        <div class="gonglue">
          <div class="strategy">攻略：</div>
          <div class="glDetail">北京，你想要的都能在这找到。博古通今，兼容并蓄，天下一城，如是帝都。 景点以故宫为中心向四处辐射；地铁便宜通畅，而且覆盖绝大多数景点。 由于早上有天安门升旗仪式，所以大多数人选择在天安门附近住宿。</div>
        </div>
        <div class="junjia">
          <div class="jjLeft">均价
             <el-tooltip class="item" effect="dark" content="等级均价由平日价格计算得出，节假日价格会有上浮。" placement="top-start">
                <i class="el-icon-question"></i>
            </el-tooltip>:
          </div>
          <div class="jjRight">
            <el-tooltip class="item" effect="dark" content="等级评定是针对房价，设施和服务等各方面水平的综合评估。" placement="top-start">
            <span><i
            class="el-icon-trophy"
            ></i><i
            class="el-icon-trophy"
            ></i><i
            class="el-icon-trophy"
            ></i>　￥332</span>
            </el-tooltip>
             <el-tooltip class="item" effect="dark" content="等级评定是针对房价，设施和服务等各方面水平的综合评估。" placement="top-start">
            <span><i
            class="el-icon-trophy"
            ></i><i
            class="el-icon-trophy"
            ></i><i
            class="el-icon-trophy"
            ></i><i
            class="el-icon-trophy"
            ></i>　￥521</span>
             </el-tooltip>
               <el-tooltip class="item" effect="dark" content="等级评定是针对房价，设施和服务等各方面水平的综合评估。" placement="top-start">
            <span><i
            class="el-icon-trophy"
            ></i><i
            class="el-icon-trophy"
            ></i><i
            class="el-icon-trophy"
            ></i><i
            class="el-icon-trophy"
            ></i><i
            class="el-icon-trophy"
            ></i>　￥768</span>
            </el-tooltip>
          </div>
        </div>
      </div>
     <OtherMap/>  
    </div>
    
</template>

<script>
import OtherMap from "@/components/hotel/otherMap"
export default {
  components: {
    OtherMap
  },
  data(){
    return {
      localData:[],
      showCities:false,
      cityList:[
        "全部","镇兴路沿线","视觉艺术学院","大成名店","南京西站","铜山镇","大桥南路","宝塔路沿线","宝塔路/万辰苏果","珠江路沿线","华侨城","江浦","东屏镇","南京南站/明发","北岭路沿线","苜宿园","弘阳广场/新一城","新街口地区","紫金山/孝陵卫","火车站/玄武湖","东坝镇","禄口机场","奥体中心","雨润大街","新模范马路","将军山","国际慢城","云鼎时尚街区","百家湖","湖南路","竹山路沿线","南大/南师大","江宁滨江开发区","湖熟镇","南大和园","君临紫金商业街","大西门","建邺万达","江宁科学园","顾家欧亚达","高淳老街","谷里","汤山镇","雄州"
      ]
    }
  },
  methods: {
    openCities(){
      // this.$refs['cities']
      if(this.showCities===false){
        this.$refs['cities'].style.height = "168px"
        this.$refs['icon'].className = "el-icon-caret-top"
        this.showCities=true
      }else{
        this.$refs['cities'].style.height = "45px"
        this.$refs['icon'].className = "el-icon-caret-bottom"
        this.showCities=false
      }
      
    }
  },
  mounted(){

  }
}
</script>

<style lang="less" scoped>
  .clearfloat:after{display:block;clear:both;content:"";visibility:hidden;height:0}
  .clearfloat{zoom:1}
.box{
  margin-top: 20px;
    position: relative;
  height: 300px;
  .detail{
    width: 550px;
    float: left;

    .quyu{
      position: relative;
      .area{
        width: 50px;
        float: left;
      }
      .cities{
        height: 45px; //168px
        width: 500px;
        float: left;
        overflow: hidden;
        .aTxt{
          padding-right: 15px;
        }
      }
      .open{
        float: left;
        .zhankai{
          cursor: pointer;
        }
      }
    }
        .gonglue{
          // margin-top: 50px;
          .strategy{
          width: 50px;
          float: left;
          }
          .glDetail{
            width: 500px;
            float: left;
          }
        }
    
    .junjia{
      .jjLeft{
        float: left;
        width: 50px;
      }
      .jjRight{
         width: 500px;
            float: left;
            .el-icon-trophy{
              color: rgb(255, 123, 0)
            }
            >span{
              padding-right: 50px;
            }
      }
    }
  }

}
</style>

