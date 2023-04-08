import React,{useState} from 'react'

// State
// Action
// Reducer

const Counter = () => {
    // State
    const [counter, setCounter] = useState(0)

    // Action
    const increment = () => {
        // Reducer 
        setCounter(counter+1)
    }
  return (
    <>
    {/* View */}
    {counter}
    <button
    
    onClick={increment}
    >Counter</button>
    </>

  )
}

export default Counter