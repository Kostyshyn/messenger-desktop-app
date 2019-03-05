<template>
	<span @click="open" class="link">
		<slot></slot>	
	</span>
</template>

<script>

	export default {
		name: 'ExternalLink',
		props: {
			href: {
				type: String,
				default: '/'
			}
		},
		data(){
			return {}
		},
		computed: {},
		methods: {
			open(){
				this.$electron.shell.openExternal(this.href);
			}
		},
	}

</script>

<style>

</style>
