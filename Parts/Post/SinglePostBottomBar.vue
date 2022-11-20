<template>
  <div id="bottom-bar">
    <div class="left">
      <n-icon size="35" @click="$router.go(-1)"><KeyboardArrowLeftRound /></n-icon>
    </div>
    <div class="right">
      <n-icon size="25">
				<Heart v-if="isLike" @click="like" />
				<HeartOutline v-if="!isLike" @click="like" />
			</n-icon>
      <n-input :disabled="true" size="large" round placeholder="评论区暂未开放">
        <template #prefix>
          <n-icon><CommentEdit20Regular /></n-icon>
        </template>
      </n-input>
    </div>
  </div>
</template>

<script setup lang="ts">
import KeyboardArrowLeftRound from "@vicons/material/KeyboardArrowLeftRound"
import CommentEdit20Regular from "@vicons/fluent/CommentEdit20Regular"
import Heart from "@vicons/ionicons5/Heart"
import HeartOutline from "@vicons/ionicons5/HeartOutline"
import {ref} from "vue";

/**
 * 点赞逻辑
 *
 * @author Zero <1203970284@qq.com>
 * @since 2022
 */
const isLike = ref(false)
const getLike = () => {

}
const like = () => {

}
</script>

<style lang="less" scoped>
#bottom-bar {
  background: var(--background);
  color: var(--color);
  border-top: var(--border);
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
	background: #24242401;
	backdrop-filter: blur(70px) brightness(0.4);
	-webkit-backdrop-filter: blur(70px) brightness(0.4);
	z-index: 999;
  .left,
  .right {
    align-items: center;
    display: flex;
    margin: 5px;
  }
  .right {
    width: 70%;
		gap: 14px;
  }
}
</style>
