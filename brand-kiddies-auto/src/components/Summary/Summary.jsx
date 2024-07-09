import React from 'react'
import "./summary.css"
const Summary = () => {
  return (
    <div className='summary-container'>
        {/* top */}

        <div>
            <h3 className='sum'>Summary</h3>
            <div>
                {/* middle block */}
                <div>
                    <div className='summary-item'>
                        <p>Sub total</p>
                        <p>$270.00</p>
                    </div>

                    <div className='summary-item'>
                        <p>Estimated Delivery & handling</p>
                        <p>$40.00</p>
                    </div>

                    <div className='summary-item'>
                        <p>Estimated Taxes</p>
                        <p>$5.00</p>
                    </div>

                    
                </div>
                <div>
                    <p>Promo Code</p>
                    <input type="text" className='summary-input' placeholder='Enter yourr promo code ' />
                </div>

                <div className='summary-item'>
                        <p>Total</p>
                        <p>$315.00</p>
                    </div>
            </div>
        </div>

        {/* bootom */}
        <div>
            <button className='prod-button'>Checkout out your cart</button>
            <button className='btn-2'>Paypal</button>
        </div>
    </div>
  )
}

export default Summary