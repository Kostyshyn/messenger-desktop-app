<template>
	<div>
		<h3>Register</h3>
		<input type="text" v-model="username" placeholder="Username">
		<input type="email" v-model="email" placeholder="Email">
		<input type="password" v-model="password" placeholder="Password">
		<button @click="register">Register</button>
		<ul v-if="errors.length">
			<li v-for="e in errors">{{ e.msg }}</li>
		</ul>
	</div>
</template>

<script>

	import AuthServices from '@/services/auth'

	export default {
		name: 'Register',
		components: {  },
		data(){
			return {
				username: null,
				email: null,
				password: null,
				errors: []
			}
		},
		methods: {
			register(){
				this.errors = [];
				AuthServices.register(this, {
					username: this.username,
					email: this.email,
					password: this.password
				});
			}
		}
	}
</script>

<style>



</style>
