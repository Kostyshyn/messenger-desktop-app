<template>
    <div id="sidebar-wrapper">
        <SearchInput :searching="searching"/>
        <transition name="fade" mode="out-in">
            <ChatsList v-if="filteredChats.length > 0" :chats="filteredChats"/>
        </transition>
    </div>
</template>

<script>

    import { mapState, mapActions } from 'vuex';
    import debounce from '@utils/debounce.js';
    import SearchInput from './partials/SearchInput.vue';
    import ChatsList from './partials/ChatsList.vue';

    export default {
        name: 'Sidebar',
        components: { 
            SearchInput,
            ChatsList
        },
        data(){
            return {
                
            }
        },
        computed: {
            filteredChats(){
                return this.localChats.filter(chat => chat.name.toLowerCase().includes(this.searchString.toLowerCase()));
            },
            ...mapState({
                searchString: state => state.App.searchString,
                searching: state => state.App.searching,
                localChats: state => state.App.chats          
            })
        },
        methods: {
            ...mapActions('App', [
                    'SEARCH',
                    'GET_CHATS'
                ]),
            searchChats: debounce(function(context, val){
                this['SEARCH'](val).then(res => {
                    console.log(res);
                });
            }, 200),
        },
        watch: {
            searchString(newValue, oldValue){
                if (!!newValue && !this.filteredChats.length){
                    
                    this.searchChats(this, newValue);
                }
            }
        },
        created(){
            this['GET_CHATS']();
        }
    }
    
</script>

<style lang="scss">

</style>
