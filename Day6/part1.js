const state = [10, 3, 15, 10, 5, 15, 5, 15, 9, 2, 5, 8, 5, 2, 3, 6]

let states = [
  [0, 2, 7, 0]
]
let counter = 0


const getHighestValueIndex = (array) => {
  return array.indexOf(Math.max(...array));
}

const increment = () => {

  index = getHighestValueIndex(state)
  steps = state[index]
  state[index] = 0
  index += 1

  while (steps != 0) {
    if (index == (state.length)) {
      index = 0
    }
    state[index] += 1
    index += 1
    steps -= 1
  }
  counter += 1
}
arraysEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (var i = arr1.length; i--;) {
    if (arr1[i] !== arr2[i])
      return false;
  }

  return true;
}
const perform = () => {
  let run = true
  while (run) {

    increment()

    for (let i = 0; i < states.length; i++) {
      if (arraysEqual(state, states[i])) {
        console.log("counter ", states.length - i)
        run = false
      }
    }
    states.push(state.slice(0))

  }

}
perform()
