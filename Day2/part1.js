var assert = require('assert');
let total = 0


const checksum = (row) => {
  let splitString = row.split("\t").map(Number)

  let min = Math.min(...splitString)
  let max = Math.max(...splitString)
  return (max - min)
}


assert.equal(checksum("737	1866	1565	1452"), 1129)

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
