<template>
  <div class="single-post padding">
    <n-h2 prefix="bar" align-text>{{ data.title }}</n-h2>
    <div id="page-content" v-html="data.data">

		</div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, compile } from "vue"
import { useRoute } from "vue-router"
import { useMessage } from "naive-ui"
import { GetSinglePost } from "../../Api"
const route = useRoute()
const message = useMessage()

const data = ref({
  title: "666",
  data: "<n-h1>444</n-h1>",
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
	console.log(compile(data.value.data))
}

onMounted(async () => {
  await requester()
})
</script>

<style lang="less" scoped></style>
