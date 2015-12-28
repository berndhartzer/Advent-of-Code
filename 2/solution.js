var fs = require('fs');
var inputstring = fs.readFileSync('input.txt').toString().split('\n');

var totalSurfaceArea = 0;
var totalRibbon = 0;

for (i in inputstring){

  // Wrapping paper
  var presentSize = inputstring[i].trim().split("x");
  var length = parseInt(presentSize[0]);
  var width = parseInt(presentSize[1]);
  var height = parseInt(presentSize[2]);

  var surfaceArea = 2 * length * width + 2 * width * height + 2 * height * length;

  var extra = Math.min(length * width, width * height, height * length);

  surfaceArea += extra;

  totalSurfaceArea += surfaceArea;

  // Ribbon
  var ribbon = Math.min(length + width, width + height, height + length) * 2;
  ribbon += length * width * height;

  totalRibbon += ribbon;

}

console.log(totalSurfaceArea);
console.log(totalRibbon);
