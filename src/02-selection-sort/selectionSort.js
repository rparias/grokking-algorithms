const selectionSort = (array) => {
  const newArray = []

  while (array.length) {
    let smallestValue = array[0]
    let smallestIndex = 0

    for (let i = 1; i < array.length; i++) {
      if (array[i] < smallestValue) {
        smallestValue = array[i]
        smallestIndex = i
      }
    }

    newArray.push(smallestValue)
    array.splice(smallestIndex, 1)
  }

  return newArray
}

module.exports = selectionSort
