<template>
  <div class="single-post">
    <Header :lefter="false" :autohide="true">{{ data.title }}</Header>
    <div class="container padding">
      <n-h2 prefix="bar" align-text>{{ data.title }}</n-h2>
      <!--<div id="page-content" v-html="data.data"></div>-->
      <MdEditor v-model="editor" theme="dark" previewOnly />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { render, h, onMounted, ref } from "vue"
import { useRoute } from "vue-router"
import { useMessage } from "naive-ui"
import { GetSinglePost } from "../../Api"
import MdEditor from "md-editor-v3"
import "md-editor-v3/lib/style.css"

import Header from "../../Parts/Header.vue"
const route = useRoute()
const message = useMessage()

const data = ref({
  title: "666",
  data: "",
})

const editor = ref(``)

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
  editor.value = request.data.data.data
  console.log(editor.value)
}

onMounted(async () => {
  await requester()
})
</script>

<style lang="less">
.md-editor {
  --md-bk-color: #fff0;
}
.container {
  #page-content {
    color: #fff;
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      a {
        color: #fff;
        text-decoration: none;
      }
      &:before {
        content: " ";
        background: #fff;
        width: 10px;
        position: absolute;
      }
    }
    p {
      font-size: 18px;
    }
    img {
      width: 100%;
    }
  }
}
</style>
