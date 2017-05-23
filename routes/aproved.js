var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('aproved', { title: 'Approved', params: JSON.stringify(req.query)});
});

module.exports = router;
