import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter ]= useState(0)

  // let counter = 15;
  const addValue = () => {
    if(counter >= 25) {
      alert("Counter Value Can't be more than 25")
      return;
    }
    setCounter(counter + 1)
  }

  const subtractValue = () => {
    if(counter <= 0) {
      alert("Counter Value Can't be less than 0")
      return;
    }
    setCounter(counter - 1)
  }

  return (
    <>
    <h1>Counter App</h1>
    <h2>Counter Value : {counter}</h2>
    <button onClick={addValue}>Add Vlaue</button>
    <br />
    <button onClick={subtractValue}>Subtract Value</button>
    </>
  )
}

export default App
