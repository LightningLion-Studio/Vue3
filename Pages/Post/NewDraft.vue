<template>
  <md-editor v-model="text" @onUploadImg="onUploadImg" theme="dark" />
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useMessage } from "naive-ui"
import MdEditor from "md-editor-v3"
import "md-editor-v3/lib/style.css"
import axios from "axios"
import storage from "@/Utils/Storage"
const cookie = storage.parse("token")
const message = useMessage()

const text = ref("# Hello Editor")

const onUploadImg = (files: Array<any>, callback: Function) => {
  let form = new FormData()
  form.append("avatar", files[0])

  axios.post("https://v2.api.light.xhhzs.cn/v2/user/upload?cookie=" + cookie.token, form, {
  headers: {
    "Content-Type": "multipart/form-data",
  },
}).then(res => {
   message.success(res.data.message)
  callback(["//" + res.data.data])
})
    .catch(error => {
      console.error(error)
      message.error("上传失败")
    })
}
</script>
