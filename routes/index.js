var express = require('express');
var router = express.Router();
var capStats = require('../public/javascripts/colorClass');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Bottlecap Archive',
    colors: capStats
  });
});

module.exports = router;
