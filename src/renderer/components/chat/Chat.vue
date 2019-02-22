<template>
    <div id="chat-wrapper">
       chat
    </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
    name: 'Chat',
    components: {  },
    computed: {
        localComputed () { /* ... */ },
        ...mapState({
            user: state => state.User.user
        })
    },
    methods: {

    },
    created(){

    }
}
</script>

<style>


</style>
