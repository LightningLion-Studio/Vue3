<template>
  <div class="newdraft">
    <Header>编辑草稿</Header>
      <div class="container padding">
        <n-space vertical>
          <n-input size="large" v-model:value="title" placeholder="请输入文章标题 必填" />
          <md-editor v-model="text" @onUploadImg="onUploadImg" theme="dark" :toolbars="toolbar" />
          <n-button block type="primary" size="large">保存草稿</n-button>
        </n-space>
    </div>
  </div>
</template>

<style lang="less" scoped>
.newdraft {
  margin-top: 50px;
}
.md-editor {
  background: #242424;
}
.md-editor-fullscreen {
  z-index: 99999999999;
}
.md-editor-dropdown {
  background: #fff0!important;
}
</style>

<script setup lang="ts">
import { ref, onMounted } from "vue"
import { useMessage } from "naive-ui"
import MdEditor from "md-editor-v3"
import "md-editor-v3/lib/style.css"
import axios from "axios"
import storage from "@/Utils/Storage"
import Header from "@/Parts/Header.vue"
import { tools, fixEditor } from "@/Utils/editor"
const cookie = storage.parse("token")
const message = useMessage()

const text = ref("")
const title = ref("")
const toolbar = ref(tools)

onMounted(() => {
  setTimeout(fixEditor(),5000)
})


// 上传图片
const onUploadImg = (files: Array<any>, callback: Function) => {
  let form = new FormData()
  form.append("avatar", files[0])
   axios.post("/apis/user/upload?cookie=" + cookie.token, form, {
  headers: {
    "Content-Type": "multipart/form-data",
  },
}).then(res => {
   message.success(res.data.message)
   callback(["//" + res.data.data])
}).catch(error => {
  message.error("上传失败")
})
}
</script>



