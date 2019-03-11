import actions from './actions.js';
import mutations from './mutations.js';
import getters from './getters.js';

const state = {
	searching: false,
	chats: []
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
