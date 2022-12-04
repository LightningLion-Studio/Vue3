<template>
  <n-tabs type="segment" class="padding">
    <n-tab-pane name="chap1" tab="我的文章">
			<n-empty description="没有任何文章" v-if="posts.length === 0" style="margin-top: 50px" />
      <n-list hoverable clickable>
        <n-list-item v-for="(item, index) in posts" :key="index">
          <n-thing :title="item.title">
						<template #description>
							{{ item.data }}
						</template>
            <n-tag :bordered="false" type="success" v-if="item.status === 'publish'">
              已发布
							<template #avatar>
								<n-icon><DoneOutlined /></n-icon>
							</template>
            </n-tag>
						<n-tag :bordered="false" type="primary" v-else-if="item.status === 'draft'">
							草稿
							<template #avatar>
								<n-icon><Drafts20Filled /></n-icon>
							</template>
						</n-tag>
						<n-tag :bordered="false" type="warning" v-else-if="item.status === 'check'">
							审核中
							<template #avatar>
								<n-icon><AccessTimeOutlined /></n-icon>
							</template>
						</n-tag>
          </n-thing>
        </n-list-item>
      </n-list>
    </n-tab-pane>
    <n-tab-pane name="chap2" tab="关注的人">
			<n-empty description="没有任何关注的人" v-if="follows.length === 0" style="margin-top: 50px" />
		</n-tab-pane>
  </n-tabs>
</template>

<script setup lang="ts">
import { GetUserPost } from "@/Api"
import { onMounted, ref } from "vue"
import AccessTimeOutlined from "@vicons/material/AccessTimeOutlined"
import DoneOutlined from "@vicons/material/DoneOutlined"
import Drafts20Filled from "@vicons/fluent/Drafts20Filled"
import storage from "@/Utils/Storage"

const posts = ref([])
const follows = ref([])
onMounted(async () => {
  const request = await GetUserPost(storage.parse("token").id)
  posts.value = request.data.data
})
</script>
