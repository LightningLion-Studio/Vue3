<template>
  <div class="header">
    <div class="left" @click="back()">
      <n-icon size="35">
        <KeyboardArrowLeftRound />
      </n-icon>
    </div>
    <div class="text">
      <slot />
    </div>
  </div>
</template>

<script>
import { KeyboardArrowLeftRound } from "@vicons/material"

export default {
  methods: {
    back() {
      this.$router.go(-1)
    },
  },
  components: { KeyboardArrowLeftRound },
}
</script>

<style lang="less" scoped>
.header {
  position: fixed;
  width: 100%;
  z-index: 999;
  top: 0;
  display: flex;
  align-items: center;
  height: 45px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  font-size: 17px;
  color: #fff;
  box-shadow: 0 0 40px #00000052;
  position: relative;
  div {
    height: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
  }
  .text {
    width: 100%;
    position: absolute;
  }
  .left {
    z-index: 999;
  }
}
</style>
