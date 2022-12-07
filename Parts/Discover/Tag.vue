<template>
	<div class="taglist">
		<n-scrollbar x-scrollable>
			<n-space>
		    <n-card v-for="(item,index) in data" :title="item.name" />
		  </n-space>
		</n-scrollbar>
	</div>
</template>

<script setup lang="ts">
import { GetTag } from "@/Api"
import { ref, onMounted } from "vue"

const data = ref([])
onMounted(async () => {
	const request = await GetTag(3)
  data.value = request.data.data
})

</script>