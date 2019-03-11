<template>
	<div class="search-input">

		<span class="icon-search" :class="{ active: focus }">
			<!-- <transition name="fade" mode="out-in"> -->
				<FontAwesomeIcon icon="search" v-if="!searching" key="search"/>
				<FontAwesomeIcon icon="spinner" v-if="searching" key="spinner" spin/>
			<!-- </transition> -->
		</span>
		<input 
			class="input" 
			type="text" 
			@input="updateValue($event.target.value)"
			@focus="focus = true"
			@blur="focus = false"
			placeholder=""
		/>
	</div>

</template>

<script>

	export default {
		name: 'SearchInput',
		props: {
			searching: {
				type: Boolean,
				default(){ return false }
			}
		},
		data(){
			return {
				focus: false
			}
		},
		computed: {  },
		methods: {
			updateValue(val){
				this.$emit('input', val.trim());
			}
		}
	}

</script>

<style lang="scss">

</style>
