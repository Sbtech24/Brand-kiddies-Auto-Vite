import React from 'react'
import productData from "../../data.json"
import { useState } from 'react'
import Card from "../Card/Card"
import "./product.css"

const Product = () => {
    const [data,setData] = useState(productData)

  return (
        <div className='product-container'>
        {data.map((item)=>{
            return(
            <div >
            <Card key={item.id} name={item.name} car={item.image}  />
            </div>
            )     
        })}
        </div>
  )

    
  
}

export default Product