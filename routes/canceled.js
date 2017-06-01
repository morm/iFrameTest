var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  	console.log("Canceled" + JSON.stringify(req.query));
});

module.exports = router;
