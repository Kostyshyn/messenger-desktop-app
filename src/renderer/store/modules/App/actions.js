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
    },
    ['GET_CHATS']({ state, commit, dispatch, rootState, getters }){
        return new Promise((resolve, reject) => {

            commit('SET_SEARCH_STRING', '');
            commit('SET_ACTIVE_CHAT', null);
            commit('SET_CHATS', []);

            let chats =  [               
                {
                    id: 1,
                    img: 'https://www.elastic.co/assets/bltada7771f270d08f6/enhanced-buzz-1492-1379411828-15.jpg',
                    name: 'root1',
                    last_msg: 'Hello world',
                    unread_msg: 0,
                    date: '12:33, 12.03'
                },
                {
                    id: 2,
                    img: 'https://cdn-images-1.medium.com/max/1600/1*wqYF-8Dmh7LhtLkKfERc3Q.png',
                    name: 'NewUser',
                    last_msg: 'В JavaScript існує всього шість неправдивих значень',
                    unread_msg: 1359,
                    date: '12:33, 12.03'
                },
                {
                    id: 3,
                    img: 'https://www.uic.mx/posgrados/files/2018/05/default-user.png',
                    name: 'user23',
                    last_msg: 'Some text sample',
                    unread_msg: 18500,
                    date: '12:13, 12.03'
                }           
            ];

            commit('SET_SEARCHING', true);

            setTimeout(() => {
                commit('SET_SEARCHING', false);
                commit('SET_CHATS', chats);
            }, 500);

            // Api.get('search', value).then(res => {

            //  resolve();
            // }).catch(err => {
            //  let { errors } = err.response.data;
            //  if (errors){
            //      reject(errors);
            //  }
            // });
            
        });
    },
    ['SET_ACTIVE_CHAT']({ state, commit, dispatch }, id){
        commit('SET_ACTIVE_CHAT', id);
    },
    ['SET_SEARCH_STRING']({ state, commit, dispatch }, string){
        commit('SET_SEARCH_STRING', string);
    }
};