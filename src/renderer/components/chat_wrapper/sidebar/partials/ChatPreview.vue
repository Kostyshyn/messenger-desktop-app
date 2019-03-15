<template>
    <div class="chat-preview d-flex" @click="setActive" :class="{ active: active }">

        <img :src="chat.img" alt="" class="user-img chat-preview-img">
        <div class="chat-preview-body">
            <div class="chat-preview-name">{{ chat.name }}</div>
            <div class="chat-preview-last-message">{{ chat.last_msg }}</div>
        </div>
        <div class="chat-preview-notification" v-show="chat.unread_msg > 0">{{ unreadMsg }}</div>
        
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
            unreadMsg(){
                let num = this.chat.unread_msg;
                if (num > 999999){
                    return `${ ( num / 1000000).toFixed() }m`;
                } else if(num > 9999){
                    return `${ ( num / 1000).toFixed() }k`;
                } else {
                    return num;
                };
            },
            ...mapState({

            })
        },
        methods: {
            ...mapActions('App', ['SET_ACTIVE_CHAT']),
            setActive(){
                this['SET_ACTIVE_CHAT'](this.chat);
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
            width: calc(100% - 103px);
            flex-grow: 1;
            flex-basis: 0;  
            .chat-preview-name {
                
            }
            .chat-preview-last-message {
                font-size: 14px;
                color: rgb(145,145,145);
                height: 21px;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
            }
        }
        .chat-preview-notification {
            flex: 0 0 auto;
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
            margin-left: 10px;
        }
        &:hover {
            background-color: rgb(238,238,238);
        }
        &.active {
            background-color: rgb(238,238,238);
        }
    }

</style>
