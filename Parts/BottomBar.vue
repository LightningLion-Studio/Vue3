<template>
  <div class="bottom-bar">
    <n-icon>
      <Home />
    </n-icon>
  </div>
</template>

<script>
import { Home } from '@vicons/ionicons5'
export default {
  components: {
    Home
  },
}
</script>

<style lang="less">
.bottom-bar {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
