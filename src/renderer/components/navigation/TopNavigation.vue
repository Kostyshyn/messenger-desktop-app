<template>
    <div id="top-navigation">

        <div v-if="user">
            <span>User: {{ user.username }}</span>
            <span class="link" @click="LOGOUT">Logout</span>
            <!-- <img :src="BASE_URL + '/' + user.profile_img" alt="">             -->
        </div>
    </div>
</template>

<script>

import { mapState, mapActions } from 'vuex'

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
