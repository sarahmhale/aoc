let counter = 0
const findSimilar = (line) => {
  line = line.split(" ")

  for (let i = 0; i < line.length; i++) {
    for (let j = i + 1; j < line.length; j++) {
      let wordcounter = 0
      let word1 = String(line[i]).split('').sort().join('');
      let word2 = String(line[j]).split('').sort().join('')

      if (word1 === word2)
        return true

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
  if (!findSimilar(line)) {
    counter += 1
  }
  console.log("counter: ", counter)
});
