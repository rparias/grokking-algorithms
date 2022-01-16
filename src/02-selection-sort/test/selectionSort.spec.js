const selectionSort = require('../selectionSort')

describe('Selection Sort', () => {
  it('should return an empty array using the selection sort algorithm', () => {
    const unsortedArray = []

    const sortedArray = selectionSort(unsortedArray)

    expect(sortedArray).toEqual([])
  })

  it('should return the array sorted using the selection sort algorithm', () => {
    const unsortedArray = [5, 3, 6, 2, 10]

    const sortedArray = selectionSort(unsortedArray)

    expect(sortedArray).toEqual([2, 3, 5, 6, 10])
  })

  it('should return the array sorted with repeated values using the selection sort algorithm', () => {
    const unsortedArray = [5, 3, 3, 2, 10, 10]

    const sortedArray = selectionSort(unsortedArray)

    expect(sortedArray).toEqual([2, 3, 3, 5, 10, 10])
  })
})
