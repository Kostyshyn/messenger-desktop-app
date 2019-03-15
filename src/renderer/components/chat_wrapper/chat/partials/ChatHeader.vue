<template>
    <div id="chat-header" class="d-flex">
        <div class="user-info">
            <img :src="activeChat.img" alt="" class="user-img">
            <p>{{ activeChat.name }}</p>
        </div>

        <div class="chat-actions">
            <div class="chat-actions-button ripple">
                <FontAwesomeIcon icon="phone"/>    
            </div>
            <div class="chat-actions-button ripple">
                <FontAwesomeIcon icon="video"/>
            </div>
            <div class="chat-actions-button ripple">
                <FontAwesomeIcon icon="ellipsis-v"/>
            </div>
        </div>
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
        justify-content: space-between;
        .user-info {
            display: flex;
            align-items: center;
            .user-img {
                margin-right: 15px;
            }
        }

        .chat-actions {
            display: flex;
            .chat-actions-button {
                cursor: pointer;
                height: 44px;
                width: 44px;
                border-radius: 50%;
                margin-left: 5px;
                display: flex;
                align-items: center;
                justify-content: center;
                            font-size: 22px;
                svg {
                    path {
                        fill: rgb(145,145,145);
                    }
                }
            }
        }
    }
</style>
