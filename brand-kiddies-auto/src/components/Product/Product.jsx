import React from 'react'
import productData from "../../data.json"
import { useState } from 'react'
import Card from "../Card/Card"
import "./product.css"
import { Link } from 'react-router-dom'

const Product = () => {
    const [data,setData] = useState(productData)

  return (
        <div className='product-container'>
        {data.map((item)=>{
            return(
            <div >
                <Link to="/product">
                <Card key={item.id} name={item.name} car={item.image}  />
                </Link>
            
            </div>
            )     
        })}
        </div>
  )

    
  
}

export default Product