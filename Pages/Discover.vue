<script setup>
import Add from "@vicons/carbon/Add"
import BottomBar from "../Parts/BottomBar.vue"
import TopicList from "../Parts/Discover/Topic.vue"
</script>

<template>
  <div class="discover">
    <BottomBar :on="1" />
    <div class="padding">
      <n-h1> 发现 </n-h1>
    </div>
    <div class="padding">
      <TopicList />
    </div>
		<n-affix
      :top="120"
      position="fixed"
      :trigger-bottom="9999"
      :bottom="70"
      style="right: 20px"
    >
      <n-button
        style="height: 45px"
        size="large"
        round
        type="primary"
      >
        <template #icon>
          <n-icon>
            <Add />
          </n-icon>
        </template>
        新建帖子
      </n-button>
    </n-affix>
  </div>
</template>
