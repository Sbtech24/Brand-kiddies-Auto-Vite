import React from 'react'
import "./card.css"
import yellowCar from "../../assets/yellow_car.svg"
import favorite from "../../assets/favorite.svg"
import cart from "../../assets/cart2.svg"


const Card = ({name,car}) => {
    
  return (
   
    <div className='card-container'>
        <div className='card-top'>
                <img src={favorite} className='favorite-icon' alt="" />    
                <img src={car} alt="" />
        </div>
        <div className='card-bottom'>
            <div className='card-bottom-left'>
                <h4>{name}</h4>
                <div className="rating">★★★★☆<span>(54)</span></div>
                <div className='card-price'>
                    <p className='price'>$101.00</p>
                    <span>$101.00</span>
                </div>
            </div>
            <div className="card-bottom-right">
               <img src={cart} className='favorite-icon' alt=""/>
            </div>
        </div>
    </div>
  )
}

export default Card