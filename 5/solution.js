var fs = require('fs');
var inputstring = fs.readFileSync('input.txt').toString().split('\n');

var niceStringsOne = 0;
var niceStringsTwo = 0;

function containsVowels (theString){
  //It contains at least three vowels (aeiou only), like aei, xazegov,
  //or aeiouaeiouaeiou.
  var numVowels = theString.match(/[aeiou]/g);
  return numVowels != undefined && numVowels.length >= 3 ? true : false;
}

function containsDoubles (theString){
  //It contains at least one letter that appears twice in a row, like xx,
  //abcdde (dd), or aabbccdd (aa, bb, cc, or dd).
  var doubles = theString.match(/([a-z])\1/);
  return doubles != null ? true : false;
}

function noIllegalPairs (theString){
  //It does not contain the strings ab, cd, pq, or xy, even if they are part
  //of one of the other requirements.
  var illegalPair = theString.match(/ab|cd|pq|xy/);
  return illegalPair == null ? true : false;
}

function containsRecurringPair(theString){
  //It contains a pair of any two letters that appears at least twice in the
  //string without overlapping, like xyxy (xy) or aabcdefgaa (aa), but not like
  //aaa (aa, but it overlaps).
  var recurringPair = theString.match(/([a-z][a-z])[a-z]*\1/);
  return recurringPair != null ? true : false;
}

function containsRepeatedLetter(theString){
  //It contains at least one letter which repeats with exactly one letter
  //between them, like xyx, abcdefeghi (efe), or even aaa.
  var repeatedLetter = theString.match(/(.).\1/);
  return repeatedLetter != null ? true : false;
}

for (i in inputstring){

  // Part 1
  if (containsVowels(inputstring[i]) && containsDoubles(inputstring[i])
   && noIllegalPairs(inputstring[i])){
     niceStringsOne += 1;
  }

  // Part 2
  if (containsRecurringPair(inputstring[i]) && containsRepeatedLetter(inputstring[i])){
    niceStringsTwo += 1;
  }

}

console.log(niceStringsOne);
console.log(niceStringsTwo);
