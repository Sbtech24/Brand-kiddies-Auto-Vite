import React from 'react'
import "./details.css"
import Button from '../Button/Button'
const Details = () => {
  return (
    <div className='detail-box'>
        <h3>Enter your details</h3>
        <div className='input-grid'>
            <input type="text" className='input1 summary-input' name="First name" id="" placeholder='First name' />
            <input type="text" className='input2 summary-input' name="Last name" id="" placeholder='Last name' />
            <input type="email" className='input3 summary-input' name="Email address" id="" placeholder='Email address' />
            <input type="text" className='input4 summary-input' name="Address" id="" placeholder='Address'/>
            <input type="text" className='input5 summary-input' name="City" id="" placeholder='City'/>
            <input type="number" className='input6 summary-input' name="Post code" id="" placeholder='Post code' />
        </div>
        <div className='div'>
        <Button name="Save and continue" />
        </div>
        
    </div>
  )
}

export default Details