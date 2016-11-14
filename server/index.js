var express     = require('express');
var mongoose    = require('mongoose');
var bodyParser  = require('body-parser');
var _           = require('lodash');
var path        = require('path');

var app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/../client/app/views')));

mongoose.connect("mongodb://admin:password1234@ds151917.mlab.com:51917/inmotion-challenge", err => {
  if (err) console.error(err);
});
mongoose.connection.once('open', () => {

  app.models = require('./models/index');

  _.each(require('./routes'), (controller, routes) => {
    app.use(route, controller(app, route));
  })

  app.get('/bundle.js', (req, res) => {
    res.sendFile(path.join(__dirname, '/../client/app/bundle.js'));
  })

  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '/../client/app/index.html'));
  })

  let port = 3000;
  app.listen(port);
  console.log('Listening on port', port);
})
