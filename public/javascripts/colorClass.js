var fs = require('fs'),
    path = require('path');
var imgDir = path.join(__dirname, '../images');

var capArray = [];

fs.readdirSync(imgDir).forEach(function (directory) {
    let bottleCap = {
        color:'',
        size:null
    };
    bottleCap.color = directory;
    bottleCap.size = fs.readdirSync(imgDir.concat('/', directory)).length;
    capArray.push(bottleCap);
});

module.exports = capArray;