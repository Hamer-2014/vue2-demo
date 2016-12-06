import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import VueResource from 'vue-resource'

Vue.use(VueRouter);
Vue.use(VueResource);

import acomponent from './component/a.vue'
import bcomponent from './component/b.vue'

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/first',
      component: acomponent
    },
    {
      path: '/second',
      component: bcomponent
    }
  ]
})

 new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app')