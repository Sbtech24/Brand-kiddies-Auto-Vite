import React from 'react'
import Header from '../components/Header/Header'
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
        <Header/>
        <Nav/>
        <Outlet/>
        <Footer/>
        
    </>
  )
}

export default MainLayout