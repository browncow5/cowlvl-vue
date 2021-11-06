<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <ClientTextBox msg="Client side Prime Check"/>
  <RequestTextBox msg="Server side Prime Check"/>
</template>

<script>
import ClientTextBox from './components/ClientTextBox.vue'
import RequestTextBox from './components/RequestTextBox.vue'

export default {
  name: 'App',
  components: {
    ClientTextBox,
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
