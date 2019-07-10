<template>
  <div>
    <div class="ctrl">
      <span v-for="(item,index) in ['新闻', '体育', '军事']"
      :key='index'
      @click="handleClick(index)"
      :class="{active:current===index}">
        {{item}}
      </span>
    </div>
    <div v-if='current===0'>
      <ul>
        <li>哈哈哈哈</li>
        <li>哈哈哈哈</li>
        <li>哈哈哈哈</li>
      </ul>
    </div>
    <div v-if="current===1">
      <ul>
        <li>呀呀呀呀</li>
        <li>呀呀呀呀</li>
        <li>呀呀呀呀</li>
      </ul>
    </div>
    <div v-if="current===2">
      <ul>
        <li>嘻嘻嘻嘻</li>
        <li>嘻嘻嘻嘻</li>
        <li>嘻嘻嘻嘻</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 0
    }
  },
  methods: {
      handleClick(index){
          this.current=index
      }
  }
}
</script>

<style>
.ctrl {
  margin-bottom: 10px;
}

.ctrl span {
  cursor: pointer;
  margin: 0 auto;
}

.active {
  color: pink;
}
</style>