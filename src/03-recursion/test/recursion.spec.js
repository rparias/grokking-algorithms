const { recursiveSum } = require('../recursion')

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
})
