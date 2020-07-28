import React from 'react'
import logo from './logo.svg'
import './App.css'
import { FizzBuzz } from './components/FizzBuzz'
import { FizzBuzzList } from 'components/FizzBuzzList'

function App() {
  let num = 11
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
        <FizzBuzz num={num} />
        <FizzBuzzList num={num} />
      </header>
    </div>
  )
}

export default App
