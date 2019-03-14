<template>
    <div id="chat">
        <transition name="fade" mode="out-in">
            <h1 class="heading h-1" v-if="activeChat" >Chat {{ activeChat }}</h1>
        </transition>
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
