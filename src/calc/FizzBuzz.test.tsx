import { fizzBuzz } from './FizzBuzz'

test('number 1 is return 1', () => {
    expect(fizzBuzz(1)).toBe(1)
})

test('number 3 is return Fizz', () => {
    expect(fizzBuzz(3)).toBe("Fizz")
})

test('number 5 is return Buzz', () => {
    expect(fizzBuzz(5)).toBe("Buzz")
})

test('number 6 is return Fizz', () => {
    expect(fizzBuzz(6)).toBe("Fizz")
})