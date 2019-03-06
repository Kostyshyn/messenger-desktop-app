<template>
    <div id="chat-wrapper">
        <Chat />
        <Sidebar />
    </div>
</template>

<script>

import { mapState } from 'vuex';
import Chat from './Chat.vue';
import Sidebar from './Sidebar.vue';

export default {
    name: 'ChatWrapper',
    components: { 
        Chat,
        Sidebar
    },
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

<style>
    
    #chat-wrapper {
        width: 100%;
        height: calc(100vh - 58px);
    }

</style>
