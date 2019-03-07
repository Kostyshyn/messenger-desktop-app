<template>
    <div id="main-frame">
        <TopNavigation />

        <!-- <transition name="page" mode="out-in"> -->
            <router-view></router-view>
        <!-- </transition> -->
    </div>
</template>

<script>

    import { mapState } from 'vuex';
    import TopNavigation from './navigation/TopNavigation.vue';

    export default {
        name: 'MainFrame',
        components: { 
            TopNavigation
        },
        computed: {
            localComputed(){ /* ... */ },
            ...mapState({
                
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
