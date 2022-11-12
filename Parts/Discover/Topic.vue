<template>
  <div class="lister">
    <n-card v-for="(item, index) in data" :title="item.title">
      {{ item.data }}
    </n-card>
  </div>
</template>

<script>
import { GetTopic } from "@/Api"

export default {
  data() {
    return {
      data: [],
    }
  },
  async mounted() {
    const list = await GetTopic(3)
    this.data = list.data.data
  },
}
</script>
