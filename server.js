'use strict';

const express = require('express');

// Constants
const PORT = 8090;
const HOST = '18.222.27.244';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
