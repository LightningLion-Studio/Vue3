<template>
  <div class="discover">
    <BottomBar on="1" />
    <div class="padding">
      <n-h1> 发现 </n-h1>
    </div>
    <div class="padding">
      <TopicList />
    </div>
  </div>
</template>

<script>
import BottomBar from "@/Parts/BottomBar.vue"
import TopicList from "@/Parts/Discover/Topic.vue"

export default {
  components: { BottomBar, TopicList },
}
</script>
