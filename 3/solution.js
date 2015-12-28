var fs = require('fs');
var inputstring = fs.readFileSync('input.txt').toString();

var uniqueHouses = [];

var santaPos = {
  x: 0,
  y: 0
};

var roboSantaPos = {
  x: 0,
  y: 0
};

function deliverPresents(santa){

  var santaCoord = santa.x + ", " + santa.y;

  if (uniqueHouses.indexOf(santaCoord) == -1){
    uniqueHouses.push(santaCoord);
  }

  // move to next house
  switch (inputstring.charAt(i)) {
    case "^":
        santa.y -= 1;
        break;
    case "v":
        santa.y += 1;
        break;
    case "<":
        santa.x -= 1;
        break;
    case ">":
        santa.x += 1;
        break;
  }

}

for (i in inputstring){

  if (i % 2 == 0){
    deliverPresents(santaPos);
  } else {
    deliverPresents(roboSantaPos);
  }

}

console.log(uniqueHouses.length);
