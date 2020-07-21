import * as React from 'react'
import { FizzBuzz } from './FizzBuzz'
import { render } from '@testing-library/react'

describe('FizzBuzz component', () => {
  it('returns the name passed as props', () => {
    let num = 3
    const { getByText } = render(<FizzBuzz num={num} />)
    expect(getByText('Fizz')).toBeTruthy()
  })

  it('returns the name passed as props', () => {
    let num = 5
    const { getByText } = render(<FizzBuzz num={num} />)
    expect(getByText('Buzz')).toBeTruthy()
  })

  it('returns the name passed as props', () => {
    let num = 15
    const { getByText } = render(<FizzBuzz num={num} />)
    expect(getByText('FizzBuzz')).toBeTruthy()
  })

  it('returns the name passed as props', () => {
    let num = 1
    const { getByText } = render(<FizzBuzz num={num} />)
    expect(getByText('1')).toBeTruthy()
  })
})
