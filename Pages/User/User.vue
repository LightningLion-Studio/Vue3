<template>
  <div class="user">
    <div class="padding header">
    <BottomBar on="2" />
      <n-page-header
        :title="info.name"
        @back="$router.go(-1)"
        :subtitle="info.saying"
      >
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
        <template #header>
          <n-space justify="space-between">
            <n-tag :bordered="false" type="primary">Lv {{ info.level }}</n-tag>
            <n-tag v-if="info.level == 10">管理员</n-tag>
          </n-space>
        </template>
        <template #avatar>
          <n-avatar size="large" round>
            <n-icon size="30">
              <User />
            </n-icon>
          </n-avatar>
        </template>
      </n-page-header>
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
