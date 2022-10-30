<template>
  <div class="user" id="user">
    <BottomBar on="2" />
    <div class="padding header">
      <div class="option padding">
        <n-icon size="25">
          <MoreHorizontal16Regular/>
        </n-icon>
      </div>
      <n-thing
        :content-indented="true"
        :title="info.name"
        :subtitle="info.saying"
        >￼
        <template #description>
          <n-space>
            <n-tag size="large" :bordered="false" type="primary">
              Lv {{ info.level }}
            </n-tag>
            <n-tag size="large" v-if="info.level == 10"> 管理员 </n-tag>
          </n-space>
          <div class="saying">{{ info.saying }}</div>
        </template>

        <template #avatar>
          <n-avatar :size="80" round>
            <n-icon size="50">
              <User />
            </n-icon>
          </n-avatar>
        </template>
      </n-thing>

      <n-grid>
        <n-gi class="static" :span="6">
          <n-statistic label="文章" :value="99" />
        </n-gi>
        <n-gi class="static" :span="6">
          <n-statistic label="草稿" :value="99" />
        </n-gi>
        <n-gi class="static" :span="6">
          <n-statistic label="粉丝" :value="99" />
        </n-gi>
        <n-gi class="static" :span="6">
          <n-statistic label="关注" :value="99" />
        </n-gi>
      </n-grid>
    </div>
  </div>
</template>

<script>
import { UserInfo } from "@/Api"
import { User } from "@vicons/carbon"
import { MoreHorizontal16Regular } from "@vicons/fluent"
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
  components: { User, MoreHorizontal16Regular, BottomBar },
}
</script>

<style lang="less">
@font: 20px;
#user {
  .saying {
    margin-top: 8px;
    font-size: @font;
  }
  .n-thing .n-thing-main .n-thing-header .n-thing-header__title {
    font-size: @font;
  }
  .static {
    padding-left: 10px;
  }
  .option {
    position: absolute;
    top: 0;
    right: 0;
    color: #fff;
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
