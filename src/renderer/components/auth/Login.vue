<template>
	<div id="login-page">

		<div class="login-form">
			<h1 class="heading h-1">Login</h1>

			<LoginInput v-model="username" :errors="getErrors('username')"/>
			<PasswordInput v-model="password" :errors="getErrors('password')"/>

			<div class="d-flex pos-xc">
				<button @click="login" class="button primary ripple submit">Login</button>
			</div>		

		</div>

	</div>
</template>

<script>

	import LoginInput from './partials/LoginInput.vue';
	import PasswordInput from './partials/PasswordInput.vue';
	import AuthServices from '@/services/auth';

	export default {
		name: 'Login',
		components: { 
			LoginInput,
			PasswordInput
		},
		data(){
			return {
				username: null,
				password: null,
				errors: []
			}
		},
		computed: {},
		methods: {
			login(){
				this.errors = [];
				AuthServices.login(this, {
					username: this.username,
					password: this.password
				});
			},
			getErrors(param){
				if (this.errors.length){
					return this.errors.filter(e => e.param == param);
				}
			}
		},
		watch: {},
		created(){

		}
	}
</script>

<style lang="scss">
	

</style>
