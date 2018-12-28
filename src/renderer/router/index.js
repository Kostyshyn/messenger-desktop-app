import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: require('@/components/auth/Login').default
    },
    {
      path: '/',
      name: 'Register',
      component: require('@/components/auth/Register').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
