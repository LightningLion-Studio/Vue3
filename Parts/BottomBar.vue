<template>
  <div class="bottom-bar">
    <div class="item">
      <n-icon size="24">
        <Home16Regular />
      </n-icon>
      <div v-show="on === 0" class="text">今天</div>
    </div>
    <div class="item">
      <n-icon size="24">
        <AppsAddIn16Regular />
      </n-icon>
      <div v-show="on === 1" class="text">发现</div>
    </div>
    <div class="item">
      <n-icon size="24">
        <UserAvatar />
      </n-icon>
      <div v-show="on === 2" class="text">我的</div>
    </div>
  </div>
</template>

<script>
import { Home16Regular, AppsAddIn16Regular } from "@vicons/fluent"
import { UserAvatar } from "@vicons/carbon"
export default {
  props: ["active"],
  data() {
    return {
      on: 0,
    }
  },
  components: {
    Home16Regular,
    AppsAddIn16Regular,
    UserAvatar,
  },
  watch: {
    "this.active"() {
      if (this.active == 0) {
        this.on = 0
      } else if (this.active == 1) {
        this.on = 1
      } else if (this.active == 2) {
        this.on = 2
      }
    },
  },
}
</script>

<style scoped lang="less">
.bottom-bar {
  position: fixed;
  display: flex;
  justify-content: space-around;
  bottom: 0;
  width: 100%;
  color: #fff;
  padding-top: 5px;
  padding-bottom: 5px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  .item {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    .text {
      font-size: 10px;
    }
  }
}
</style>
