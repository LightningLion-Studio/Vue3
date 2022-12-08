<template>
  <div class="margin">
    <n-space vertical>
      <n-input placeholder="请输入标题" size="large" />
      <n-input
        type="textarea"
        placeholder="请输入内容..."
        :autosize="{ minRows: 6 }"
      />
      <n-button type="primary" size="large" block>保存</n-button>
    </n-space>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({
  setup() {
    return {}
  },
})
</script>
