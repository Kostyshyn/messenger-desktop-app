import { Api } from '../api.js'

export default {
	login(context, credentials){
		Api.post('login', credentials).then(res => {
			context.$store.dispatch('User/setUser', res.data.user);
			console.log(res.data.user)
		}).catch(err => {
			console.log(err.response.data);
			context.errors = err.response.data.errors;
		});

	},
	register(context, credentials){
		Api.post('register', credentials).then(res => {
			context.$store.dispatch('User/setUser', res.data.user);
			console.log(res.data.user)
		}).catch(err => {
			console.log(err.response.data);
			context.errors = err.response.data.errors;
		});
	},
	logout(context){

	}
}