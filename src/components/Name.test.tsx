import * as React from 'react'
import { Name } from './Name'
import { render } from '@testing-library/react'

describe('Name component', () => {
  it('returns the name passed as props', () => {
    let name = 'Foo'
    const { getByText } = render(<Name name={name} />)
    expect(getByText(`${name}`)).toBeTruthy()
  })
})
