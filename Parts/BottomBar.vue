/carbon<template>
  <div class="bottom-bar">
    <div class="item">
      <n-icon size="24">
        <Home16Regular />
      </n-icon>
      <div class="text">今天</div>
    </div>
    <div class="item">
      <n-icon size="24">
        <AppsAddIn16Regular />
      </n-icon>
      <div class="text">发现</div>
    </div>
    <div class="item">
      <n-icon size="24">
        <Home16Regular />
      </n-icon>
      <div class="text">我的</div>
    </div>
  </div>
</template>

<script>
import {
  Home16Regular,
  AppsAddIn16Regular
} from "@vicons/fluent"
import {
  UserAvatar
} from "@vicons"
export default {
  props: ['active'],
  data() {
    return {
      
    }
  },
  components: {
    Home16Regular,
    AppsAddIn16Regular
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
