var express = require("express");
var router = express.Router();

router.post('/math/sum', function(request, response) {
  var n = request.query.n
  var summing = 0;
  var txt = 0;

  for (var i = 0; i < n.length; i++) {
    var nums = Number(n[i]);
    summing += nums
    console.log(txt);
    txt += nums;
      if (i <= (n.length-2)) {
        txt+= "+"
      }
  }
  response.send(txt + "=" + summing);
});

module.exports = router;
