import React from 'react';
import "./header.css"

const Header = () => {
  return (
    <div>
        <header>
            <div className='top-header'>
                <ul className='top-header-list'>
                    <li >+234903874698</li>
                    <li>Get 10% off on selected items | Shop Now </li>
                   <div className='header-right'>
                    <li>Eng</li>
                    <li>Location</li>
                    </div>
                </ul>
            </div> 
        </header>
    </div>
  )
}

export default Header