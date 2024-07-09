import React from 'react';
import "./header.css"
import arrow from "../../assets/White_arrow.svg"
const Header = () => {
  return (
    <div>
        <header>
            <div className='top-header'>
                <ul className='top-header-list'>
                    <li >+234903874698</li>
                    <li id='li2'>Get 10% off on selected items | Shop Now </li>
                   <div className='header-right'>
                    <li>Eng <img src={arrow}className='white-arrow' alt="" /></li>
                    <li>Location <img src={arrow} className='white-arrow' alt="" /></li>
                    </div>
                </ul>
            </div> 
        </header>
    </div>
  )
}

export default Header