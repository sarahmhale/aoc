let array = []
let currentIndex = 0
let nrOfTimes = 0
const takeStep = () => {

  while (currentIndex < array.length) {
    valueOfIndex = array[currentIndex]
    if (valueOfIndex >= 3) {
      array[currentIndex] = (valueOfIndex - 1)
    } else {
      array[currentIndex] = (valueOfIndex + 1)
    }
    currentIndex += valueOfIndex
    nrOfTimes += 1

  }
}

var fs = require('fs'),
  readline = require('readline');

var rd = readline.createInterface({
  input: fs.createReadStream('./day5.txt'),
  console: false
});

rd.on('line', function(line) {
  array[array.length] = parseInt(line)
});

rd.on('close', function() {
  takeStep()
  console.log(nrOfTimes)
});
