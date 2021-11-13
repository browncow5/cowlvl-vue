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
  var isPrime = false
  
  if (num <= 0) {
      isPrime = false;
  }
  else if(num < 5) {
    if (num == 1) {isPrime = false;}
    if (num == 2) {isPrime = true;}
    if (num == 3) {isPrime = true;}
    if (num == 4) {isPrime = false;}
  }
  else {
    isPrime = true;
    for(var i = 2; i <= Math.sqrt(num); i++)
      if(num % i === 0) {
        isPrime = false;
      }
    }
    
  res.status(200);
  res.send({ isPrime: isPrime });

});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

