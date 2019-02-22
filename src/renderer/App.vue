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
			this.$store.dispatch('User/setUser', null);
		}
	}
</script>

<style lang="scss">
	@import './assets/scss/app';
</style>
