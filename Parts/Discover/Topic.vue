<template>
  <div class="lister">
    <n-card v-for="(item, index) in data" :title="item.title">
      {{ item.data }}
    </n-card>
    
    <n-result v-if="data.length === 0" status="403" title="发现页还没有开放" description="生活总归带点荒谬" />
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
