<template>
    <div id="chat-wrapper">
        <Sidebar ref="sidebar"/>
        <Chat ref="chat"/>
    </div>
</template>

<script>

    import { mapState } from 'vuex';
    import Chat from './chat/Chat.vue';
    import Sidebar from './sidebar/Sidebar.vue';

    export default {
        name: 'ChatWrapper',
        components: { 
            Chat,
            Sidebar
        },
        data(){
            return {  }
        },
        computed: {
            localComputed(){ /* ... */ },
            ...mapState({

            })
        },
        methods: {

        },
        mounted(){
            this.$nextTick(() => {
                // console.log(this.$refs['sidebar'].$el, this.$refs['chat'].$el);
            });
        },
        created(){

        }
    }

</script>

<style>
    

</style>
