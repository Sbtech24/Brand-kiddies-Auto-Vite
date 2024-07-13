import React from 'react'
import "./summary.css"
import { Link } from 'react-router-dom'

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
                        <p className='value'>Sub total</p>
                        <p className='price'>$270.00</p>
                    </div>

                    <div className='summary-item'>
                        <p className='value'>Estimated Delivery & handling</p>
                        <p className='price'>$40.00</p>
                    </div>

                    <div className='summary-item'>
                        <p className='value'>Estimated Taxes</p>
                        <p className='price'>$5.00</p>
                    </div>

                    
                </div>
                <div>
                    <p className='value summary-item'>Promo Code</p>
                    <input type="text" className='summary-input' placeholder='Enter your promo code ' />
                </div>

                <div className='summary-item'>
                        <p className='value'>Total</p>
                        <p className='price'>$315.00</p>
                    </div>
            </div>
        </div>

        {/* bootom */}
      
    </div>
  )
}

export default Summary