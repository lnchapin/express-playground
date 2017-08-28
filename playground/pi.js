var express = require("express");
var router = express.Router();

router.get('/math/pi', function (req, res) {
  res.send((Math.PI).toString())
});

module.exports = router;
