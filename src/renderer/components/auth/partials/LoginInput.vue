<template>
	<div class="login-input">
		<input 
			class="input" 
			:class="{ error: validationError }"
			type="text" 
			@input="updateValue($event.target.value)"
			v-model="value"
			placeholder="Username"
		/>
		<transition name="fade-validation">
			<ul class="validation-errors" v-if="validationError">
				<li v-for="e in errors">{{ e.msg }}</li>
			</ul>	
		</transition>
	</div>
</template>

<script>

	import AuthInputMixin from '../mixins/AuthInputMixin.js';

	export default {
		name: 'LoginInput',
		props: {},
		data(){
			return {}
		},
		computed: {},
		methods: {},
		mixins: [ AuthInputMixin ]
	}

</script>

<style>

	.login-input {
		margin-top: 20px;
	}

</style>
