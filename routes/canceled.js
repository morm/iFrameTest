var express = require('express');
var router = express.Router();
var util = require('util');

/* GET home page. */
router.post('/', function(req, res, next) {
	console.log("Canceled" + util.inspect(req));
	res.redirect('https://192.168.0.142/endp/verifyPassword');
});

module.exports = router;
