var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.query.lng==='ru')
    res.render('index', { title: 'Express' , d4w_url: 'https://d4w-portal.ru/d4w/org-105/fsearch?practiceID=240'});
  else
    res.render('index', { title: 'Express' , d4w_url: 'https://obtest18.centaurportal.com/d4w/org-16/fsearch'});
});

router.get('/popup', function(req, res, next) {
  if(req.query.lng==='ru')
    res.render('popup', { title: 'Express' , d4w_url: 'https://d4w-portal.ru/d4w/org-105/fsearch?practiceID=240'});
  else
    res.render('popup', { title: 'Express' , d4w_url: 'https://obtest18.centaurportal.com/d4w/org-16/fsearch'});
});

router.get('/prod', function(req, res, next) {
      res.render('prod', { title: 'iFrame to production'});
});

router.get('/org-16', function(req, res, next) {
  if(req.query.lng==='ru')
    res.render('popup', { title: 'org-16 RC' , d4w_url: 'https://d4w-portal.ru/d4w/org-105/fsearch?practiceID=240'});
  else
    res.render('popup', { title: 'org-16 RC' , d4w_url: 'https://obtest18.centaurportal.com/d4w/org-16/fsearch'});
});

router.get('/ndc', function(req, res, next) {
  if(req.query.lng==='ru')
    res.render('popup', { title: 'NDC RC' , d4w_url: 'https://d4w-portal.ru/d4w/org-105/fsearch?practiceID=240'});
  else
    res.render('popup', { title: 'NDC RC' , d4w_url: 'https://obtest18.centaurportal.com/d4w/org-16/fsearch'});
});

module.exports = router;
