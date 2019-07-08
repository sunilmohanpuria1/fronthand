import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router';
import HomePage from './components/HomePage.vue';
import useradd from './components/useradd.vue';
import UserUpdate from './components/UserUpdate';

import BootstrapVue from 'bootstrap-vue'
import store from './store/store'

Vue.use(BootstrapVue)

Vue.use(VueRouter)
const routes = [
  { path: '/', component: HomePage },
  { path: '/useradd', component: useradd },
  { path:'/UserUpdate', component:UserUpdate}
]
Vue.config.productionTip = false;

const router=new VueRouter({routes});

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
