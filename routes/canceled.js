var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  	console.log("Canceled" + JSON.stringify(req.query));
  	res.redirect('https://192.168.0.142/endp/verifyPassword');
});

module.exports = router;
