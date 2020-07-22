import { calc } from './FizzBuzzCalculator'

describe('FizzBuzzCalculator calc', () => {
  it('Multiple of 3 is Fizz', () => {
    expect(calc(3)).toBe('Fizz')
  })

  it('Multiple of 5 is Buzz', () => {
    expect(calc(5)).toBe('Buzz')
  })

  it('Multiple of 3 and Multiple of 5 is FizzBuzz', () => {
    expect(calc(15)).toBe('FizzBuzz')
  })

  it('Not Multiple of 3 and Multiple of 5 is FizzBuzz', () => {
    expect(calc(1)).toBe('1')
  })
})
