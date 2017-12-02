var assert = require('assert');
let total = 0


const checksum = (row) => {

  let splitString = row.split("\t").map(Number)
  splitString.sort((a, b) => { return a - b });

  for (let i = 0; i < splitString.length; i++) {
    for (let j = i + 1; j < splitString.length; j++) {
      if (splitString[j] % splitString[i] == 0) {
        return splitString[j] / splitString[i]
      }
    }
  }
}


var fs = require('fs'),
  readline = require('readline');

var rd = readline.createInterface({
  input: fs.createReadStream('./day2.txt'),
  console: false
});

rd.on('line', function(line) {
  total += checksum(line)
  console.log("total is: ", total)
});
