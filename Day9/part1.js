var fs = require('fs');
let totalBS = 0
let garbage = 0
let groups = 0
let startGroups = 0
const perform = (data) => {

  for (i = 0; i < data.length; i++) {

    if (new String(data[i]).valueOf() === new String("!").valueOf()) {

      i += 1
    } else if (data[i] === "<" && garbage == 0) {

      garbage++
    } else if (new String(data[i]).valueOf() === new String(">").valueOf()) {
      garbage = garbage - 1
    } else if (data[i] === "{" && garbage == 0 && garbage == 0) {

      startGroups++
    } else if (data[i] === "}" && startGroups > 0 && garbage == 0) {

      groups += startGroups
      startGroups -= 1
    } else if (garbage == 1) {
      while (data[i] != ">") {
        if (new String(data[i]).valueOf() === new String("!").valueOf()) {
          i += 1
          totalBS--
        }
        totalBS++
        i++
      }
      garbage--
    }

  }

}

try {
  let data = fs.readFileSync('text.txt', 'utf8')
  perform(data);

} catch (e) {
  console.log('Error:', e.stack);
}
console.log("groups: ", totalBS)
