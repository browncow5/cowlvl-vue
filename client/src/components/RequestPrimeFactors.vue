<template>
  <div class="requestprimefactors">
    <h1>{{ msg }}</h1>
    <input v-model="inputNumber" type="number" @input="setNewMsg()">
    <p>{{ message }}</p>
    <button v-on:click="getPrimeFactorsApi(inputNumber)">Get Prime Factors.</button>
  </div>
</template>

<script>
import axios from 'axios'

const API_BASE = location.hostname === 'localhost'
  ? 'http://localhost:8080'
  : location.origin

export default {
  name: 'RequestRequestPrimeFactors',
  props: {
    msg: String
  },

  data: function () {
    return {
      inputNumber: 2,
      count: 0,
      prime: true,
      message: "Click button to update"
    }
  },

  methods: {
    async getPrimeFactorsApi (inputNumber) {
      try {
        console.log(inputNumber)
        const apiResp = await axios.post(`${API_BASE}/getPrimeFactors`, {num: inputNumber})

        const responseTime = apiResp.headers['x-response-time']
        const data = apiResp.data

        // Set text on button
        this.factors = data.factors
        this.message = inputNumber + " has prime factors : " + data.factors

        return {
          responseTime,
          ...data,
        }
      } catch (err) {
        console.log(err)
        // catch err
      } 
    },

    setNewMsg: function () {
        this.message="Click button to update"
    }
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
