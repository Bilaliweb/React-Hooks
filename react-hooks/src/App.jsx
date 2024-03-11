import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import State from './usestate/state'

function App() {

  return (
    <>
      <div>
        <a>
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p>
        Here is the very basic implementation of React.useState()
      </p>
      {/**
       * Here names for buttons are set
       */}
      <State button1="Click to Increase" button2="Click to Decrease"/>
    </>
  )
}

export default App
