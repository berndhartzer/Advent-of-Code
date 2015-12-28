var fs = require('fs');
var inputstring = fs.readFileSync('input.txt').toString().split('\n');

var lightsLit = 0;
var totalBrightness = 0;

function Light(x, y, state) {
    this.xCoord = x;
    this.yCoord = y;
    this.state = state;
    this.brightness = 0;
}

var lights = [];

// Populate the grid with lights which are off
for(var x = 0; x < 1000; x++) {
    for(var y = 0; y < 1000; y++) {
        lights.push(new Light(x, y, "off"));
    }
}

function returnInstruction (input){
  if(input.match(/turn on/)){
    return "on";
  }
  if(input.match(/turn off/)){
    return "off";
  }
  if(input.match(/toggle/)){
    return "toggle";
  }
}

function changeLights(x1, y1, x2, y2, newState){
  for (var j = 0; j < lights.length; j++) {
    if(lights[j].xCoord >= x1 && lights[j].xCoord <= x2
    && lights[j].yCoord >= y1 && lights[j].yCoord <= y2) {
      if (newState == "toggle"){
        lights[j].state == "on" ? lights[j].state = "off" : lights[j].state = "on";
        lights[j].brightness += 2;
      } else {
        if (newState == "on"){
          lights[j].brightness += 1;
        } else if (newState == "off"){
          if (lights[j].brightness > 0){
            lights[j].brightness -= 1;
          }
        }
        lights[j].state = newState;
      }
    }
  }
}

for (i in inputstring){
  var range = inputstring[i].match(/\d+/g);
  changeLights(range[0], range[1], range[2], range[3], returnInstruction(inputstring[i]));
}

// Count the lights and brightness
for (var k = 0; k < lights.length; k++) {
  if (lights[k].state == "on"){
    lightsLit += 1;
  }
  totalBrightness += lights[k].brightness;
}

console.log(lightsLit);
console.log(totalBrightness);
