<template>
  <div class="home-post">
    <n-skeleton v-if="load" text :repeat="4" />
    <n-list v-if="show" hoverable clickable>
      <template #header> 文章 </template>
      <n-list-item
        v-for="(item, index) in list"
        :key="index"
        @click="go(item.id)"
      >
        <n-thing :title="item.title" title-extra="extra"> </n-thing>
      </n-list-item>
    </n-list>
  </div>
</template>

<script lang="ts">
import { GetPost } from "@/Api"

export default {
  data() {
    return {
      list: [],
      load: true,
      show: false,
    }
  },
  async mounted() {
    const list: object = await GetPost()
    this.list = list.data.data
    this.load = false
    this.show = true
  },
  methods: {
    go(e) {
      this.$router.push("/post/" + e)
    },
  },
}
</script>

<style lang="less" scoped>
.home-post .n-list {
  border-radius: var(--radius);
}
</style>
