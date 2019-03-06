import { Api } from '@services/api.js';
import { getConnection } from '@socket'
import router from '@router';

export default {
    ['LOGIN']({ state, commit, dispatch, rootState, getters }, credentials){
    	return new Promise((resolve, reject) => {
    		if (!getters.getUser){
		    	Api.post('login', credentials).then(res => {
		    		let { token, user } = res.data;
		    		const socket = getConnection(token);
		    		commit('SET_USER', user);
		    		commit('SET_AUTH_TOKEN', token);
		    		router.push({ name: 'ChatWrapper' });
		    		resolve(user);
		    	}).catch(err => {
		    		let { errors } = err.response.data;
		    		if (errors){
		    			reject(errors);
		    		}
		    	});
    		} else {
    			resolve(getters.getUser);
    		}
    	});
    },
    ['REGISTER']({ state, commit, dispatch, rootState, getters }, credentials){
    	return new Promise((resolve, reject) => {
    		if (!getters.getUser){
		    	Api.post('register', credentials).then(res => {
		    		let { token, user } = res.data;
		    		const socket = getConnection(token);
		    		commit('SET_USER', user);
		    		commit('SET_AUTH_TOKEN', token);
		    		router.push({ name: 'ChatWrapper' })
		    		resolve(user);
		    	}).catch(err => {
		    		let { errors } = err.response.data;
		    		if (errors){
		    			reject(errors);
		    		}
		    	});
    		} else {
    			resolve(getters.getUser);
    		}
    	});
    },
    ['LOGOUT']({ state, commit, dispatch, rootState, getters }){
    	if (getters.getUser){
		   	commit('DELETE_USER');
		    commit('DELETE_AUTH_TOKEN');    
		    router.push({ name: 'Login' })		
    	}
    }
};