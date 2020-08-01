import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { FizzBuzz } from './components/FizzBuzz'
import { FizzBuzzList } from 'components/FizzBuzzList'
import { ChangeEvent } from 'react'
import TextField from '@material-ui/core/TextField'

function App() {
  const [count, setCount] = useState('1')

  const handleEvent = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 3) {
      e.target.value = e.target.value.slice(0, 3)
    }
    setCount(e.target.value)
  }

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
        <FizzBuzz num={count} />
        <FizzBuzzList num={count} />
      </header>
    </div>
  )
}

export default App
