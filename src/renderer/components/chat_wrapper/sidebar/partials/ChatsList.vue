<template>
    <div id="chats-list">
        <ChatPreview v-for="chat in chats" :chat="chat" :key="chat.id" :active="chat.id == activeChat"/>
    </div>
</template>

<script>

    import { mapState, mapActions } from 'vuex';
    import ChatPreview from './ChatPreview.vue';

    export default {
        name: 'ChatsList',
        props: {
            chats: {
                type: Array,
                default(){ return [] }
            }
        },
        components: {
            ChatPreview
        },
        data(){
            return {

            }
        },
        computed: {
            localComputed(){ /* ... */ },
            ...mapState({
                activeChat: state => state.App.activeChat,
            })
        },
        methods: {

        },
        watch: {

        },
        created(){

        }
    }
    
</script>

<style lang="scss">

</style>
