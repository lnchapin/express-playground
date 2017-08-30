var express = require('express')
var app = express()
var port = process.env.PORT || 8080
var math = require('./calculate')
var sum = require('./sum')
var volume = require('./volume')
var area = require('./area')

app.use(math)
app.use(sum)
app.use(volume)
app.use(area)

app.listen(port, function () {
  console.log('Listening on port', port)
})
