import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { FizzBuzz } from './components/FizzBuzz'
import { FizzBuzzList } from 'components/FizzBuzzList'
import { ChangeEvent } from 'react'
import TextField from '@material-ui/core/TextField'
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

function App() {
  const [count, setCount] = useState('1')

  const handleEvent = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 3) {
      e.target.value = e.target.value.slice(0, 3)
    }
    setCount(e.target.value)
  }

  const classes = useStyles()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br />
        <TextField
          id="outlined-number"
          label="Fizzbuzz"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          onChange={handleEvent}
          defaultValue={count}
        />

        <div className={classes.root}>
          <Paper>
            <Typography variant="h5" gutterBottom>
              {count}
            </Typography>
            <Typography variant="h2" gutterBottom>
              <FizzBuzz num={count} />
            </Typography>
          </Paper>
        </div>
        <FizzBuzzList num={count} />
      </header>
    </div>
  )
}

export default App
