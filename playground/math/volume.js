var express = require('express')
var router = express.Router()

router.all('/math/volume/:length/:width/:height', function (request, response) {
  var length = request.params.length
  var width = request.params.width
  var height = request.params.height
  var total

  total = length * width * height
  response.send('The volume of a '+ length + 'x' + width + 'x' + height + ' rectangle is ' + total)
})

module.exports = router
