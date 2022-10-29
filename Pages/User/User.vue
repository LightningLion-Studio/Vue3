<template>
  <div class="user">
    <div class="padding header">
      <BottomBar on="2" />

      <n-thing :title="info.name" :subtitle="info.saying">
        <template #description>
        <n-space>
          {{ info.saying }}
          <n-space>
            <n-tag :bordered="false" type="primary">Lv {{ info.level }}</n-tag>
            <n-tag v-if="info.level == 10">管理员</n-tag>
          </n-space>
        </n-space>
        </template>
        <n-row>
          <n-col :span="12">
            <n-statistic label="已发布/草稿" :value="99">
              <template #suffix> / 100 </template>
            </n-statistic>
          </n-col>
          <n-col :span="12">
            <n-statistic label="已关注/粉丝" :value="99">
              <template #suffix> / 100 </template>
            </n-statistic>
          </n-col>
        </n-row>
        <template #avatar>
          <n-avatar :size="60" round>
            <n-icon size="40">
              <User />
            </n-icon>
          </n-avatar>
        </template>
      </n-thing>
    </div>
  </div>
</template>

<script>
import { UserInfo } from "@/Api"
import { User } from "@vicons/carbon"
import BottomBar from "@/Parts/BottomBar.vue"

export default {
  data() {
    return {
      info: {
        name: "",
        saying: "",
        level: "",
      },
    }
  },
  async mounted() {
    const info = await UserInfo()
    if (info.data.code != 200) {
      this.$message.error(info.data.message)
    }
    console.log(info)
    this.info = info.data.data
  },
  components: { User, BottomBar },
}
</script>
