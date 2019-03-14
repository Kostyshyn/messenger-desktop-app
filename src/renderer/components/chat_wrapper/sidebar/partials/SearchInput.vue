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
			@focus="focus = true"
			@blur="focus = false"
			v-model="value"
			placeholder=""
		/>
		<span class="icon-clear" :class="{ 'active': focus, 'filled': searchString.length }" @click="clear">
			<FontAwesomeIcon icon="times"/>
		</span>
	</div>

</template>

<script>

	import { mapState, mapActions } from 'vuex';

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
		computed: {
            ...mapState({
                searchString: state => state.App.searchString    
            }),
            value: {
            	get(){
            		return this.searchString;
            	},
            	set(val){
            		this['SET_SEARCH_STRING'](val.trim());
            	}
            }
		},
		methods: {
            ...mapActions('App', ['SET_SEARCH_STRING']),
			clear(){
				this.searchString.length ? this['SET_SEARCH_STRING']('') : true;
			}
		}
	}

</script>

<style lang="scss">

</style>
