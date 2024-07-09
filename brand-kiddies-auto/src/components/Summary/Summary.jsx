import React from 'react'

const Summary = () => {
  return (
    <div>
        {/* top */}

        <div>
            <h3>Summary</h3>
            <div>
                {/* middle block */}
                <div>
                    <div>
                        <p>Subtotoal </p>
                        <p>$270.00</p>
                    </div>

                    <div>
                        <p>Estimated Delivery & handling</p>
                        <p>$40.00</p>
                    </div>

                    <div>
                        <p>Estimated Taxes</p>
                        <p>$5.00</p>
                    </div>

                    
                </div>
                <div>
                    <p>Promo Code</p>
                    <input type="text" placeholder='Enter yourr promo code ' />
                </div>

                <div>
                        <p>Total</p>
                        <p>$315.00</p>
                    </div>
            </div>
        </div>

        {/* bootom */}
        <div>
            <button>Checkout out yyour cart</button>
            <button>Paypal</button>
        </div>
    </div>
  )
}

export default Summary