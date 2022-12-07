<script setup>
import Add from "@vicons/carbon/Add"
import BottomBar from "../Parts/BottomBar.vue"
import TopicList from "../Parts/Discover/Topic.vue"
import TagList from "../Parts/Discover/Tag.vue"
import NewTopic from "../Parts/Discover/NewTopic.vue"
import { ref } from "vue"
const isOpen = ref(false)
const switcher = () => isOpen.value = !isOpen.value
</script>

<template>
  <div class="discover">
    <BottomBar :on="1" />
		<n-drawer v-model:show="isOpen" placement="bottom" height="96%" style="border-top-left-radius: 18px;border-top-right-radius: 18px">
		  <NewTopic />
	  </n-drawer>
		<div class="padding">
    <n-h1 style="margin: 0">
			发现
		</n-h1>
		</div>
    <div class="padding">
			<TagList />
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
				@click="switcher"
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
