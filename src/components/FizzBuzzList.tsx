import * as React from 'react'
import { FizzBuzz } from './FizzBuzz'

export const FizzBuzzList = (props: any) => {
  let list = [...Array(props.num)].map((_, i) => i + 1)

  return (
    <div>
      {list.map((value) => {
        return <FizzBuzz key={value} num={value} />
      })}
    </div>
  )
}
