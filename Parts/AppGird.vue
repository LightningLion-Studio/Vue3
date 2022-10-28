<template>
  <n-grid class="app-gird" x-gap="12" y-gap="12" :cols="2">
    <n-gi>
      <div class="item">
        <img src="/bilibili.PNG" />
        <div class="right">
          <div class="title">腕上B站</div>
          <div class="desc">For Apple Watch</div>
        </div>
      </div>
    </n-gi>
    <n-gi>
      <div class="item">
        <img src="/new.png" />
        <div class="right">
          <div class="title">腕上RSS</div>
          <div class="desc">For Apple Watch</div>
        </div>
      </div>
    </n-gi>
    <n-gi>
      <div class="item">
        <img src="/book.png" />
        <div class="right">
          <div class="title">腕上小说</div>
          <div class="desc">For Apple Watch</div>
        </div>
      </div>
    </n-gi>
    <n-gi>
      <div class="item">
        <img src="/bilibili.PNG" />
        <div class="right">
          <div class="title">腕上音乐</div>
          <div class="desc">For Apple Watch</div>
        </div>
      </div>
    </n-gi>
  </n-grid>
</template>

<style lang="less" scoped>
.app-gird img {
  width: 30%;
  height: 100%;
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
