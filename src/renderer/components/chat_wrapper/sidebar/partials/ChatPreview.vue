<template>
    <div class="chat-preview d-flex" @click="setActive" :class="{ active: active }">

        <img :src="chat.img" alt="" class="user-img chat-preview-img">
        <div class="chat-preview-body">
            <div class="chat-preview-name">{{ chat.name }}</div>
            <div class="chat-preview-last-message">{{ chat.last_msg }}</div>
        </div>
        <div class="chat-preview-notification" v-show="chat.unread_msg > 0">{{ chat.unread_msg }}</div>
        
    </div>
</template>

<script>

    import { mapState, mapActions } from 'vuex';

    export default {
        name: 'ChatPreview',
        props: {
            chat: {
                type: Object,
                required: true
            },
            active: {
                type: Boolean,
                default(){ return false }
            }
        },
        components: {

        },
        data(){
            return {

            }
        },
        computed: {
            localComputed(){ /* ... */ },
            ...mapState({

            })
        },
        methods: {
            ...mapActions('App', ['SET_ACTIVE_CHAT']),
            setActive(){
                this['SET_ACTIVE_CHAT'](this.chat.id);
            }
        },
        watch: {

        },
        created(){

        }
    }
    
</script>

<style lang="scss">

    .chat-preview {
        user-select: none; 
        padding: 10px 15px;
        align-items: center;
        transition: .2s;
        cursor: pointer;
        .chat-preview-img {
            margin-right: 10px;
            height: 46px;
            min-width: 46px;
        }
        .chat-preview-body {
            flex-grow: 1;
            flex-basis: 0;  
            .chat-preview-name {
                // height: 20px;
                // line-height: 20px;
            }
            .chat-preview-last-message {
                font-size: 14px;
                color: rgb(145,145,145);
                height: 21px;
                overflow: hidden;
            }
        }
        .chat-preview-notification {
            background-color: rgb(255,82,82);
            color: #fff;
            min-width: 10px;
            line-height: 22px;
            height: 20px;
            display: inline-block;
            text-align: center;
            font-weight: 600;
            font-size: 12px;
            margin-left: auto;
            border-radius: 10px;
            padding: 0px 5px;

        }
        &:hover {
            background-color: rgb(238,238,238);
        }
        &.active {
            background-color: rgb(238,238,238);
        }
    }

</style>
