import * as React from 'react'

interface FizzBuzz {
  num: number
}

export const FizzBuzz = (props: FizzBuzz) => {
  if (props.num % 3 === 0 && props.num % 5 === 0) {
    return <div>FizzBuzz</div>
  }

  if (props.num % 3 === 0) {
    return <div>Fizz</div>
  }

  if (props.num % 5 === 0) {
    return <div>Buzz</div>
  }
  return <div>{props.num}</div>
}
