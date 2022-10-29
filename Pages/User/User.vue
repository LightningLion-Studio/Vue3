<template>
  <div class="user">
    <div class="padding header">
      <n-page-header :title="info.name" @back="$router.go(-1)" :subtitle="info.saying">
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

export default {
  data() {
    return {
      info: {
        name: "",
        saying: "",
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
  components: { User },
}
</script>
