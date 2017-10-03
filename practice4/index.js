var express = require('express')
var app = express()

app.listen(3000, function() {
  console.log("It's only tuesday??");
})

app.get('/', function(req, res) {
  res.send('hi practice4')
})
