var express = require('express')
var app = express()

app.listen(3000, function() {
  console.log("What's up??");
})

app.get('/', function(req, res) {
  res.send('hi practice3')
})
