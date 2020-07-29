export const calc = (inputNum: String) => {
  if (inputNum.length < 1) {
    return ''
  }

  let num = Number(inputNum)
  if (num % 3 === 0 && num % 5 === 0) {
    return 'FizzBuzz'
  }

  if (num % 3 === 0) {
    return 'Fizz'
  }
  if (num % 5 === 0) {
    return 'Buzz'
  }
  return `${num}`
}
