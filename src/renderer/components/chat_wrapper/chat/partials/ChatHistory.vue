<template>
    <div id="chat-history">
        
    </div>
</template>

<script>

    import { mapState } from 'vuex';

    export default {
        name: 'ChatHistory',
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
