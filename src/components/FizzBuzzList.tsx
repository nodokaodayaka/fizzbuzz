import * as React from 'react'
import { FizzBuzz } from './FizzBuzz'

import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(5),
      padding: theme.spacing(3),
      width: theme.spacing(32),
      height: theme.spacing(16),
    },
  },
}))

export const FizzBuzzList = (props: any) => {
  const { num } = props

  let list = [...Array(Number(num))].map((_, i) => i + 1)

  const classes = useStyles()
  return (
    <div className={classes.root}>
      {list.map((value) => {
        return (
          <Paper>
            <Typography variant="h5" gutterBottom>
              {value}
            </Typography>
            <Typography variant="h2" gutterBottom>
              <FizzBuzz key={value} num={String(value)} />
            </Typography>
          </Paper>
        )
      })}
    </div>
  )
}
