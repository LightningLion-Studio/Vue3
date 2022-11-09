<template>
  <n-grid class="app-gird" x-gap="12" y-gap="12" :cols="2">
    <n-gi>
      <div class="item" @click="to('/apps/bilibili')">
        <img src="/Assets/bilibili.png" />
        <div class="right">
          <div class="title">腕上B站</div>
          <div class="desc">For Apple Watch</div>
        </div>
      </div>
    </n-gi>
    <n-gi>
      <div class="item">
        <img src="/Assets/new.png" />
        <div class="right">
          <div class="title">腕上RSS</div>
          <div class="desc">For Apple Watch</div>
        </div>
      </div>
    </n-gi>
    <n-gi>
      <div class="item">
        <img src="/Assets/book.png" />
        <div class="right">
          <div class="title">腕上小说</div>
          <div class="desc">For Apple Watch</div>
        </div>
      </div>
    </n-gi>
    <n-gi>
      <div class="item">
        <img src="/Assets/music.jpeg" />
        <div class="right">
          <div class="title">腕上音乐</div>
          <div class="desc">For Apple Watch</div>
        </div>
      </div>
    </n-gi>
  </n-grid>
</template>

<script>
export default {
  methods: {
    to(e) {
      this.$router.push(e)
    }
  }
}
</script>

<style lang="less" scoped>
.app-gird img {
  width: 30%;
  height: 100%;
  border-radius: var(--radius);
}
.item {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  .right {
    width: 70%;
    color: #fff;
    margin-left: 10px;
  }
}
</style>
