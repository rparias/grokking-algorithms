const recursiveSum = (array) => {
  if (!array.length) {
    return 0
  } else {
    const [first, ...rest] = array
    return first + recursiveSum(rest)
  }
}

module.exports = { recursiveSum }
