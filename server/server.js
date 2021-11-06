'use strict';

// Enable DD APM
// This line must come before importing any instrumented module.
const tracer = require('dd-trace').init({
  logInjection: true
});

const express = require('express');
//const bodyParser = require("body-parser");
//const cors = require("cors");
const resolve = require('path');


// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
const dir = __dirname + '/dist/';

// App
const app = express();

app.use(express.static(dir));

//var corsOptions = {
//  origin: "http://localhost:8081"
//};

app.get('/', (req, res) => {
  res.sendFile(resolve.resolve(dir + "index.html"));
});

app.get('/api', (req, res) => {
  res.send('Hello World API');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

