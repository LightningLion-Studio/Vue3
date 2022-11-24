<template>
  <div class="padding header">
		<!--用户-->
    <n-thing
      :content-indented="true"
      :title="info.name"
      :subtitle="info.saying"
    >
      <!--头像-->
      <template #avatar>
        <n-avatar :size="80" round>
          <n-icon size="50">
            <User />
          </n-icon>
        </n-avatar>
      </template>

      <!--描述-->
      <template #description>
        <n-space>
          <n-tag size="large" :bordered="false" type="primary">
            Lv {{ info.level }}
          </n-tag>
          <n-tag size="large" v-if="info.level == 10"> 管理员 </n-tag>
        </n-space>
        <div class="saying">{{ info.saying }}</div>
      </template>
    </n-thing>

		<!--统计数据-->
    <n-grid>
      <n-gi class="static" :span="6">
        <n-statistic label="文章" :value="0" />
      </n-gi>
      <n-gi class="static" :span="6">
        <n-statistic label="草稿" :value="0" />
      </n-gi>
      <n-gi class="static" :span="6">
        <n-statistic label="粉丝" :value="0" />
      </n-gi>
      <n-gi class="static" :span="6">
        <n-statistic label="关注" :value="0" />
      </n-gi>
    </n-grid>
  </div>
</template>

<script>
import { UserInfo } from "@/Api"
import User from "@vicons/carbon/User"
import { useMessage } from "naive-ui"

export default {
  data() {
    return {
      info: [],
    }
  },
  setup() {
    const message = useMessage()
    return { message }
  },
  async mounted() {
    const info = await UserInfo()
    if (info.data.code !== 500) {
      this.info = info.data.data
    } else {
      this.message.error(info.data.message)
      localStorage.removeItem('token')
      this.$router.push('/')
    }
  },
  components: { User },
}
</script>
