<template>
	<div class="single">
		<Header>帖子详情</Header>
		<div class="container padding">
			<n-h2 prefix="bar" align-text class="title">{{ title }}</n-h2>
			<md-editor v-model="text" theme="dark" preview-only />
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { GetSingleTopic } from "../../Api"
import Header from "../../Parts/Header.vue"
import MdEditor from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'
import { useRoute } from "vue-router"
const route = useRoute()

const title = ref('')
const text = ref('')

onMounted(async () => {
	const request = await GetSingleTopic(route.params.id)
	title.value = request.data.data.title
	text.value = request.data.data.data
})
</script>

<style lang="less" scoped>
.container {
	padding-top: 50px;
}
.title {
	margin: 0!important;
}
</style>
