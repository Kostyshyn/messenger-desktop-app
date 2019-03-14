export default {
    SET_CHATS(state, chats){
        state.chats = chats;
    },
    SET_SEARCH_STRING(state, string){
    	state.searchString = string;
    },
    SET_SEARCHING(state, searching){
        state.searching = searching;
    },
    SET_ACTIVE_CHAT(state, id){
        state.activeChat = id;
    }
};