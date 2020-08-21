import React, { useState } from 'react'
import './App.css'
import { FizzBuzz } from './components/FizzBuzz'
import { FizzBuzzList } from 'components/FizzBuzzList'
import { ChangeEvent } from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'

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

function App() {
  const [count, setCount] = useState('1')
  const classes = useStyles()

  const handleEvent = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value)
    if (value < 0) {
      e.target.value = '0'
    }
    if (e.target.value.length > 3) {
      e.target.value = e.target.value.slice(0, 3)
    }
    setCount(e.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <TextField
          id="outlined-number"
          label="Fizzbuzz"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            min: 0,
          }}
          variant="outlined"
          onChange={handleEvent}
          defaultValue={count}
        />

        <div className={classes.root}>
          <FizzBuzz num={count} />
        </div>

        <div className={classes.root}>
          <FizzBuzzList num={count} />
        </div>
      </header>
    </div>
  )
}

export default App
