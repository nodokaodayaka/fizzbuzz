import { fizzBuzz } from './FizzBuzz'

test('number 1 is return string number', () => {
    expect(fizzBuzz(1)).toBe("1")
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

test('number 15 is return FizzBuzz', () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz")
})

test('number 33 is return FizzBuzz', () => {
    expect(fizzBuzz(33)).toBe("Fizz")
})