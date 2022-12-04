<template>
  <div class="single-post">
    <Header :lefter="false" :autohide="true" blur="05">{{ data.title }}</Header>
    <SinglePostBottomBar />
    <div class="container padding">
      <n-h2 prefix="bar" align-text>{{ data.title }}</n-h2>
      <n-thing :title="user.name" :description="user.saying">
        <template #avatar>
          <n-avatar round :size="50">
            <n-icon size="30">
              <User />
            </n-icon>
          </n-avatar>
        </template>
        <template #header-extra>
          <n-space>
            <n-button type="primary" size="small">关注</n-button>
            <n-button size="small">私信</n-button>
          </n-space>
        </template>
      </n-thing>
      <MdEditor previewOnly theme="dark" v-model="data.data" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue"
import { useRoute } from "vue-router"
import { useMessage } from "naive-ui"
import { GetSinglePost, GetUserSingleInfo } from "@/Api"
import User from "@vicons/carbon/User"
import Header from "../../Parts/Header.vue"
import MdEditor from "md-editor-v3"
import "md-editor-v3/lib/style.css"
import SinglePostBottomBar from "@/Parts/Post/SinglePostBottomBar.vue"
const route = useRoute()
const message = useMessage()

const data = ref({
  title: "正在加载中",
  data: "加载中",
})
const user = ref({})

/**
 * 发送请求
 */
async function requester() {
  const request = await GetSinglePost(route.params.id)
  const userReq = await GetUserSingleInfo(request.data.data.author)
  if (request.data.code !== 200) {
    message.error(request.data.message)
    return
  }
  user.value = userReq.data.data
  data.value = request.data.data
}

onMounted(async () => {
  await requester()
})
</script>

<style lang="less">
.single-post {
  p {
    color: #a4a4a9;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--color) !important;
  }
  span.figcaption {
    text-align: left;
  }
}
</style>
