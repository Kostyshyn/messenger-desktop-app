<template>
    <div id="chat">
       <h1 class="heading h-1">Chat {{ activeChat }}</h1>
    </div>
</template>

<script>

    import { mapState } from 'vuex';

    export default {
        name: 'Chat',
        components: {  },
        computed: {
            localComputed(){ /* ... */ },
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
        padding: 15px;
    }

</style>
