<template>
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
          <n-button @click="re" text type="primary">
            如果没有跳转请点击这里
          </n-button>
        </n-space>
      </n-card>
    </n-modal>

    <n-h1>激活方法</n-h1>
    <n-collapse :default-expanded-names="[1]" accordion>
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

		<n-h1 style="margin-bottom: 0">来见见<br>手表上的腕上B站</n-h1>
		<n-text>Introduce the Best video software on WatchOS</n-text>

		<n-space class="introduction" vertical :size="25">
			<n-card
				style="border-radius: 18px"
				:bordered="false"
				content-style="border-radius: 18px;background: #18181c;background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);"
			>
				<n-space vertical>
					<n-icon size="60">
						<PlayCircle20Filled />
					</n-icon>
					<n-h1 style="margin-bottom: 70px">
						可能是目前<br />Apple Wtach上的最佳的视频播放器
					</n-h1>
					<n-text>搜索，点赞，评论，一应俱全。</n-text>
				</n-space>
			</n-card>
			<n-card
				style="border-radius: 18px"
				:bordered="false"
				content-style="border-radius: 18px;background: #18181c;background: rgb(173 120 248);"
			>
				<n-space vertical>
					<n-icon size="60">
						<Video20Regular />
					</n-icon>
					<n-h1 style="margin-bottom: 70px">直接在线搜索视频</n-h1>
					<n-text>B站，抖音，你想刷的都有。</n-text>
				</n-space>
			</n-card>
			<n-card
				style="border-radius: 18px"
				:bordered="false"
				content-style="border-radius: 18px;background: #18181c;background-image: linear-gradient(225deg, rgb(173 120 248) 0%, #48c6ef 100%);"
			>
				<n-space vertical>
					<n-icon size="60">
						<CloudDownload />
					</n-icon>
					<n-h1 style="margin-bottom: 70px">无边界的观看体验</n-h1>
					<n-text>
						点击直接播放，还可以下载视频到本地，<br />
						<strong style="font-size: 18px">随时随地，离线观看。</strong>
					</n-text>
				</n-space>
			</n-card>
			<n-card
				style="border-radius: 18px"
				:bordered="false"
				content-style="border-radius: 18px;background: #18181c;background-image: linear-gradient(to top, #6a85b6 0%, #bac8e0 100%);"
			>
				<n-space vertical>
					<n-icon size="60">
						<SoundWaveCircle24Regular />
					</n-icon>
					<n-h1 style="margin-bottom: 70px">支持外放声音和佩戴耳机</n-h1>
					<n-text>直接外放，嗨起来。</n-text>
				</n-space>
			</n-card>
		</n-space>
  </div>
</template>

<script setup lang="ts">
import PlayCircle20Filled from "@vicons/fluent/PlayCircle20Filled"
import CloudDownload from "@vicons/carbon/CloudDownload"
import Video20Regular from "@vicons/fluent/Video20Regular"
import SoundWaveCircle24Regular from "@vicons/fluent/SoundWaveCircle24Regular"
</script>

<script lang="ts">
import { GetApp } from "@/Api"
import { openBili, copyToClip } from "@/Utils/Active"
const isIos: boolean = /ipad|iPhone/i.test(window.navigator.userAgent)

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
    // 跳转到腕B
    re() {
      copyToClip(() => {
        try {
          openBili("watchrss://")
        } catch (err) {
          this.$message.error("打开失败")
        }
      })
    },
    // 激活
    async activitive() {
      const redict: Function = () => {
        this.showModal = true
        openBili("watchrss://")
      }
      copyToClip(() => {
        if (!isIos) {
          this.$dialog.warning({
            title: "警告",
            content: "检测到似乎是非iPhone，可能会无法激活",
            positiveText: "确定",
            negativeText: "取消",
            onPositiveClick: redict,
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
    border-radius: 18%;
  }
  .step-icon {
    font-style: normal;
  }
}
.introduction {
  margin-top: 25px;
}
</style>
