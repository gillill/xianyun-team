<template>
  <div class="">
      <!-- 面包屑导航 -->
    <div class="mianbaoxie">
    <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">酒店</el-breadcrumb-item>
    <el-breadcrumb-item>某某市酒店预订</el-breadcrumb-item>
    </el-breadcrumb>
    </div>
    <!-- 搜索栏 -->
      <div class="searchBox">
        <div class="Search">
        <div class="citySearch"><el-input v-model="cityName" placeholder="请输入城市" ></el-input></div>
        <div class="block">
          <el-date-picker
            v-model="value1"
            type="daterange"
            range-separator="-"
            start-placeholder="入住日期"
            end-placeholder="离店日期">
          </el-date-picker>
        </div>
        <div>  
          <el-input
          placeholder="人数未定"
          suffix-icon="el-icon-user-solid" 
          @focus="show=true"
          v-model="personNum">
          </el-input>
        </div>
        <el-button type="primary" @click="lookPrice">查看价格</el-button>
        </div>
        <div v-show="show" class="personShow">
            <div class="psTop">
              <div class="psTxt">每间</div>
              <div class="child">
              <el-select v-model="childValue" placeholder="">
                <el-option
                  v-for="item in child"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              </div>
              <div class="adult">
              <el-select v-model="adultValue" placeholder="">
                <el-option
                  v-for="item in adult"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              </div>
            </div>
            <hr>
            <el-button type="warning"
            @click="show=false"
             class="cancel">取消</el-button>
            <el-button type="primary"
            @click="certain"
             class="certain">确定</el-button>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      // show:false,
      show:false,
      cityName: '',
      personNum:"",
      restaurants: [],
        state1: '',
        state2: '',
        value1:"",
        childValue:"",
        adultValue:"",
         adult: [
           {
          value: '1',
          label: '1'
        }, {
          value: '2',
          label: '2'
        }, {
          value: '3',
          label: '3'
        }, {
          value: '4',
          label: '4'
        }, {
          value: '5',
          label: '5'
        },{
          value: '6',
          label: '6'
        },{
          value: '7',
          label: '7'
        }],
        child:[
          {
           value: '0',
           label: '0'
          },
          {
           value: '1',
           label: '1'
          },
          {
           value: '2',
           label: '2'
          },
          {
           value: '3',
           label: '3'
          },
          {
           value: '4',
           label: '4'
          }
        ]
    }
  },
  methods: {
      certain(){
        const adultNum = this.adultValue
        const childNum = this.childValue
        this.personNum = adultNum +"成人"+" "+childNum+"儿童"
        this.show = false
      },
      lookPrice(){

      }
    },
    mounted() {
    }
}
</script>

<style lang="less" scoped>
.mianbaoxie{
  padding: 15px 0;
}
.Search{
  width: 900px;
  display: flex;
  justify-content: space-between;
}
.searchBox{
  position: relative;
    .personShow{
      margin-top: 10px;
      background-color: #fff;
      padding: 10px 10px;
      position: absolute;
      right:10.3%;
      width: 300px;
      height: 120px;
      border-radius: 5px;
      border: 1px solid rgb(219, 219, 219);
      .psTop{
        height: 50px;
        padding-bottom: 10px;
        line-height: 50px;
        .psTxt{
          float: left;
        }
        .adult{
          width: 120px;
          margin-right: 5px;
          float: right;
        }
        .child{
           width: 120px;
          float: right;
        }
      }
      .cancel{
        float: right;
        margin-top: 5%;
      }
      .certain{
        float: left;
        margin-top: 5%;
      }
    }
}


</style>
