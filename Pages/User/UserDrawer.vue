<template>
  <n-grid :x-gap="12" :y-gap="8" :cols="4">
    <n-grid-item class="item">
      <n-icons size="small">
        <Power20Filled/>
      </n-icons>
      <n-text strong>
        登出
      </n-text>
    </n-grid-item>
    <n-grid-item class="item">
      <n-icons size="small">
        <Settings16Regular/>
      </n-icons>
      <n-text strong>
        设置
      </n-text>
    </n-grid-item>
    <n-grid-item class="item">
      <n-icons size="small">
        <MediaLibrary/>
      </n-icons>
      <n-text strong>
        媒体
      </n-text>
    </n-grid-item>
  </n-grid>
</template>

<script>
import { Settings16Regular, Power20Filled } from "@vicons/fluent"
import { MediaLibrary } from "@vicons/carbon"

export default {
  components: { Settings16Regular, Power20Filled, MediaLibrary }
}
</script>

<style scoped lang="less">
.item {
  text-align: center;
  padding: 14px;
}
</style>
