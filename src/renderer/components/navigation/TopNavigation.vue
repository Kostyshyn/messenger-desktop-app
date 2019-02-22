<template>
    <div id="top-navigation">
        User: {{ user.username }}
    </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
    name: 'TopNavigation',
    components: {  },
    computed: {
        localComputed () { /* ... */ },
        ...mapState({
            user: state => state.User.user
        })
    },
    methods: {

    },
    created(){

    }
}
</script>

<style>


</style>
