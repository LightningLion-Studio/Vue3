<template>
  <div class="newdraft">
    <Header>编辑草稿</Header>
    <div class="container padding">
      <n-space vertical>
        <n-input
          size="large"
          v-model:value="title"
          placeholder="请输入文章标题 必填"
        />
        <md-editor
          v-model="text"
          @onUploadImg="onUploadImg"
          theme="dark"
          :toolbars="toolbar"
        />
        <n-select size="large" placeholder="分类功能正在开发中" />
        <n-button
          :loading="saveButtonDisabled"
          block
          type="primary"
          size="large"
          @click="save"
        >
          保存草稿
        </n-button>
      </n-space>
    </div>
  </div>
</template>

<style lang="less">
.newdraft {
  margin-top: 50px;
  .md-editor {
    background: #242424;
  }
  .md-editor-dark {
    --md-color: #ffffffd1;
    .default-theme {
      color: #ffffffd1;
    }
  }
  .md-editor-fullscreen {
    z-index: 99999999999;
  }
  .md-editor-dropdown {
    background: #fff0 !important;
  }
  .md-editor-dropdown-overlay {
    background: var(--md-bk-color);
  }
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
import { newDraft } from "../../Api"
import empty from "../../Utils/Empty"
const cookie = storage.parse("token")
const message = useMessage()

onMounted(() => {
  fixEditor()
})

const text = ref("")
const title = ref("")
const id = ref("")
const toolbar = ref(tools)
const saveButtonDisabled = ref(false)

/**
 * 保存
 *
 * @author Zero
 * @since 2022
 */
const save = async () => {
  saveButtonDisabled.value = true
  if (empty(title.value)) {
    message.error("请填写标题")
    saveButtonDisabled.value = false
    return
  } else if (empty(text.value)) {
    message.warning("请填写内容")
    saveButtonDisabled.value = false
    return
  }
  const update = await newDraft(
    title.value,
    text.value,
    "open",
    "",
    id.value,
    "",
  )
  if (update.data.code === 201) {
    id.value = update.data.data.insertId
  }
  if (update.data.code == 200) {
    message.success(update.data.message)
  } else if (update.data.code == 201) {
    message.success(update.data.message)
  } else {
    message.error(update.data.message)
  }
  saveButtonDisabled.value = false
}

/**
 * 上传图片
 *
 * @param files
 * @param callback
 * @author Zero
 * @since 2022
 */
const onUploadImg = (files: Array<any>, callback: Function) => {
  let form = new FormData()
  form.append("avatar", files[0])
  axios
    .post("/apis/user/upload?cookie=" + cookie.token, form, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then(res => {
      message.success(res.data.message)
      callback(["//" + res.data.data])
    })
    .catch(error => {
      message.error("上传失败")
    })
}
</script>
