import React, {useState} from 'react'
import { BrowserRouter as Router , Routes  } from 'react-router-dom'
import "./App.css"
import Home from './Home'
import Nav from './Nav'
import Services from './Services'
import FComponent from './function'
import { CounterContext } from './CounterContext'


const App = () => {

  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter-1)
  }



  return (

    <div>
      Hello from main page

      <Router>
          <Routes path="/" component={Nav} />
          <Routes path="/home" component={Home} />
          <Routes path="/services" component={Services} />

      </Router>


        <div className="App border">
          <h1>App Component</h1>
          <h2>{counter}</h2>

          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>

          <CounterContext.Provider value={counter}>

          <FComponent />

          </CounterContext.Provider>

        </div>

    </div>
  )
}

export default App
