var express = require('express')
var app = express()
var port = process.env.PORT || 8080
var math = require("./calculate")

app.use(math);

app.listen(port, function () {
  console.log("Listening on port", port);
});
