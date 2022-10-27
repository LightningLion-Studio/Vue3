<template>
  <n-config-provider :theme="undefined">
    <BottomBar on="0" />
    
    <div class="padding">
      <div class="day">
      {{ new Date().getMonth() }}月{{ new Date().getDate() }}日 {{ parseWeek() }}
      </div>
      <n-h1 class="h1">
        心电社区
      </n-h1>
    </div>
  </n-config-provider>
</template>

<script>
import BottomBar from "@/Parts/BottomBar.vue"

export default {
  components: {
    BottomBar,
  },
  methods: {
    parseWeek() {
      const time = new Date().getDay()
      if (time === 0) {
        return "星期一"
      } else if (time === 1) {
        return "星期二"
      } else if (time === 2) {
        return "星期三"
      } else if (time === 3) {
        return "星期四"
      } else if (time === 4) {
        return "星期五"
      } else if (time === 5) {
        return "星期六"
      } else if (time === 6) {
        return "星期日"
      }
    }
  }
}
</script>

<style lang="less" scoped>
.day {
  color: #fff;
  margin-bottom: 0;
  padding-bottom: 0;
}
.h1 {
  margin: 0;
  padding: 0;
}
</style>
