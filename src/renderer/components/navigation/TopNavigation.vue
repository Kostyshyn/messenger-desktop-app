<template>
    <div id="top-navigation" class="d-flex">
        <div class="user-info" v-if="user">
            <img class="user-img" :src="BASE_URL + '/' + user.profile_img" alt="">            
            <span class="user-name">{{ user.username }}</span>
        </div>
        <div class="logout" v-if="user">
            <span class="link" @click="LOGOUT">Logout</span>
        </div>
    </div>
</template>

<script>

    import { mapState, mapActions } from 'vuex';

    export default {
        name: 'TopNavigation',
        components: {  },
        computed: {
            localComputed(){

            },
            ...mapState({
                user: state => state.User.user,
                BASE_URL: state => state.BASE_URL
            })
        },
        methods: {
            ...mapActions('User', ['LOGOUT']),

        },
        created(){
            
        }
    }
    
</script>

<style>


</style>
