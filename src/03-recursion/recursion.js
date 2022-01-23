const recursiveSum = (array) => {
  if (!array.length) {
    return 0
  } else {
    const [first, ...rest] = array
    return first + recursiveSum(rest)
  }
}

const countItems = (list) => {
  if (!list.length) {
    return 0
  } else {
    list.pop()
    return 1 + countItems(list)
  }
}

module.exports = { recursiveSum, countItems }
