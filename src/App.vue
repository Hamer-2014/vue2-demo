<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <acomponent></acomponent>
    <ul>
        <li><router-link to="/first">点我跳转到老大</router-link></li>
        <li><router-link to="/second">点我跳转到老二</router-link></li>
    </ul>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
import acomponent from './component/a.vue'
import bcomponent from './component/b.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'vue.js 组件 路由 '
    }
  },
  components: { acomponent, bcomponent }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
