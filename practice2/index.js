var express = require('express')
var app = express()

app.listen(3000, function() {
  console.log('oh hey');
})

app.get('/', function(req, res) {
  res.send('hi practice2')
})
