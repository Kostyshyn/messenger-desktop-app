<template>
    <div id="chat" v-if="activeChat">
        <ChatHeader /> 
        <ChatHistory />    
        <ChatForm />
    </div>
</template>

<script>

    import { mapState } from 'vuex';
    import ChatHeader from './partials/ChatHeader.vue';
    import ChatHistory from './partials/ChatHistory.vue';
    import ChatForm from './partials/ChatForm.vue';

    export default {
        name: 'Chat',
        components: { 
            ChatHeader,
            ChatHistory,
            ChatForm
        },
        computed: {
            ...mapState({
                activeChat: state => state.App.activeChat,  
            })
        },
        methods: {

        },
        watch: {
            activeChat(newId, oldId){

            }
        },
        created(){

        }
    }
    
</script>

<style lang="scss">

    #chat {
        
    }

</style>
