<template>
    <div id="chat-wrapper" class="d-flex pos-yc-xc">
       <h1 class="heading h-1">Messages</h1>
    </div>
</template>

<script>

import { mapState } from 'vuex'

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

<style>
    
    #chat-wrapper {
        width: 100%;
        height: calc(100vh - 58px);
    }

</style>
