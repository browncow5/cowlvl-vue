<template>
  <div class="clienttextbox">
    <h1>{{ msg }}</h1>
    <input v-model="inputNumber" type="number" @input="isPrime(inputNumber)">
    <p>{{ inputNumber }} is prime : {{ prime }}</p>
  </div>
</template>

<script>

export default {
  name: 'ClientTextBox',
  props: {
    msg: String
  },

  data: function () {
    return {
      inputNumber: 2,
      count: 0,
      prime: true
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
