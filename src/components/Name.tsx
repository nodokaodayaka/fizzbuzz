import * as React from 'react'

interface Name {
  name: string
}

export const Name = (props: Name) => {
  return <div>{props.name}</div>
}
