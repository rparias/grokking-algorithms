const binarySearch = (list, element) => {
  let low = 0
  let high = list.length - 1

  while (low <= high) {
    let middle = getMiddle(low, high)
    const guess = list[middle]

    if (guess === element) {
      return true
    }

    if (guess > element) {
      high = middle - 1
    } else {
      low = middle + 1
    }
  }

  return false
}

const getMiddle = (low, high) => {
  return Math.floor((low + high) / 2)
}

module.exports = binarySearch
