<template>
  <n-config-provider :theme="undefined">
    <BottomBar />
  </n-config-provider>
</template>

<script>
import BottomBar from "@/Parts/BottomBar.vue";

export default {
  components: {
    BottomBar,
  },
};
</script>
