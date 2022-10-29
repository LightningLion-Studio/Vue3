<template>
  <n-carousel class="container">
    <img class="carousel-img" src="/Assets/swiper.jpeg" />
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
    />
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
    />
  </n-carousel>
</template>

<style lang="less" scoped>
.carousel-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.container {
  border-radius: var(--radius);
}
</style>
