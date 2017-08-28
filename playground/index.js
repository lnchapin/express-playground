// var express = require('express')
// var server = express()
// var pi = Math.PI;
//
// server.get('/math/pi', function (request, response) {
//   response.send(pi.toString())
// })
//
// server.listen(8080)


var express = require('express')
var app = express()
var port = process.env.PORT || 8080
var pi = require("./pi")

app.use(pi);

app.listen(port, function () {
  console.log("Listening on port", port);
});
