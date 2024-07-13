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
  <div className="plus-minus-button">
  <span className="minus" onClick={decrement}>-</span>
  {count}
  <span className="plus" onClick={increment}>+</span>
  </div>
  )
}

export default countButton