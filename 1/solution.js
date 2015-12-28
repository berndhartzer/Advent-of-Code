var fs = require('fs');
var inputstring = fs.readFileSync('input.txt').toString();

var position = 0;
var basementPositions = [];
for (var i = 0; i < inputstring.length; i++){

  inputstring.charAt(i) == "(" ? position ++ : position --;

  if (position == -1){
    basementPositions.push(i + 1);
  }

}

console.log(position);
console.log(basementPositions[0]);
