import React from "react";
import Summary from "../../components/Summary/Summary";
import favorite from "../../assets/favorite.svg";
import car from "/product/pobo jeep 1.svg";
import "./cart.css";
import { Link } from "react-router-dom";
import paypal from "/paypal.svg"
const Cart = () => {
  return (
    <div>
      <div>
        <h1>cart</h1>
        <div className="cart-container">
          <div className="cart-left">
            <div>
              {/* <img src={favorite} alt="" /> */}
              <img src={car} alt="" />
            </div>
            <div>
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
          
          <div>
          <Summary />
            <Link to="/checkout">
              <button className="prod-button">Checkout out your cart</button>
            </Link>
            <button className="btn-2"><img src={paypal} classname="paypal" width={80} alt="" /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
