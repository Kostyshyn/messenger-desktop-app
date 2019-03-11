import Vue from 'vue';
import axios from 'axios';

import App from './App';
import router from './router';
import store from './store';
import './store';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch, faSpinner)

Vue.component('FontAwesomeIcon', FontAwesomeIcon);

if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  	components: { App },
  	router,
  	store,
  	template: '<App/>'
}).$mount('#app');
