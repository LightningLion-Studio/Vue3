<template>
  <n-config-provider :theme="darkTheme">
    <router-view v-slot="{ Component }">
      <transition appear mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </n-config-provider>
</template>

<script>
import { darkTheme } from "naive-ui"
export default {
  data() {
    return {
      darkTheme,
    }
  },
}
</script>

<style>
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.35s;
}
</style>
