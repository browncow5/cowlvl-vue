<template>
  <div class="textbox">
    <h1>{{ msg }}</h1>
    <input v-model="inputNumber" type="number" @input="isPrime(inputNumber)">
    <p>{{ inputNumber }} is prime : {{ prime }}</p>
    <button v-on:click="helloWorld(inputNumber)">Check if Prime.</button>
  </div>
</template>

<script>
import axios from 'axios'

const API_BASE = location.hostname === 'localhost'
  ? 'http://localhost:8081'
  : location.origin

export default {
  name: 'TextBox',
  props: {
    msg: String
  },

  data: function () {
    return {
      inputNumber: 2,
      count: 0,
      prime: false
    }
  },

  methods: {
    isPrime: function (inputNumber) {
        if (inputNumber <= 0) {this.prime = false; }
        else if(inputNumber < 5) {
          if (inputNumber == 1) {this.prime = false;}
          if (inputNumber == 2) {this.prime = true;}
          if (inputNumber == 3) {this.prime = true;}
          if (inputNumber == 4) {this.prime = false;}
        }
        else {
          this.prime = true;
          for(var i = 2; i <= Math.sqrt(inputNumber); i++)
            if(inputNumber % i === 0) {
              this.prime = false;
            }
          }
    },
    async helloWorld (inputNumber) {
        inputNumber
        try {
            const apiResp = await axios.get(`${API_BASE}/api`)
            const responseTime = apiResp.headers['x-response-time']
            const data = apiResp.data
            return {
            responseTime,
            ...data,
            }
        } catch (err) {
            console.log(err)
            // catch err
        }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
