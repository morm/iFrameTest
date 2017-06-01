var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
	console.log("Aproved" + JSON.stringify(req));
	res.redirect('https://192.168.0.142/endp/verifyPassword');
});

module.exports = router;
