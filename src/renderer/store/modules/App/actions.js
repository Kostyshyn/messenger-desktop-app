import { Api } from '@services/api.js';

export default {
    ['SEARCH']({ state, commit, dispatch, rootState, getters }, value){
    	return new Promise((resolve, reject) => {

    		commit('SET_SEARCHING', true);

    		setTimeout(() => {
    			commit('SET_SEARCHING', false);
    			resolve(`You searched for: ${ value }`);
    		}, 400);

    		// Api.post('search', value).then(res => {

    		// 	resolve(data);
    		// }).catch(err => {
    		// 	let { errors } = err.response.data;
    		// 	if (errors){
    		// 		reject(errors);
    		// 	}
    		// });
    		
    	});
    }
};