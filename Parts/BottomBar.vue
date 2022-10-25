<template>
  <div class="bottom-bar">
    <n-icon>
      <Home16Regular />
    </n-icon>
  </div>
</template>

<script>
import { Home16Regular } from '@vicons/fluent'
export default {
  components: {
    Home16Regular
  },
}
</script>

<style lang="less">
.bottom-bar {
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #fff;
  padding: 10px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}
</style>
