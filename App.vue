<template>
  <n-config-provider :theme="darkTheme">
    <router-view />
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
