import React from "react";
import Summary from "../../components/Summary/Summary";
import Payement from "../../components/PaymentBox/Payement";
import Details from "../../components/Details/Details";
import "./checkout.css"
const Checkout = () => {
  return (
    <div className="checkout-container">
      <h1>Checkout</h1>

      <div className="top-box">
        <div className="order-container">
          <div className="order">
            <h2>How would you like to get your order?</h2>
            <div className="flex">
              <button className="prod-button">Delivery</button>
              <button className="prod-button custom-button ">Cash on Delivery</button>
            </div>
          </div>
          <Details />
        </div>
        <div>
          <Summary />
        </div>
      </div>

      <Payement />
    </div>
  );
};

export default Checkout;
