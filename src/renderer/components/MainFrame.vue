<template>
    <div id="main-frame">
        <TopNavigation />
        <router-view></router-view>
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
