<template>
  <n-tabs type="segment" class="padding">
    <n-tab-pane name="chap1" tab="我的文章">
      <n-empty
        description="没有任何文章"
        v-if="posts.length === 0"
        style="margin-top: 50px"
      />
      <n-list hoverable clickable>
        <n-list-item v-for="(item, index) in posts" :key="index">
          <n-thing :title="item.title">
            <template #description>
              {{ item.data }}
            </template>

            <n-space justify="space-between">
              <n-tag
                :bordered="false"
                type="success"
                v-if="item.status === 'publish'"
              >
                已发布
                <template #avatar>
                  <n-icon><DoneOutlined /></n-icon>
                </template>
              </n-tag>
              <n-tag
                :bordered="false"
                type="primary"
                v-else-if="item.status === 'draft'"
              >
                草稿
                <template #avatar>
                  <n-icon><Drafts20Filled /></n-icon>
                </template>
              </n-tag>
              <n-tag
                :bordered="false"
                type="warning"
                v-else-if="item.status === 'check'"
              >
                审核中
                <template #avatar>
                  <n-icon><AccessTimeOutlined /></n-icon>
                </template>
              </n-tag>

              <n-space>
                <n-button size="small" v-if="item.status === 'draft'">
                  编辑
                </n-button>
                <n-button
                  size="small"
                  type="success"
                  v-if="item.status === 'draft'"
                  @click="toChecker(item.id)"
                  :loading="checkButton"
                >
                  提交审核
                </n-button>
                <n-button
                  size="small"
                  type="error"
                  @click="twoConfirm(item.id)"
                >
                  删除
                </n-button>
              </n-space>
            </n-space>
          </n-thing>
        </n-list-item>
      </n-list>
    </n-tab-pane>
    <n-tab-pane name="topics" tab="我的帖子"> </n-tab-pane>
    <n-tab-pane name="chap2" tab="关注的人">
      <n-empty
        description="没有任何关注的人"
        v-if="follows.length === 0"
        style="margin-top: 50px"
      />
    </n-tab-pane>
  </n-tabs>
</template>

<script setup lang="ts">
import { GetUserPost, DeleteUserPost, PutPostCheck } from "@/Api"
import { onMounted, ref } from "vue"
import { useDialog, useMessage } from "naive-ui"
import AccessTimeOutlined from "@vicons/material/AccessTimeOutlined"
import DoneOutlined from "@vicons/material/DoneOutlined"
import Drafts20Filled from "@vicons/fluent/Drafts20Filled"
import storage from "@/Utils/Storage"

const dialog = useDialog()
const message = useMessage()

const posts = ref([])
const follows = ref([])
const getPost = async () => {
  const request = await GetUserPost(storage.parse("token").id)
  posts.value = request.data.data
}
onMounted(getPost)

// 删除
const twoConfirm = uid => {
  const operator = dialog.warning({
    content: `确认删除？`,
    title: "警告",
    positiveText: "确定",
    negativeText: "手滑了",
    onPositiveClick: (): Promise => {
      operator.loading = true
      return new Promise(async (resolve, reject) => {
        const deleter = await DeleteUserPost(uid)
        if (deleter.data.code == 200) {
          message.success(deleter.data.message)
          await getPost()
          resolve(deleter)
        } else {
          message.error(deleter.data.message)
          await getPost()
          reject(deleter)
        }
      })
    },
  })
}

// 提交审核
const checkButton = ref(false)
const toChecker = async uid => {
  checkButton.value = true
  try {
    const req = await PutPostCheck(uid)
    if (req.data.code !== 200) {
      message.error(req.data.message)
    } else {
      message.success(req.data.message)
    }
  } catch (err) {
    checkButton.value = false
    message.error(err)
  }
  await getPost()
  checkButton.value = false
}
</script>
