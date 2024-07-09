import React from 'react'
import Hero from "../../components/Hero/Hero"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import Button from "../../components/Button/Button"
import "./homepage.css"
import car from "../../assets/Jeep.svg"
import Nav from '../../components/Nav/Nav'
import Product from '../../components/Product/Product'

const HomePage = () => {
    return (
      <div className='container'>
        <Hero image={car}/>
        <div className='secondary-container'>
        <main>
          <section className='filter-section' >
            <div className='button-left'>
              <Button name="Compactible"/>
              <Button name="Jeep"/>
              <Button name="Motorbike"/>
              <Button name="Bicycle"/>
              <Button name="Brand"/>
            </div>
            <div>
              <Button name="Sort By"/>
            </div>
          </section>
  
          <div>
            <div>
              <div>
                <img src="" alt="" />
                {/* <p>FlashSale</p> */}
                <img src="" alt="" />
              </div>
              <div>
                <img src="" alt="" />
              </div>
            </div>
            <div>
              <div></div>
            </div>
          </div>
          <section>
            <div className="product">
              <h4>Today's best deal for you </h4>
              <section>
                <Button name="Best Seller"/>
                <Button name="special discount"/>
                <Button name="official store"/>
                <Button name="Coveted product"/>
              </section>
            </div>
            <div>
            <div>
              {/* <Card/> */}
              
            </div>
            <div>
              <Product/>
            </div>
            </div>
            
          </section>
  
        </main>
      
        </div>
      </div>
    )
  }

export default HomePage