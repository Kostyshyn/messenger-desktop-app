<template>
	<div class="password-input">
		<input 
			class="input" 
			:class="{ error: validationError }"
			type="password" 
			@input="updateValue($event.target.value)"
			v-model="value"
			placeholder="Password"
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
		name: 'PasswordInput',
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

	.password-input {
		margin-top: 20px;
	}

</style>
