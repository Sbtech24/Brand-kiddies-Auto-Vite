import React from 'react'
import logo from "../../assets/Logo.svg"
const Nav = () => {
  return (
    <nav>
    <ul className='top-header-list'>
      <li><img src={logo} alt="" /></li>
      <li>Categories</li>
      <li>Deals</li>
      <li>What's New</li>
      <li>Delivery</li>
      <li><input type="search" name="" placeholder='Search products' id="" /></li>
      <li>Account</li>
      <li>Cart</li>
    </ul>
  </nav>
  )
}

export default Nav