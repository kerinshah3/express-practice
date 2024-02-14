var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  throw new Error("Something went wrong")
});

module.exports = router;
