<template>
  <div class="single">
    <Header>帖子详情</Header>
    <div class="container padding">
      <n-h2 prefix="bar" align-text class="title">{{ title }}</n-h2>
      <n-avatar
        round
        size="medium"
        :src="info.avatar"
        v-if="info.avatar != null"
      />
      <n-avatar round>
        <n-icon>
          <User />
        </n-icon>
      </n-avatar>
      <div>{{ text }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue"
import User from "@vicons/carbon/User"
import { GetSingleTopic, GetUserSingleInfo } from "../../Api"
import Header from "../../Parts/Header.vue"
import MdEditor from "md-editor-v3"
import "md-editor-v3/lib/style.css"
import { useRoute } from "vue-router"
const route = useRoute()

const title = ref("")
const text = ref("")
const info = ref({})

onMounted(async () => {
  const request = await GetSingleTopic(route.params.id)
  const uinfo = await GetUserSingleInfo(request.data.data.author)
  title.value = request.data.data.title
  info.value = uinfo
  text.value = request.data.data.data
})
</script>

<style lang="less" scoped>
.container {
  padding-top: 50px;
}
.title {
  margin: 0 !important;
}
</style>
