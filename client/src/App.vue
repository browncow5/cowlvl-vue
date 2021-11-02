<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <PrimeTextBox msg="Client side Prime Check"/>
  <RequestTextBox msg="Server side Prime Check"/>
</template>

<script>
import PrimeTextBox from './components/PrimeTextBox.vue'
import RequestTextBox from './components/RequestTextBox.vue'

export default {
  name: 'App',
  components: {
    PrimeTextBox,
    RequestTextBox
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
