import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { FizzBuzz } from './components/FizzBuzz'
//import { FizzBuzzList } from 'components/FizzBuzzList'
import { ChangeEvent } from 'react';

function App() {
  const [count, setCount] = useState(1);

  const handleEvent = (e:ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    setCount(Number(e.target.value))
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
        <input type="text" onChange={handleEvent} />
        <FizzBuzz num={count} />
        {/* <FizzBuzzList num={num} /> */}
      </header>
    </div>
  )
}

export default App
