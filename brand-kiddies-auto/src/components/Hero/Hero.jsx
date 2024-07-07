import React from 'react'
import "./hero.css"
import Button from '../Button/Button'
const Hero = ({image}) => {
  return (
    <div className='hero-container'>
        <div className='left'>
            <h1>Luxury Rides for Little Drivers</h1>
            <p>Our kids' luxury automobiles are designed to offer an unparalleled driving experience that captivates both children and parents alike.</p>
            {/* <Button name="learn more"  className='hero-button'/> */}
            <button className='hero-button'>learn more</button>
            <p></p>
        </div>
        <div className='right'>
            <img src={image} alt="" />
        </div>
    </div>
  )
}

export default Hero