var express = require('express')
var router = express.Router()

router.post('/math/area', function (request, response) {
  var type = request.query.type
  var radius = Number(request.query.radius)
  var width = Number(request.query.width)
  var height = Number(request.query.height)
  var total

  if (type === 'rectangle') {
    if (isNaN(width && height)) {
      response.send('Invalid')
    } else {
      total = width * height
      response.send('Area of a ' + width + 'x' + height + ' rectangle is ' + total)
    }
  } else if (type === 'circle') {
    if (isNaN(radius)) {
      response.send('Invalid')
    } else {
      total = Math.PI * (Math.pow(radius, 2))
      response.send('Area of a circle with a radius of ' + radius + ' is ' + total)
    }
  }
})

module.exports = router
