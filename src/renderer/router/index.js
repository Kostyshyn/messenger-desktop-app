import Vue from 'vue';
import Router from 'vue-router';
import store from '@store';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            beforeEnter: (to, from, next) => {
                if (store.state.User.user){
                    next({
                        path: '/chat'
                    });
                } else {
                    next({
                        path: '/login'
                    });
                }
            }
        },
        {
            path: '/login',
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
            name: 'ChatWrapper',
            component: require('@/components/chat_wrapper/ChatWrapper').default
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})
