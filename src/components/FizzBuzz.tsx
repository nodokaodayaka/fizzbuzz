import * as React from 'react'
import { calc } from '../calc/FizzBuzzCalculator'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

interface FizzBuzz {
  num: String
}

export const FizzBuzz = (props: FizzBuzz) => {
  const { num } = props
  return (
    <>
      <Paper>
        <Typography variant="h5" gutterBottom>
          {num}
        </Typography>
        <Typography variant="h2" gutterBottom>
          {calc(Number(num))}
        </Typography>
      </Paper>
    </>
  )
}
