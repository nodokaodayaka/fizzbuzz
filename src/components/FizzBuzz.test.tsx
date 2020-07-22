import * as React from 'react'
import { FizzBuzz } from './FizzBuzz'
import { render } from '@testing-library/react'

describe('FizzBuzz component', () => {
  it('returns FizzBuzz', () => {
    let num = {
      num: 15,
    }
    const { getByText } = render(<FizzBuzz {...num} />)
    expect(getByText('FizzBuzz')).toBeTruthy()
  })
})
