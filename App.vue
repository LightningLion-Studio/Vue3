<template>
  <n-config-provider :theme="darkTheme" :theme-overrides="themeOverrides">
    <n-message-provider>
      <router-view v-slot="{ Component }">
        <transition appear mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </n-message-provider>
  </n-config-provider>
</template>

<script>
import { darkTheme } from "naive-ui"
import config from "./themeconfig.json"
export default {
  data() {
    return {
      darkTheme,
      themeOverrides: config,
    }
  },
}
</script>

<style lang="less" scoped>
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.35s;
}
</style>
