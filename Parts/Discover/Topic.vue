<template>
  <div class="lister">
    <Carder v-for="(item, index) in data" :title="item.title">
      {{ item.data }}
    </Carder>

    <n-result
      v-if="data.length === 0"
      status="403"
      title="这里还没有任何帖子"
      description="生活总归带点荒谬"
    />
  </div>
</template>

<script>
import { GetTopic } from "@/Api"
import Carder from "../Post/Carder.vue"

export default {
  components: { Carder },
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
