<template>
  <div class="home-post">
    <n-skeleton v-if="load" text :repeat="4" />
    <Carder
      v-for="(item, index) in list"
      :key="index"
      :title="item.title"
      :cover="item.poster"
      :type="item.type"
			@click="$router.push('/post/' + item.id)"
    >
      {{ item.data }}
    </Carder>
  </div>
</template>

<script lang="ts">
import { GetPost } from "@/Api"
import Carder from "./Post/Carder.vue"

export default {
  components: { Carder },
  data() {
    return {
      list: [],
      load: true,
      show: false,
    }
  },
  async mounted() {
    const list: object = await GetPost()

		// 数据滤子
    for (let i = 0; i < list.data.data.length; i++) {
			// 去除空格
      list.data.data[i].data = list.data.data[i].data.replace(/\s*/g, "")
    	// 筛选封面是否有图片
			if (list.data.data[i].poster) {
				list.data.data[i].type = 'poster'
			} else {
				list.data.data[i].type = ''
			}
		}

		// 赋值给Vue
    this.list = list.data.data
    this.load = false
    this.show = true
  },
  methods: {
    go(e) {
      this.$router.push("/post/" + e)
    },
  },
}
</script>

<style lang="less" scoped>
.home-post .n-list {
  border-radius: var(--radius);
}
</style>
