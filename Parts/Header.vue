<template>
  <div
    class="header hide"
    id="header"
    ref="header"
    :style="{
      background: '#242424' + blur,
    }"
  >
    <div class="left" @click="back()" v-if="left">
      <n-icon size="35">
        <KeyboardArrowLeftRound />
      </n-icon>
    </div>
    <div class="text-container">
      <div class="text">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import KeyboardArrowLeftRound from "@vicons/material/KeyboardArrowLeftRound"

export default {
  props: ["autohide", "lefter", "blur"],
  data() {
    return {
      left: true,
    }
  },
  methods: {
    back() {
      this.$router.go(-1)
    },
  },
  mounted() {
    if (this.autohide == true) {
      addEventListener("scroll", () => {
        if (document.documentElement.scrollTop < 300) {
          this.$refs.header.classList.add("hide")
        } else {
          this.$refs.header.classList.remove("hide")
        }
      })
    } else {
      this.$refs.header.classList.remove("hide")
    }
    if (this.lefter == false) {
      this.left = false
    } else {
      this.left = true
    }
  },
  components: { KeyboardArrowLeftRound },
}
</script>

<style lang="less" scoped>
.header.hide {
  transform: translateY(-50px);
  transition: ease 0.2s;
}
.header {
  transform: translateY(0);
  background: #242424;
  transition: ease 0.2s;
  position: fixed;
  width: 100%;
  z-index: 999;
  top: 0;
  display: flex;
  align-items: center;
  height: 45px;
  backdrop-filter: blur(10px) brightness(0.5);
  -webkit-backdrop-filter: blur(10px) brightness(0.5);
  border-bottom: var(--border);
  font-size: 17px;
  color: #fff;
  box-shadow: 0 0 40px #00000052;
  .text-container {
    position: absolute;
    width: 100%;
  }
  .text {
    position: relative;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin-left: 40px;
    margin-right: 40px;
	  text-align: center;
  }
  .left {
    z-index: 999;
    height: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
  }
}
</style>
