<template>
    <div id="sidebar-wrapper">
       <div class="search-bar">
           <input type="text" class="input" placeholder="Search">
       </div>
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

<style lang="scss">
    .search-bar {
        padding: 15px;
        // border-bottom: 1px solid gainsboro;
    }
</style>
