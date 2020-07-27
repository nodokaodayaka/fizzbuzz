import * as React from 'react'
import { FizzBuzz } from './FizzBuzz'

export const FizzBuzzList = (props: any) => {
  let list = []

  for (let i = 1; i < props.num; i++) {
    list.push(FizzBuzz({ num: i }))
  }

  return <div>{list}</div>
}
