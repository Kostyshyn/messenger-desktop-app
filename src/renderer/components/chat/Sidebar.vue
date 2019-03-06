<template>
    <div id="sidebar-wrapper">
       <h1 class="heading h-1">Sidebar</h1>
    </div>
</template>

<script>

import { mapState } from 'vuex';

export default {
    name: 'Chat',
    components: {  },
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
