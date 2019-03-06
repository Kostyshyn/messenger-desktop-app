export default {
    SET_USER(state, user){
        state.user = user;
    },
    SET_AUTH_TOKEN(state, token){
        state.auth_token = token;
    },
    DELETE_USER(state){
        state.user = null;
    },
    DELETE_AUTH_TOKEN(state){
        state.auth_token = null;
    }
};