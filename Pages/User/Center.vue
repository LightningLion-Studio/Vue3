<template>
  <div id="user">
    <!--浮层组件-->
    <BottomBar :on="2" />
    <n-drawer height="auto" :show="drawer" placement="bottom">
      <DrawerContent />
      <n-button @click="drawer = false" size="large" :bordered="false" block>
        取消
      </n-button>
    </n-drawer>

    <!--头部组件-->
    <div class="option padding">
      <n-icon size="25" @click="drawer = true">
        <MoreHorizontal16Regular />
      </n-icon>
    </div>
    <Header />
  </div>
</template>

<script>
import { UserInfo } from "@/Api"
import BottomBar from "@/Parts/BottomBar.vue"
import DrawerContent from "@/Parts/User/Center/UserDrawer.vue"
import Header from "@/Parts/User/Center/Header.vue"
import { MoreHorizontal16Regular } from "@vicons/fluent"

export default {
  data() {
    return {
      drawer: false,
    }
  },
  components: { BottomBar, DrawerContent, Header, MoreHorizontal16Regular },
}
</script>

<style lang="less">
@font: 25px;
#user {
  .padding.header {
    padding: 6%;
  }
  .saying {
    margin-top: 8px;
    font-size: @font - 6px;
  }
  .n-thing {
    margin-bottom: 10px;
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
