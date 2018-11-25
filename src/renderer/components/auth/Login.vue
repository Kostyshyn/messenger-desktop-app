<template>
	<div>
		<h3>Login</h3>
		<input type="text" v-model="username" placeholder="Username">
		<input type="password" v-model="password" placeholder="Password">
		<button @click="login">Login</button>
		<ul v-if="errors.length">
			<li v-for="e in errors">{{ e.msg }}</li>
		</ul>
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

<style>



</style>
