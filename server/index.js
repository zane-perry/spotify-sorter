// importing the dependencies
const express = require('express');
const bodyParser = require('body-parser');

// defining the Express app
const app = express();

// using bodyParser to parse JSON in the request body into JS objects
app.use(bodyParser.json());

app.listen(3001, () => {
    console.log('listening on port 3001');
  });