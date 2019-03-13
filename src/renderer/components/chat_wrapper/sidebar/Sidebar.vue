<template>
    <div id="sidebar-wrapper">
        <SearchInput v-model.lazy="searchValue" :searching="searching"/>
        <ChatsList :chats="filteredChats"/>
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
                searchValue: '',
                localChats: [
                    {
                        id: 1,
                        img: 'https://www.elastic.co/assets/bltada7771f270d08f6/enhanced-buzz-1492-1379411828-15.jpg',
                        name: 'root1',
                        last_msg: 'Hello world',
                        unread_msg: 835,
                        date: '12:33, 12.03'
                    },
                    {
                        id: 2,
                        img: 'https://cdn-images-1.medium.com/max/1600/1*wqYF-8Dmh7LhtLkKfERc3Q.png',
                        name: 'NewUser',
                        last_msg: 'В JavaScript існує всього шість неправдивих значень',
                        unread_msg: 0,
                        date: '12:33, 12.03'
                    },
                    {
                        id: 3,
                        img: 'https://www.uic.mx/posgrados/files/2018/05/default-user.png',
                        name: 'user23',
                        last_msg: 'Some text sample',
                        unread_msg: 6,
                        date: '12:13, 12.03'
                    }
                ]
            }
        },
        computed: {
            filteredChats(){
                return this.localChats.filter(chat => chat.name.toLowerCase().includes(this.searchValue.toLowerCase()));
            },
            ...mapState({
                searching: state => state.App.searching,
                // localChats: state => state.App.chats          
            })
        },
        methods: {
            ...mapActions('App', ['SEARCH']),
            searchChats: debounce(function(context, val){
                this['SEARCH'](val).then(res => {
                    console.log(res);
                });
            }, 200),
        },
        watch: {
            searchValue(newValue, oldValue){
                if (!!newValue && !this.filteredChats.length){
                    this.searchChats(this, newValue);
                }
            }
        },
        created(){

        }
    }
    
</script>

<style lang="scss">

</style>
