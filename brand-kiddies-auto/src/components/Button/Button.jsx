import React from 'react'
import "./button.css"
const Button = ({name}) => {
  return (
    <button className='custom1-button'>
        {name}
    </button>
  )
}

export default Button