import About from './components/about'
import Edu from './components/edu'
import Project from './components/project'
import Skills from './components/skills'
import Contact from './components/contact'
import './App.css'

function App() {

  return (
    <>
      <div className="App">
        <About />
        <Edu /> 
        <Skills />
        <Project />
        <Contact />
      </div>
    </>
  )
}

export default App
