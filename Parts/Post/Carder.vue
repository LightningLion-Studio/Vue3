<template>
  <n-card :class="classes" class="carder" :bordered="false">
    <template #cover>
      <img :src="cover" />
    </template>
    <n-h2 class="title">
      {{ title }}
    </n-h2>
    <div class="description">
      <slot />
    </div>
  </n-card>
</template>

<script lang="ts" setup>
import { defineProps, onMounted, ref, onUpdated } from "vue"
const props = defineProps({
  title: String,
  cover: String,
  type: String,
})
const classes = ref({})
const func = () => {
	if (props.type == "poster") {
		classes.value.poster = true
	} else {
		classes.value.poster = false
	}
}
onMounted(func)
onUpdated(func)
</script>

<style lang="less">
.carder {
	border-radius: 18px;
  .description {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
}
.carder.poster {
  .n-card__content {
    position: absolute;
    bottom: 0;
  }
	.n-card-cover img {
		filter: brightness(0.5);
		border-radius: 18px;
	}
}
</style>
