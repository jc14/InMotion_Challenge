var express     = require('express');
var mongoose    = require('mongoose');
var bodyParser  = require('body-parser');
var _           = require('lodash');
var path        = require('path');

var app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/../client/app/views')));

app.get('/bundle.js', (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/app/bundle.js'));
})

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/app/index.html'));
})

let port = 3000;
app.listen(port);
console.log('Listening on port', port);
