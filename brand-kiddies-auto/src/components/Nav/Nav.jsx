import React from "react";
import logo from "../../assets/Logo.svg";
import arrow from "../../assets/Arrow.svg";
import account from "../../assets/Account.svg";
import "./nav.css";
import cart from "../../assets/cart.svg";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav>
      <div className="nav-container">
        <ul className="top-header-list">
          <Link to="/">
          <li>
            <img src={logo} alt="" />
          </li>
          </Link>
          <li>
            Categories <img src={arrow} className="white-arrow" alt="" />
          </li>
          <li>Deals</li>
          <li>What's New</li>
          <li>Delivery</li>
          <li>
        <div className="search-container">
            <input
              type="search"
              name=""
              placeholder="Search products"
              className="input"
              id=""
            />{" "}
            <button>
              <svg
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.53 20.47l-5.76-5.76A7.92 7.92 0 0 0 18 9a8 8 0 1 0-8 8 7.92 7.92 0 0 0 5.71-2.23l5.76 5.76a1 1 0 0 0 1.42-1.42zM10 16a6 6 0 1 1 6-6 6 6 0 0 1-6 6z" />
              </svg>
            </button>
            </div>
   
          </li>
          <li>
            <img src={account} className="white-arrow" alt="" /> Account
          </li>
         <Link to="/cart">
          <li>
            <img src={cart} className="white-arrow" alt="" />
            Cart
          </li>
          </Link> 
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
