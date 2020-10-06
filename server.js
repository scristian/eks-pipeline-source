'use strict';

const express = require('express');

// Constants
const PORT = 9090;
const HOST = '0.0.0.0';

// App
const app = express();

var logger = require('morgan');
app.use(logger('combined'));

app.get('/', (req, res) => {
  res.send('Hello World v0.5');
});

app.get('/path', (req, res) => {
  res.send('Hello World PATH v0.2');
});

app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);

