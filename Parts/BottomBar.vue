<template>
  <div id="bar" class="bottom-bar">
    <n-tooltip trigger="hover">
      首页
      <template #trigger>
        <div @click="go('/')" class="item">
          <n-icon size="24">
            <Home16Regular v-if="on !== 0" />
            <Home16Filled v-if="on === 0" />
          </n-icon>
        </div>
      </template>
    </n-tooltip>
    <n-tooltip trigger="hover">
      发现
      <template #trigger>
        <div @click="go('/discover')" class="item">
          <n-icon size="24">
            <Apps16Regular v-if="on !== 1" />
            <Apps16Filled v-if="on === 1" />
          </n-icon>
        </div>
      </template>
    </n-tooltip>
    <n-tooltip trigger="hover">
      我的
      <template #trigger>
        <div @click="go('/user')" class="item">
          <n-icon size="24">
            <UserAvatar v-if="on !== 2" />
            <UserAvatarFilled v-if="on === 2" />
          </n-icon>
        </div>
      </template>
    </n-tooltip>
  </div>
</template>

<script lang="ts">
import Apps16Filled from "@vicons/fluent/Apps16Filled"
import Home16Filled from "@vicons/fluent/Home16Filled"
import Home16Regular from "@vicons/fluent/Home16Regular"
import Apps16Regular from "@vicons/fluent/Apps16Regular"
import UserAvatar from "@vicons/carbon/UserAvatar"
import UserAvatarFilled from "@vicons/carbon/UserAvatarFilled"
export default {
  props: {
    on: {
      type: Number,
      require: true,
    },
  },
  components: {
    Home16Regular,
    Apps16Regular,
    Apps16Filled,
    UserAvatar,
    UserAvatarFilled,
    Home16Filled,
  },
  methods: {
    go(url) {
      this.$router.push(url)
    },
  },
}
</script>

<style scoped lang="less">
.bottom-bar {
  position: fixed;
  display: flex;
  z-index: 999;
  justify-content: space-around;
  bottom: 0;
  width: 100%;
  color: #fff;
  padding-top: 15px;
  padding-bottom: 15px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  .item {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
}
@media all and (display-mode: fullscreen) {
  /*@supports (bottom: env(safe-area-inset-bottom)) {*/
    .bottom-bar {
      padding-bottom: 30px!important;
    }
  /*}*/
}
.active {
  padding-top: 15px;
  padding-bottom: 15px;
}
</style>
