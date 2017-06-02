var express = require('express');
var router = express.Router();
var util = require('util');

/* GET home page. */
router.post('/', function(req, res, next) {
	console.log("Aproved" + util.inspect(req.body));
	res.redirect('https://192.168.0.142/endp/verifyPassword');
});

module.exports = router;
