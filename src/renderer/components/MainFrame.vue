<template>
  <div id="wrapper">
    <h1>User: {{ user.username }}</h1>
    <router-view></router-view>
  </div>
</template>

<script>

  import { mapState } from 'vuex'

  export default {
    name: 'MainFrame',
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
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

 
</style>
