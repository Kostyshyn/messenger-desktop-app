import Vue from 'vue'
import Vuex from 'vuex'

import { createPersistedState, createSharedMutations } from 'vuex-electron'

import modules from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
  modules,
  plugins: [
    createPersistedState(),
    createSharedMutations()
  ],
  state: {
  	user: 2
  },
  mutations: {
  	  SET_USER(state, user){
	    state.user = user;
	  }
  },
  actions: {
	  setUser({ state, commit }, user) {
	    console.log('user action', user)
	    commit('SET_USER', user)
	  }
  },
  strict: process.env.NODE_ENV !== 'production'
})
