<template>
	<div id="register-page">

		<div class="register-form">
			<h1 class="heading h-1">Register</h1>

			<LoginInput v-model="username" :errors="getErrors('username')"/>
			<EmailInput v-model="email" :errors="getErrors('email')"/>
			<PasswordInput v-model="password" :errors="getErrors('password')"/>

			<div class="d-flex pos-xc">
				<button @click="register" class="button primary ripple submit">Register</button>
			</div>		

			<div class="to-login">
				Already have an account?<router-link class="link" :to="{ name: 'Login' }">Sign in</router-link>
			</div>		

		</div>

	</div>
</template>

<script>

	import LoginInput from './partials/LoginInput.vue';
	import EmailInput from './partials/EmailInput.vue';
	import PasswordInput from './partials/PasswordInput.vue';
	import { mapActions } from 'vuex';

	export default {
		name: 'Register',
		components: { 
			LoginInput,
			EmailInput,
			PasswordInput
		},
		data(){
			return {
				username: null,
				email: null,
				password: null,
				errors: []
			}
		},
		computed: {},
		methods: {
			...mapActions('User', ['REGISTER']),
			register(){
				this.errors = [];
				this['REGISTER']({
					username: this.username,
					email: this.email,
					password: this.password
				}).then(user => {

					console.log(user);

				}).catch(errors => {
					this.errors = errors;
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
