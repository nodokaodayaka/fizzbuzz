import React from 'react'
import { FizzBuzz } from './FizzBuzz'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(5),
      padding: theme.spacing(3),
      width: theme.spacing(32),
      height: theme.spacing(16),
    },
  },
}))

const FizzBuzzPaper = (props: any) => {
  const { num } = props

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Paper>
        <Typography variant="h5" gutterBottom>
          {num}
        </Typography>
        <Typography variant="h2" gutterBottom>
          <FizzBuzz num={num} />
        </Typography>
      </Paper>
    </div>
  )
}
export default FizzBuzzPaper
