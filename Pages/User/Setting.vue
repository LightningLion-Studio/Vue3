<template>
  <div class="padding container">
    <Header>设置</Header>
    <n-tabs>
      <n-tab-pane name="通用">
        <n-list hoverable clickable show-divider>
          <n-list-item>
            <n-space align="center" justify="space-between">
              <n-space align="center" class="left">
                <n-icon :size="25">
                  <MailAdd16Filled />
                </n-icon>
                <div>邮箱</div>
              </n-space>
              <n-icon :size="25">
                <KeyboardArrowRightSharp />
              </n-icon>
            </n-space>
          </n-list-item>
        </n-list>
      </n-tab-pane>
    </n-tabs>
  </div>
</template>

<script setup lang="ts">
import Header from "@/Parts/Header.vue"
import MailAdd16Filled from "@vicons/fluent/MailAdd16Filled"
import KeyboardArrowRightSharp from "@vicons/material/KeyboardArrowRightFilled"
</script>

<style lang="less" scoped>
.container {
  margin-top: 40px;
}
</style>





