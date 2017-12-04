let counter = 0
const findSimilar = (line) => {
  line = line.split(" ")
  for (let i = 0; i < line.length; i++) {
    for (let j = i + 1; j < line.length; j++) {
      if (line[i] === line[j]) {
        return true
      }
    }
  }
  return false
}


var fs = require('fs'),
  readline = require('readline');

var rd = readline.createInterface({
  input: fs.createReadStream('./day4.txt'),
  console: false
});

rd.on('line', function(line) {
  if(!findSimilar(line)){
    counter += 1
    console.log("counter: ", counter)

  }
});
