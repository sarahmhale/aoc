let value = 1
const zeros = (dimensions) => {
  var array = [];
  for (var i = 0; i < dimensions[0]; ++i) {
    array.push(dimensions.length == 1 ? 0 : zeros(dimensions.slice(1)));
  }
  return array;
}

const setDirection = (direction) => {
  if (direction == 4) {
    return 1
  } else {
    return direction + 1
  }

}

const sumOfNeighbours = (array, index) => {
  row = index[0]
  col = index[1]
  sum = 0;
  sum += array[row][col - 1]
  sum += array[row][col + 1]
  sum += array[row - 1][col]
  sum += array[row + 1][col]
  sum += array[row - 1][col + 1]
  sum += array[row + 1][col + 1]
  sum += array[row - 1][col - 1]
  sum += array[row + 1][col - 1]
  value = sum
  return sum

}


const createSpiralArray = (n) => {
  let spiral = zeros([n, n])
  let sizeOfSquare = 3
  let nrOfJumps = 2
  let direction = 3
  let timeToChange = 0

  /**
  4 down
  1 right
  2 up
  3 left
  */
  rowIndex = Math.round(n / 2 - 1)
  colIndex = Math.round(n / 2 - 1)

  spiral[rowIndex][colIndex] = 1
  spiral[rowIndex][colIndex - 1] = 1
  rowIndex = rowIndex - 1
  spiral[rowIndex][colIndex - 1] = 2
  colIndex = colIndex - 1



  while (value < 368078) {
    if (timeToChange == 2) {
      timeToChange = 0
      nrOfJumps += 1
    }
    if (direction == 2) {
      for (let i = 1; i <= nrOfJumps; i++) {
        rowIndex -= 1
        spiral[rowIndex][colIndex] = sumOfNeighbours(spiral, [rowIndex, colIndex])

      }
    }
    if (direction == 3) {
      for (let i = 1; i <= nrOfJumps; i++) {
        colIndex += 1
        spiral[rowIndex][colIndex] = sumOfNeighbours(spiral, [rowIndex, colIndex])

      }
    }
    if (direction == 4) {
      for (let i = 1; i <= nrOfJumps; i++) {
        rowIndex += 1
        spiral[rowIndex][colIndex] = sumOfNeighbours(spiral, [rowIndex, colIndex])
      }
    }
    if (direction == 1) {
      for (let i = 1; i <= nrOfJumps; i++) {
        colIndex -= 1
        spiral[rowIndex][colIndex] = sumOfNeighbours(spiral, [rowIndex, colIndex])
      }
    }
    timeToChange += 1
    direction = setDirection(direction)
  }
  console.log("value: ", value)
}


createSpiralArray(700)
