let data = []
let variables = []
let highestValue = 0

const mathItUp = {
  '>': (x, y) => { return x > y },
  '<': (x, y) => { return x < y },
  '>=': (x, y) => { return x >= y },
  '<=': (x, y) => { return x <= y },
  '!=': (x, y) => { return x != y },
  '==': (x, y) => { return x == y },
  'inc': (x, y) => { return x + y },
  'dec': (x, y) => { return x - y }
}


var fs = require('fs'),
  readline = require('readline');

var rd = readline.createInterface({
  input: fs.createReadStream('./test.txt'),
  console: false
});

const createObject = (line) => {
  line = line.split(" ")
  data.push({ name: line[0], operator: line[1], amount: parseInt(line[2]), statement: (line[4] + " " + line[5] + " " + line[6]).split(" ") })
  if (variables.find(o => o.name === line[0]) === undefined) {
    variables.push({ name: line[0], value: 0 })
  }

}

const valueOfname = (name) => {
  return variables.find(o => o.name === name).value
}

const setValue = (name, value, operator) => {
  variables.find(o => o.name === name).value = mathItUp[operator](variables.find(o => o.name === name).value, value)
}


const perform = () => {
  data.forEach((currentValue) => {

    if (mathItUp[currentValue.statement[1]](valueOfname(currentValue.statement[0]), parseInt(currentValue.statement[2]))) {
      setValue(currentValue.name, currentValue.amount, currentValue.operator)
    }
    if (highestValue < Math.max.apply(Math, variables.map(function(o) { return o.value; }))) {
      highestValue = Math.max.apply(Math, variables.map(function(o) { return o.value; }))
    }
  })
}
rd.on('line', (line) => {
  createObject(line)
});

rd.on('close', () => {

  perform()
  console.log(highestValue)
});
