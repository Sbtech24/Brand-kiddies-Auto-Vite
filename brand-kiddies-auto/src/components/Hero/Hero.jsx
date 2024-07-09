import React from 'react'
import "./hero.css"

const Hero = ({image}) => {
  return (
    <div className='hero-container'>
        <div className='left'>
            <h1>Luxury Rides for <br/> Little Drivers</h1>
            <p>Our kids' luxury automobiles are designed to offer an unparalleled driving experience that captivates both children and parents alike.</p>
            <button id='hero-button'>learn more</button>
            
        </div>
        <div className='right'>
            <img src={image} alt="" />
        </div>
    </div>
  )
}

export default Hero