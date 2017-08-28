// basic node logged in the terminal
// console.log("Hi");
//

//basic http server
// var http = require('http');
// var port = 2000;
// var server = http.createServer(function (request, response) {
//   response.end("Hello, it's me")
// })
//
// server.listen(port, function () {
//   console.log('We are on port ' + port);
// })


//express server
var express = require('express')
var server = express()

server.get('/', function (request, response) {
  response.send("I was wondering if after all this time you'd like to meet")
})

server.get('/next', function (request, response) {
  response.send("To go over, everything")
})

server.listen(8080)
