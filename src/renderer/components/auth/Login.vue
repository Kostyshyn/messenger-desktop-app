<template>
	<div id="login-page">

		<div class="login-form">
			<h1 class="heading h-1">Login</h1>

			<LoginInput v-model="username" :errors="getErrors('username')"/>
			<PasswordInput v-model="password" :errors="getErrors('password')"/>

			<div class="d-flex pos-xc">
				<button @click="login" class="button primary ripple submit">Login</button>
			</div>

			<div class="to-register">
				No account?<router-link class="link" :to="{ name: 'Register' }">Create one</router-link>
			</div>		

		</div>

	</div>
</template>

<script>

	import LoginInput from './partials/LoginInput.vue';
	import PasswordInput from './partials/PasswordInput.vue';
	import { mapActions } from 'vuex';

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
			...mapActions('User', ['LOGIN']),
			login(){
				this.errors = [];
				this['LOGIN']({
					username: this.username,
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
