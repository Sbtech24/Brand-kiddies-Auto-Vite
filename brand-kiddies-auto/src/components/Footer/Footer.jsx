import React from 'react'
import logo from "../../assets/Logo.svg"
import facebook from "../../assets/Facebook.svg"
import instagram from "../../assets/instagram.svg"
import linkedin from "../../assets/linkedin.svg"
import twitter from "../../assets/twitter.svg"
import  "./footer.css"
const Footer = () => {
  return (
    <footer>
        <div className='footer-container'>
            <div >
                <ul>
                    <li><img src={logo} alt="" /></li>
                    <li className='bottom'>Discover the ultimate in kids'luxury automobiles </li>
                    <li>
                        <ul className='social-icons'>
                            <li><img src={facebook} alt="" /></li>
                            <li><img src={instagram} alt="" /></li>
                            <li><img src={linkedin} alt="" /></li>
                            <li><img src={twitter} alt="" /></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className='top'>Useful Links</li>
                    <li className='bottom'>Delivery</li>
                    <li className='bottom'>Account</li>
                    <li className='bottom'>Cart</li>
                    <li className='bottom'>Products</li>
                </ul>
            </div>
            <div className='spacing'>
            <ul>
                    <li className='top'>Category</li>
                    <li className='bottom'>Compatible</li>
                    <li className='bottom'>Jeep</li>
                    <li className='bottom'>Motorbike</li>
                    <li className='bottom'>Bicycle</li>
                </ul>
            </div>
            <div className='spacing'>
            <ul>
                    <li className='top'>Contact info</li>
                    <li className='bottom'>25marina street,Lagos island </li>
                    <li className='bottom'>Email-Kiddiesauto@gmail.com</li>
                    <li className='bottom'>Whatsapp- +234 456 753 8765</li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer