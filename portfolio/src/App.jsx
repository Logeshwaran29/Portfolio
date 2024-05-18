import { useState } from 'react'
import About from './components/about'
import Edu from './components/edu'
import './App.css'

function App() {

  return (
    <>
      <div className="App">
        <div className="nav">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Education</li>
            <li>Skills</li>
            <li>Contact</li>
          </ul>
        </div>
        <About />
        <Edu />
      </div>
    </>
  )
}

export default App
