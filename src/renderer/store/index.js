import Vue from 'vue'
import Vuex from 'vuex'

import { createPersistedState, createSharedMutations } from 'vuex-electron'

import User from './modules/User';

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		BASE_URL: process.env.VUE_APP_BASE_URL
	},
  	modules: {
  		User
  	},
  	plugins: [
    	createPersistedState(),
    	createSharedMutations()
  	],
  	strict: process.env.NODE_ENV !== 'production'
})
