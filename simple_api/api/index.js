var router = require('express').Router();
var mock = require('./mock');

router.get('/flights', function (req, res) {
  res.send(mock);
});

module.exports = router;
