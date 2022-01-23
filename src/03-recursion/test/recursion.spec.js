const { recursiveSum, countItems, maximumInAList } = require('../recursion')

describe('Recursion', () => {
  describe('sum of Array', () => {
    it('should return zero if the array is empty', () => {
      const array = []
      expect(recursiveSum(array)).toBe(0)
    })

    it('should return the sum of the array using recursion', () => {
      const array = [1, 2, 3, 4, 5]
      expect(recursiveSum(array)).toBe(15)
    })

    it('should return the sum of the array using recursion when there are zeros', () => {
      const array = [1, 2, 3, 0, 0]
      expect(recursiveSum(array)).toBe(6)
    })
  })

  describe('count items in a list', () => {
    it('should return zero when the list is empty', () => {
      const list = []
      expect(countItems(list)).toBe(0)
    })

    it('should return the number of items in a list using recursion', () => {
      const list = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21]
      expect(countItems(list)).toBe(11)
    })
  })

  describe('maximum number in a list', () => {
    it('should return undefined when the list is empty', () => {
      expect(maximumInAList([])).toBe(null)
    })

    it('should return the maximum from a list using recursion', () => {
      const list = [2, 5, 1, 6, 30, 27, 11, 0, 31, 29, 4]
      expect(maximumInAList(list)).toBe(31)
    })

    it('should return the same number when the list has only one element', () => {
      expect(maximumInAList([2])).toBe(2)
    })
  })
})
