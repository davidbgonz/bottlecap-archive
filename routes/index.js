var express = require('express');
var router = express.Router();
var capStats = require('../public/javascripts/colorClass');

var colors = [
    "Black", "Blue", "Brown", "Cork", "Cream", "Gold", "Green", "Misc", "Orange", "Purple", "Red", "Silver", "White", "Yellow"
];

  console.log(capStats);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Bottlecap Archive',
    colors: capStats
  });
});

module.exports = router;
