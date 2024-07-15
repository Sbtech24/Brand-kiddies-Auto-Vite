import React from "react";
import Summary from "../../components/Summary/Summary";
import favorite from "../../assets/favorite.svg";
import car from "/product/pobo jeep 1.svg";
import "./cart.css";
import { Link } from "react-router-dom";
import paypal from "/paypal.svg";
import CountButton from "../../components/CountButton/CountButton";
import del from "/delete.svg"


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
              <div className="flex">
                <h3 className="light">Merces Benz Cls </h3>
                <p className="blk">$270.00</p>
              </div>
              <div className="padding">
                <p className="padding">battery operated ride </p>
                <p className="padding"> Age 1-3 years</p>
                <p className="padding">Colors black</p>
              </div>
              <div>
                {/* <div>
                  <img src="" alt="" />
                  <img src="" alt="" />
                </div> */}
                <div className="flex padding">
                  <button><img src={del} alt="" /></button>
                  <div><CountButton/></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="summary-wrapper">
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
