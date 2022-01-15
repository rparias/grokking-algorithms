const binarySearch = require('../binarySearch')

describe('binary search', () => {
  it('should return null when an element is not found', () => {
    const myList = [1, 3, 5, 7, 9]
    const elementToFind = 4

    const element = binarySearch(myList, elementToFind)

    expect(element).toBeNull()
  })
})
