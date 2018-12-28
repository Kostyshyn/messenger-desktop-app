const state = {
  user: ''
}

const mutations = {
  SET_USER(state, user){
    state.user = user;
  }
  // INITIAL_STATE(state, payload){
  //   state.token = payload.token;
  //   state.socket = payload.socket;
  //   state.user = payload.user;
  //   state.isUserLoggedIn = true;
  // },
}

const actions = {
  setUser({ state, commit, rootState }, user) {
    commit('SET_USER', user)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
