const { sum, subtract } = require('./math')

let result, expected

result = sum(3, 7)
expected = 10
expect(result).toBe(expected)

result = subtract(7, 3)
expected = 4
expect(result).toBe(expected)
// this function is like an assertion library
// it takes an actual value, and then it returns an object that has functions for different assertions that we can make on that actual value.
function expect(actual) {
    return {
        toBe(expected) {
            if (actual !== expected) {
                throw new Error(`${actual} is not equal to ${expected}`)
            }
        },
        toEqual(expected) { },
        toBeGreaterThan(expected) { },
        toBeLessThan(expected) { }

    }
}