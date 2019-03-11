<template>
    <div id="sidebar-wrapper">
        <SearchInput v-model.lazy="searchValue" :searching="searching"/>

        <div v-for="chat in filteredChats">{{ chat.name }}</div>
    </div>
</template>

<script>

    import { mapState, mapActions } from 'vuex';
    import SearchInput from './partials/SearchInput.vue';
    import debounce from '@utils/debounce.js';

    export default {
        name: 'Sidebar',
        components: { 
            SearchInput
        },
        data(){
            return {
                searchValue: null,
                filteredChats: []
            }
        },
        computed: {
            localComputed(){ /* ... */ },
            ...mapState({
                searching: state => state.App.searching,
                localChats: state => state.App.chats          
            })
        },
        methods: {
            ...mapActions('App', ['SEARCH']),
            searchChats: debounce(function(context, val){
                this['SEARCH'](val).then(res => {
                    console.log(res);
                });
            }, 300),
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
