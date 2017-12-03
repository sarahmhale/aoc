const setupArray = (n) => {
  array = new Array(n)
  for (let i = 0; i < n; i++) {
    array[i] = new Array(n);
  }

  return array

}
const createSpiralArray = (n) => {
  let value = n * n;
  let minCol = 0;
  let maxCol = n - 1;
  let minRow = 0;
  let maxRow = n - 1;
  let spiral = setupArray(n)

  while (value > 0) {
    for (let i = minCol; i <= maxCol; i++) {
      spiral[minRow][i] = value;

      value--;
    }

    for (i = minRow + 1; i <= maxRow; i++) {
      spiral[i][maxCol] = value;

      value--;
    }

    for (i = maxCol - 1; i >= minCol; i--) {
      spiral[maxRow][i] = value;

      value--;
    }

    for (i = maxRow - 1; i >= minRow + 1; i--) {
      spiral[i][minCol] = value;

      value--;
    }

    minCol++;

    minRow++;

    maxCol--;

    maxRow--;

  }
  getIndexOfK = (arr, k) => {
    for (var i = 0; i < arr.length; i++) {
      var index = arr[i].indexOf(k);
      if (index > -1) {
        return [i, index];
      }
    }
  }


  manhattanDistance = (indexOfNumber, centerOfSquare) => {
    let steps = 0
    steps = Math.abs(indexOfNumber[0] - centerOfSquare[0])
    steps += Math.abs(indexOfNumber[1] - centerOfSquare[1])

    console.log("number of steps: ", steps)

  }

  manhattanDistance(getIndexOfK(spiral, 368078),getIndexOfK(spiral, 1))

}



createSpiralArray(700)
