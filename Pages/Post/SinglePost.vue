<template>
  <div class="single-post">
    <Header :lefter="false" :autohide="true" blur="05">{{ data.title }}</Header>
    <SinglePostBottomBar />
    <div class="container padding">
      <n-h2 prefix="bar" align-text>{{ data.title }}</n-h2>
      <MdEditor previewOnly theme="dark" v-model="data.data" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue"
import { useRoute } from "vue-router"
import { useMessage } from "naive-ui"
import { GetSinglePost } from "@/Api"
import Header from "../../Parts/Header.vue"
import MdEditor from "md-editor-v3"
import "md-editor-v3/lib/style.css"
import SinglePostBottomBar from "@/Parts/Post/SinglePostBottomBar.vue"
const route = useRoute()
const message = useMessage()

const data = ref({
  title: "666",
  data: "",
})

/**
 * 发送请求
 */
async function requester() {
  const request = await GetSinglePost(route.params.id)
  console.log(request)
  if (request.data.code !== 200) {
    message.error(request.data.message)
    return
  }
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
