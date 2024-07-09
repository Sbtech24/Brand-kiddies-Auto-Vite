import React from 'react'
import "./countbutton.css"
import { useState } from 'react'
const countButton = () => {
    const [count,setCount] = useState(0)
    const increment =()=>{
        setCount(count+1)
    }
    const decrement =()=>{
        setCount(count- 1)
    }
    
  return (

    <div className='count-button-container'>
        <button className='count-button' onClick={decrement}>-</button>
        <p>{count}</p>
        <button className='count-button' onClick={increment}>+</button>
    </div>
  )
}

export default countButton