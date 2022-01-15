'use strict';

// Enable DD APM
// This line must come before importing any instrumented module.
const tracer = require('dd-trace').init({
  logInjection: true
});

const express = require('express');
const bodyParser = require("body-parser");
//const cors = require("cors");
const resolve = require('path');

// bunyan logger for manual logging. 
const bunyan = require('bunyan');
var log = bunyan.createLogger({
  name: 'expressServer',
  stream: process.stdout,
  level: 'info'
});


// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
const dir = __dirname + '/dist/';

// App
const app = express();

app.use(express.json())

app.use(express.static(dir));



// Bunyan middleware logging for automatic express logging.
app.use(require('express-bunyan-logger')({
  name: 'logger',
  format: ":remote-address - :user-agent[major] custom logger",
  streams: [{
      level: 'info',
      stream: process.stdout
  }]
}));

//var corsOptions = {
//  origin: "http://localhost:8081"
//};

app.get('/', (req, res) => {
  res.sendFile(resolve.resolve(dir + "index.html"));
});

app.get('/api', (req, res) => {
  res.send('Hello World API');
});

app.post('/prime', (req, res) => {
  log.info(req.body);
  const num = req.body.num
  var isPrimeVar = isPrime(num)
    
  res.status(200);
  res.send({ isPrime: isPrimeVar });

});

app.post('/getPrimeFactors', (req, res) => {
  log.info(req.body);
  const num = req.body.num
  var factorsVar = getPrimeFactors(num)
    
  res.status(200);
  res.send({ factors: factorsVar });

});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

//functions
function isPrime(num) {
  if (num <= 0) {
    return false;
  }
  else if(num < 5) {
    if (num == 1) {return false;}
    if (num == 2) {return true;}
    if (num == 3) {return true;}
    if (num == 4) {return false;}
  }
  else {
    //isPrime = true;
    for(var i = 2; i <= Math.sqrt(num); i++)
      if(num % i === 0) {
        return false;
      }
      return true;
  }
}

function getPrimeFactors(n){
  var factors = [], 
      divisor = 2;
  
  while(n>=2){
    if(n % divisor == 0){
       factors.push(divisor); 
       n= n / divisor;
    }
    else{
      divisor++;
    }     
  }
  return factors;
}

