const express = require('express');
const app = express();
const routes = require('./route')

const path = __dirname + '/views/';
const port = 8080;

app.use(express.static(path));
app.use('/', router);

app.listen(port, function () {
  console.log('Example app listening on port 8080!')
})

