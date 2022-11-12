<template>
  <div id="apps" class="apps">
    <div class="padding bilibili" v-if="type === 'bilibili'">
      <div class="logo-container">
        <img class="logo" src="/Assets/bilibili.png" />
      </div>
      <n-h1 class="title">
        {{ data.title }}
      </n-h1>
      <n-space justify="center">
        <a :href="data.link" target="_blank">
          <n-button type="primary" round size="large"> 立即下载 </n-button>
        </a>
        <n-button @click="activitive()" secondary round size="large">
          激活App
        </n-button>
      </n-space>
      
      <n-modal v-model:show="showModal">
        <n-card
          style="width: 600px"
          :bordered="false"
          size="huge"
          role="dialog"
          aria-modal="true"
        >
        <n-space justify="center">
          <n-spin size="large" />
          <div class="tip">正在跳转到App，请确保您已经成功安装腕上RSS...</div>
          <n-button @click="re" ghost quaternary>
            如果没有跳转请点击这里
          </n-button>
          </n-space>
        </n-card>
      </n-modal>

      <n-h2> 激活方法 </n-h2>
      <n-collapse :default-expanded-names="1" accordion>
        <n-collapse-item
          v-for="(parent, i) in method1"
          :key="i"
          :title="'方法' + (i + 1)"
          :name="i + 1"
        >
          <n-steps vertical>
            <n-step
              v-for="(item, index) in parent"
              :key="index"
              :title="item.title"
              :description="item.text"
            >
              <template #icon>
                <n-icon class="step-icon">
                  {{ index + 1 }}
                </n-icon>
              </template>
            </n-step>
          </n-steps>
        </n-collapse-item>
      </n-collapse>
    </div>
  </div>
</template>

<script>
import { GetApp } from "@/Api"
import { openBili, copyToClip } from "../Utils/Active"
const isIos = /ipad|iPhone|Mac/i.test(window.navigator.userAgent)

export default {
  data() {
    return {
      data: {
        title: "加载中",
      },
      showModal: false,
      method1: [],
      type: "加载中",
    }
  },
  methods: {
    re() {
      copyToClip(() => {
        openBili("watchrss://")
      })
    },
    async activitive() {
      const redict = () => {
        this.showModal = true
        openBili("watchrss://")
      }
      copyToClip(() => {
        if (!isIos) {
          this.$dialog.warning({
            title: "警告",
            content: "检测到似乎是IOS设，可能会无法激活",
            positiveText: "确定",
            negativeText: "取消",
            onPositiveClick: redict(),
          })
        } else {
          redict()
        }
      })
    },
  },
  async mounted() {
    if (this.$route.params.e == "bilibili") {
      this.type = "bilibili"
      document.title = "腕上B站"
      const data = await GetApp("bilibili")
      this.data = data.data.data
      this.method1 = data.data.data.methods
    }
  },
}
</script>

<style lang="less" scoped>
a {
  text-decoration: none;
}
#apps {
  color: #fff;
}
.tip {
  text-align: center;
}
.bilibili {
  .title {
    text-align: center;
  }
  .logo-container {
    text-align: center;
  }
  .logo {
    width: 40%;
    height: 100%;
    margin-top: 60px;
    text-align: center;
  }
  .step-icon {
    font-style: normal;
  }
}
</style>
