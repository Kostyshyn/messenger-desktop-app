<template>
	<div id="login-page">

		<div class="login-form">
			<h1 class="heading h-1">Login</h1>
			<input 
			class="input" 
			type="text" 
			v-model="username" 
			placeholder="Username">
			<input 
			class="input" 
			type="password" 
			v-model="password" 
			placeholder="Password">
			<button @click="login" class="button primary ripple">Login</button>
			<ul v-if="errors.length">
				<li v-for="e in errors">{{ e.msg }}</li>
			</ul>			
		</div>

	</div>
</template>

<script>

	import AuthServices from '@/services/auth'

	export default {
		name: 'Login',
		components: {  },
		data(){
			return {
				username: null,
				password: null,
				errors: []
			}
		},
		methods: {
			login(){
				this.errors = [];
				AuthServices.login(this, {
					username: this.username,
					password: this.password
				});
			}
		}
	}
</script>

<style lang="scss">
	
	.login-form {
		width: 300px;
		margin: 50px auto;
		.heading {
			margin-bottom: 20px;
		}
		.input {
			width: 100%;
			margin-bottom: 20px;
		}
	}

</style>
