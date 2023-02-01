<template>
  <div id="app">
    <HeaderSellia />
    <FirmaSellia />

  </div>
</template>

<script>


import HeaderSellia from './components/Header.vue'
import FirmaSellia from './components/Firmas.vue'

export default {
  name: 'App',
  components: {
    HeaderSellia,
    FirmaSellia
  }
}
</script>

<style>
  body {
    margin: 0;
  }
  
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
