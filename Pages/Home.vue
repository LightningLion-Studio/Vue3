<template>
  <n-config-provider :theme="undefined">
    <BottomBar on="0" />
  </n-config-provider>
</template>

<script>
import BottomBar from "@/Parts/BottomBar.vue"

export default {
  components: {
    BottomBar,
  },
}
</script>
