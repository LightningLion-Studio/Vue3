<template>
  <n-config-provider :theme="undefined" class="home">
    <BottomBar :on="0" />

    <div class="padding">
      <n-text depth="3" class="day">
        {{ new Date().getMonth() }}月{{ new Date().getDate() }}日
        {{ parseWeek() }}
      </n-text>
      <n-h1 class="h1"> 心电社区 </n-h1>
      <HomeSwiper />
      <n-alert :bordered="false" type="info" :title="data" class="post" />
      <AppGird class="post" />
      <HomePost class="post" />
    </div>
  </n-config-provider>
</template>

<script>
import HomeSwiper from "@/Parts/HomeSwiper.vue"
import AppGird from "@/Parts/AppGird.vue"
import HomePost from "@/Parts/HomePost.vue"
import BottomBar from "@/Parts/BottomBar.vue"
import { GetAnnouncement } from "@/Api"

export default {
  components: {
    BottomBar,
    HomeSwiper,
    HomePost,
    AppGird,
  },
  data() {
    return {
      data: '公告加载中...'
    }
  },
  async mounted() {
    const request = await GetAnnouncement()
    this.data = request.data.data
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
    },
  },
}
</script>

<style lang="less" scoped>
.home {
  padding-top: 18px;
}
.post {
  margin-top: 14px;
}
.day {
  margin-bottom: 0;
  padding-bottom: 0;
}
.h1 {
  margin: 0;
  padding: 0;
  margin-bottom: 14px;
}
</style>
