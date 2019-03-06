<template>
	<div id="app">
		<MainFrame />
	</div>
</template>

<script>

	import MainFrame from '@/components/MainFrame'

	export default {
		name: 'messenger-desktop-app',
		components: { MainFrame },
		methods: {

		},
		created(){
	
		}
	}
</script>

<style lang="scss">
	@import './assets/scss/app';
</style>
