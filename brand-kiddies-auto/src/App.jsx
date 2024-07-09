import React from 'react'
import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom'
import Homepage from './pages/HomePage/HomePage'
import ProductDetail from './pages/ProductDetail/ProductDetail'
import MainLayout from './layouts/MainLayout'
import Cart from './pages/Cart/Cart'
import Checkout from './pages/Checkout/Checkout'
import "./App.css"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element ={<MainLayout/>}>
      <Route index element = {<Homepage/>}/>
      <Route path='/product' element = {<ProductDetail/>}/>
      <Route path='/cart' element = {<Cart/>}/>
      <Route path='/checkout' element = {<Checkout/>}/>
    </Route>
  )
)

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App