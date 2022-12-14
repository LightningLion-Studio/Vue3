<template>
  <n-config-provider
    :theme="darkTheme"
    :theme-overrides="themeOverrides"
    id="root"
  >
    <n-message-provider>
      <n-dialog-provider>
        <router-view v-slot="{ Component }">
          <transition appear mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </n-dialog-provider>
    </n-message-provider>
  </n-config-provider>
</template>

<script>
import { darkTheme } from "naive-ui"
import config from "./themeconfig.json"
export default {
  setup() {
    return {
      darkTheme,
      themeOverrides: config,
    }
  },
}
</script>

<style lang="less">
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.35s;
}
#root {
  padding-bottom: 60px;
}
</style>
