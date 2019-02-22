import { Api } from '../api.js'
import { getConnection } from '@socket'

export default {
	login(context, credentials){
		if (!context.$store.getters['User/getUser']){
			Api.post('login', credentials).then(res => {
				context.$store.dispatch('User/setUser', res.data.user);
				const socket = getConnection(res.data.token);
				console.log(res.data.user, socket)
			}).catch(err => {
				console.log(err.response.data);
				context.errors = err.response.data.errors;
			});
		} else {
			alert('already authenticated');
		};


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