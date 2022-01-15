const binarySearch = require('../binarySearch')

describe('binary search', () => {
  it('should return false when an element is not found', () => {
    const myList = [1, 3, 5, 7, 9]
    const elementToFind = 4

    const element = binarySearch(myList, elementToFind)

    expect(element).toBe(false)
  })

  it('should return true when an element is found in the list', () => {
    const myList = [1, 3, 5, 7, 9]
    const elementToFind = 1

    const element = binarySearch(myList, elementToFind)

    expect(element).toBe(true)
  })
})
