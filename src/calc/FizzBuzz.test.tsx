import { fizzBuzz } from './FizzBuzz'

describe('Fizz is multiple of 3', () => {
  test('number 3 is return Fizz', () => {
    expect(fizzBuzz(3)).toBe('Fizz')
  })
  test('number 6 is return Fizz', () => {
    expect(fizzBuzz(6)).toBe('Fizz')
  })
  test('number 33 is return FizzBuzz', () => {
    expect(fizzBuzz(33)).toBe('Fizz')
  })
})

describe('Buzz is multiple of 5', () => {
  test('number 5 is return Buzz', () => {
    expect(fizzBuzz(5)).toBe('Buzz')
  })
})

describe('FizzBuzz is multiple of 3 and 5', () => {
  test('number 15 is return FizzBuzz', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz')
  })
})

describe('Number is not multiple of 3 and 5', () => {
  test('number 1 is return string number', () => {
    expect(fizzBuzz(1)).toBe('1')
  })
})
