import * as React from 'react'
import { calc } from '../calc/FizzBuzzCalculator'

interface FizzBuzz {
  num: number
}

export const FizzBuzz = (props: FizzBuzz) => {
  const { num } = props
  return <div>{calc(num)}</div>
}
