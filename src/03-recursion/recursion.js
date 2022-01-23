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

const maximumInAList = (list, maximum = 0) => {
  if (!list.length) return null

  if (list.length === 1) return maximum || list[0]

  const [current, ...rest] = list
  if (current > maximum) {
    return maximumInAList(rest, current)
  } else {
    return maximumInAList(rest, maximum)
  }
}

module.exports = { recursiveSum, countItems, maximumInAList }
