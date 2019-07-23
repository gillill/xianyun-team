<template>
    <div>
      <div class="main">
      <div class="inBox">
        <ul>
          <li>
            <div class="priBox clearfloat">
              <span class="price">价格</span>
              <span class="priceNum">0-4000</span>
            </div>
              <el-slider v-model="money" :max="4000"></el-slider>
          </li>
          <li>
            <p>住宿等级</p>
           <el-dropdown   class="level">
              <span class="el-dropdown-link">
                不限　　　　　　　　<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu
             
               style="width:160px;"  slot="dropdown" >
                <el-dropdown-item  v-for="(item,index) in this.levels"
              :key="index">
                  <i>○</i>{{item.level}}星
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </li>
          <li>
            <p>住宿类型</p>
            <el-dropdown   class="level">
              <span class="el-dropdown-link">
                不限　　　　　　　　<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu
               style="width:160px;"  slot="dropdown" >
                <el-dropdown-item  v-for="(item,index) in this.types"
              :key="index">
                  <i>○</i>{{item.name}}
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </li>
          <li>
            <p>酒店设施</p>
            <el-dropdown   class="level">
              <span class="el-dropdown-link">
                不限　　　　　　　　<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu
             
               style="width:160px;"  slot="dropdown" >
                <el-dropdown-item  v-for="(item,index) in this.assets"
              :key="index">
                  <i>○</i>{{item.name}}
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </li>
          <li>
            <p>酒店品牌</p>
              <el-dropdown   class="level">
              <span class="el-dropdown-link">
                不限　　　　　　　　<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu
              style="width:160px; height:200px; overflow-y:scroll;"
              slot="dropdown" >
                <el-dropdown-item 
                 v-for="(item,index) in this.brands"
              :key="index">
                  <i>○</i>{{item.name}}
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </li>
        </ul>
      </div>
      </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
      money:4000,
      levels:[],
      types:[],
      assets:[],
      brands:[]
    }
  },
  mounted () {
      this.$axios({
        url:`/hotels/options`,
        method:"GET"
      }).then(res=>{
        // console.log(res);
        
        const {data} = res.data;
        this.assets = data.assets;
        this.levels = data.levels;
        this.types = data.types;
        this.brands = data.brands
        
      })
  }
}
</script>

<style lang="less" scoped>
   .clearfloat:after{display:block;clear:both;content:"";visibility:hidden;height:0}
   .clearfloat{zoom:1}
  .main{
    padding: 5px 10px;
    width:100%;
    // height:80px;
    border: 1px solid rgb(199, 199, 199);
    overflow: hidden;
    .inBox{
      padding: 3px 0;
      .priBox{
        margin-bottom: 10px;
      }
      >ul{
        width:1010px;
        li{
          border-right: 1px solid rgb(199, 199, 199);
          float: left;
          width: 170px;
          height: 80px;
          list-style: none;
          padding: 0 15px;
          .price{
            float: left;
          }
          .priceNum{
            float:right;
          }
        }
        li:last-child{
          border: none;
        }
      }
    }
  }
   .el-dropdown-link {
    cursor: pointer;
    // color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .level{
    margin-top: 20px;
  }
</style>


