<template>
  <n-grid class="drawer-content" :x-gap="12" :y-gap="8" :cols="4">
    <n-grid-item class="item" @click="logout()">
      <n-icon size="40">
        <Power20Filled />
      </n-icon>
      <n-text strong> 登出 </n-text>
    </n-grid-item>
    <n-grid-item class="item">
      <n-icon size="40">
        <Settings16Regular />
      </n-icon>
      <n-text strong> 设置 </n-text>
    </n-grid-item>
    <n-grid-item class="item">
      <n-icon size="40">
        <MediaLibrary />
      </n-icon>
      <n-text strong> 媒体 </n-text>
    </n-grid-item>
  </n-grid>
</template>

<script>
import Settings16Regular from "@vicons/fluent/Settings16Regular"
import Power20Filled from "@vicons/fluent/Power20Filled"
import MediaLibrary from "@vicons/carbon/MediaLibrary"

export default {
  methods: {
    logout() {
      localStorage.removeItem("token")
      this.$router.push("/")
      this.$message.success("已退出登录")
    },
  },
  components: { Settings16Regular, Power20Filled, MediaLibrary },
}
</script>

<style scoped lang="less">
.drawer-content {
  .item {
    text-align: center;
    margin: 22px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
