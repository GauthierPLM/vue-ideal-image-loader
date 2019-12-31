<template>
  <div id="app">
    <responsive-img alt="Vue logo" :src="VueLogo" />
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ResponsiveImg from "./components/ResponsiveImg";
import VueLogo from "./assets/logo.png";

export default {
  name: 'app',
  data() {
    return {
      VueLogo: VueLogo
    }
  },
  components: {
    ResponsiveImg,
    HelloWorld
  }
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
</style>
