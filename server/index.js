var express = require('express');
var http = require('http');
var babel = require('babel-register');


var app = express();
app.use(express.static('public'));

app.get('/', function(req, res) {
  //try to render index html page in clientr
  res.send('Hello World!');
});

//let user post on homepage
app.post('/', function(req, res) {
  res.send();
})

app.listen(3000, function() {
  console.log('Listening on port 3000!');
})