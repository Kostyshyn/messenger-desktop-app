<template>
    <div id="chat-form">
        
    </div>
</template>

<script>

    import { mapState } from 'vuex';

    export default {
        name: 'ChatForm',
        components: {  },
        computed: {
            localComputed(){ /* ... */ },
            ...mapState({
                
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

</style>
