import React from "react";
import "./payement.css"


const Payement = () => {
  return (
    <div className='payement-container'>
      <h2 className="padding">Payement</h2>

      <div>
        <div>
          <div>
            <p className="blk">Billing country/Region</p>
            {/* <img src="" alt="" /> */}
          </div>
          <p>Nigeria <span>Edit</span></p>
          <div className="margin-top">
            <input type="checkbox" id="gift" name="gift"/>
            <label for="gift">
              Do you have a gift card, product voucher or promo code?
            </label>
          </div>
        </div>

        <div>
            <h3>Select payment Method</h3>
            <div >
            <input
            type="radio"
            id="credit or debit card"
            name="credit or debit card "
            value="credit or debit card "
            className="block"
          />
          <label for="credit or debit card">credit or debit card </label>

          <input
            type="radio"
            id="paypal"
            name="paypal"
            value="paypal"
            className="block"
          />
          <label for="paypal">paypal</label>

          <input type="radio" id="GooglePay" name="GooglePay" value="mail"  className="block"/>
          <label for="GooglePay">GooglePay</label>
            </div>
       
        </div>
        <div>
            <div className="add-cart">
                <h3>Add card</h3>
                <div className="input-container">
                    <label for="">Card Number </label>
                    <input type="text" name="Card Number" className='payement-input' id="Card Number" />

                    <label for="">Expiration Number</label>
                    <input type="text" name="Expiration Number" className='payement-input' id="Expiration Number" />

                    <label for="">CVV</label>
                    <input type="text" name="CVV" className='payement-input' id="CVV" />

                </div>
            </div>
            <div>
                <input type="checkbox" name="address" id="address" />
                <label for="address">Billing address same as shipping.</label>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Payement;
