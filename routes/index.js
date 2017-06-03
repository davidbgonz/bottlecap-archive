var express = require('express');
var router = express.Router();

var colors = [
    "Black", "Blue", "Brown", "Cork", "Cream", "Gold", "Green", "Misc", "Orange", "Purple", "Red", "Silver", "White", "Yellow"
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Bottlecap Archive',
    colors: colors
  });
});

module.exports = router;
