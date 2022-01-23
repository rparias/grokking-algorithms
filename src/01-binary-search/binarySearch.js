const binarySearch = (list, element, low = 0, high) => {
  if (high === null || high === undefined) {
    high = list.length - 1
  }

  if (low > high) return false

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
  return binarySearch(list, element, low, high)
}

const getMiddle = (low, high) => {
  return Math.floor((low + high) / 2)
}

module.exports = binarySearch
