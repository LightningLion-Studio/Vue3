<template>
  <div id="bar" class="bottom-bar">
    <div @click="go('/')" class="item">
      <n-icon size="24">
        <Home16Regular v-if="on !== 0" />
        <Home16Filled v-if="on === 0" />
      </n-icon>
      <div v-if="show" v-show="on == 0" class="text">今天</div>
    </div>
    <div @click="go('/discover')" class="item">
      <n-icon size="24">
        <Apps16Regular v-if="on !== 1" />
        <Apps16Filled v-if="on === 1" />
      </n-icon>
      <div v-if="show" v-show="on == 1" class="text">发现</div>
    </div>
    <div @click="go('/user')" class="item">
      <n-icon size="24">
        <UserAvatar />
      </n-icon>
      <div v-if="show" v-show="on == 2" class="text">我的</div>
    </div>
  </div>
</template>

<script>
import { Apps16Filled, Home16Filled, Home16Regular, Apps16Regular } from "@vicons/fluent"
import { UserAvatar } from "@vicons/carbon"
export default {
  props: ["on"],
  components: {
    Home16Regular,
    Apps16Regular,
    Apps16Filled,
    UserAvatar,
    Home16Filled,
  },
  data() {
    return {
      show: true
    }
  },
  methods: {
    go(url) {
      this.$router.push(url)
    }
  },
  mounted() {
    setTimeout(() => {
      this.show = false
      document.querySelector("#bar").classList.add('active')
    },3000)
  }
}
</script>

<style scoped lang="less">
.bottom-bar {
  position: fixed;
  display: flex;
  justify-content: space-around;
  bottom: 0;
  width: 100%;
  color: #fff;
  padding-top: 5px;
  padding-bottom: 5px;
  border-top: 1px solid rgba(255,255,255,0.06);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  .item {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    .text {
      font-size: 10px;
    }
  }
}
.active {
  padding-top: 15px;
  padding-bottom: 15px;
}
</style>
