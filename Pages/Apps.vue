<template>
  <div id="apps" class="apps">
    <div class="bilibili" v-if="type === 'bilibili'">
      <img class="logo" src="/Assets/bilibili.png" />
      <n-h1 class="title">{{ data.title }}</n-h1>
      <n-space justify="center">
      <a :href="data.link" target="_blank">
        <n-button type="primary" round size="large">
          立即下载
        </n-button>
      </a>
      <n-button secondary round size="large">
        激活App
      </n-button>
      </n-space>
    </div>
  </div>
</template>

<script>
import { GetApp } from "@/Api"

export default {
  data() {
    return {
      data: {},
      type: ""
    }
  },
  async mounted() {
    if (this.$route.params.e == 'bilibili') {
      this.type = "bilibili"
      document.title = "腕上B站"
      const data = await GetApp('bilibili')
      this.data = data.data.data
    }
  }
}
</script>

<style lang="less" scoped>
a {
  text-decoration: none;
}
#apps {
  color: #fff;
}
.bilibili {
  text-align: center;
  .logo {
    width: 40%;
    height: 100%;
    margin-top: 60px;
  }
}
</style>
