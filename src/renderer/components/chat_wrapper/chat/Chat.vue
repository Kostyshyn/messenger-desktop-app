<template>
    <div id="chat">
       <h1 class="heading h-1">Chat</h1>
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
                
            })
        },
        methods: {

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
