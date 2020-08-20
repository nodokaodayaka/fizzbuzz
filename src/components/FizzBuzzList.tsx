import * as React from 'react'
import { FizzBuzz } from './FizzBuzz'

export const FizzBuzzList = (props: any) => {
  const { num } = props

  let list = [...Array(Number(num))].map((_, i) => i + 1)

  return (
    <>
      {list.map((value) => {
        return <FizzBuzz key={value} num={String(value)} />
      })}
    </>
  )
}
