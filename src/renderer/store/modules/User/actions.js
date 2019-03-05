export default {
    setUser({ state, commit, rootState }, user){
        commit('SET_USER', user);
    }
};