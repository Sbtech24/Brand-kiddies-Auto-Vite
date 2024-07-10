import React from 'react'
import Summary from '../../components/Summary/Summary'
import favorite from "../../assets/favorite.svg"
import car from "/product/pobo jeep 1.svg";
import "./cart.css"
const Cart = () => {
  return (
    <div  >
        <div >
            <h1>cart</h1>
            <div className='cart-container'>
                <div className='cart-left'>
                    <div>
                        {/* <img src={favorite} alt="" /> */}
                        <img src={car} alt="" />
                    </div>
                    <div >
                        <div>
                            <h3>Merces Benz Cls </h3>
                            <p>$270.00</p>
                        </div>
                        <div>
                            <p>battery operated ride </p>
                            <p> Age 1-3 years</p>
                            <p>Colors black</p>
                        </div>
                        <div>
                            <div>
                                <img src="" alt="" />
                                <img src="" alt="" />
                            </div>
                            <div>
                                <button>button</button>

                            </div>
                        </div>
                    </div>
                </div>
                <Summary/>
            </div>
        </div>
        
        
    </div>
  )
}

export default Cart