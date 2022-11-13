<template>
  <div id="apps" class="apps">
    <Bilibili v-if="type == 'bilibili'" />
  </div>
</template>

<script lang="ts" setup>
import Bilibili from "@/Parts/Apps/Bilibili.vue"
import { useRouter, useRoute } from "vue-router"
import { onMounted, ref } from "vue"

const type = ref("null")
onMounted(() => {
  const route = useRoute()
  type.value = route.params.e
})
</script>
