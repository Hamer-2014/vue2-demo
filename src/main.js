import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import VueResource from 'vue-resource'

Vue.use(VueRouter);
Vue.use(VueResource);

import firstcomponent from './components/firstcomponent.vue'
import secondcomponent from './components/secondcomponent.vue'

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/first',
      component: firstcomponent
    },
    {
      path: '/second',
      component: secondcomponent
    }
  ]
})

 new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app')