import React from 'react'
import Hero from "./components/Hero/Hero"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Button from "./components/Button/Button"
import "./App.css"
import car from "./assets/Jeep.svg"
import Nav from './components/Nav/Nav'
const App = () => {
  return (
    <div className='container'>
      <Header/>
      <div className='secondary-container'>
        <Nav/>
      <Hero image={car}/>
      <main>
        <section className='filter-section' >
          <div>
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
              <p>FlashSale</p>
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
          <div>
            <p>Today's best deal for you </p>
            <div>
              <Button/>
              <Button/>
              <Button/>
              <Button/>
            </div>
          </div>
          <div></div>
          <div></div>
          <div></div>
        </section>

        <div>
          <div>
            <div>
              <h3>Your recent search</h3>
              <p>Kiddies Jump</p>
            </div>
            <div><p>arrows</p></div>
          </div>
          <div>
            <p>card component</p>
          </div>
        </div>


      </main>
      <Footer/>
      </div>
    </div>
  )
}

export default App