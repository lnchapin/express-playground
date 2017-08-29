var express = require("express");
var router = express.Router();

router.get('/math/calculate', function(request, response){
  var operation = request.query.operation;
  var x = Number(request.query.x);
  var y = Number(request.query.y);
  var total;

  if (operation == "add"){
    total = x + y
    response.send(x + "+" + y + "=" + total);
  } else if (operation == "subtract") {
    total = x - y
    response.send(x + "-" + y + "=" + total);
  } else if (operation == "multiply") {
    total = x * y
    response.send(x + "*" + y + "=" + total);
  } else if (operation == "divide"){
    total = x / y
    response.send(x + "/" + y + "=" + total);
  }
});

module.exports = router;
