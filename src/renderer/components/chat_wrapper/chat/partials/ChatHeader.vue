<template>
    <div id="chat-header" class="d-flex">
        <img :src="activeChat.img" alt="" class="user-img">
        <p>{{ activeChat.name }}</p>
    </div>
</template>

<script>

    import { mapState } from 'vuex';

    export default {
        name: 'ChatHeader',
        components: {  },
        computed: {
            ...mapState({
                activeChat: state => state.App.activeChat,  
            })
        },
        methods: {

        },
        watch: {

        },
        created(){

        }
    }
    
</script>

<style lang="scss">
    #chat-header {
        height: 64px;
        padding: 15px;
        box-sizing: border-box;
        border-bottom: 1px solid gainsboro; 
        background-color: #fff;
        align-items: center;
        .user-img {
            margin-right: 10px;
        }
    }
</style>
