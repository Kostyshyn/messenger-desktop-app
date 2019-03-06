import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: require('@/components/auth/Login').default
    },
    {
      path: '/register',
      name: 'Register',
      component: require('@/components/auth/Register').default
    },
    {
      path: '/chat',
      name: 'Chat',
      component: require('@/components/chat/Chat').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
