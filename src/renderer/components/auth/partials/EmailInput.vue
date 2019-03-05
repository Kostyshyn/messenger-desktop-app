<template>
	<div class="email-input">
		<input 
			class="input" 
			:class="{ error: validationError }"
			type="email" 
			@input="updateValue($event.target.value)"
			v-model="value"
			placeholder="Email"
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
		name: 'EmailInput',
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

	.email-input {
		margin-top: 20px;
	}

</style>
