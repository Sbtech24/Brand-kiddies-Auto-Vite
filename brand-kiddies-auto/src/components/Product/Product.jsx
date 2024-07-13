import React from 'react'
import productData from "../../data.json"
import { useState } from 'react'
import Card from "../Card/Card"
import "./product.css"
import { Link } from 'react-router-dom'

const Product = () => {
    const [data,setData] = useState(productData)
    const [info,setInfo] = useState(null)

    const fetchData=async()=>{
        const response = await fetch("https://timbu-get-all-products.reavdev.workers.dev/?organization_id=31903eef72364830901d8c7fd5b390f4&reverse_sort=false&page=1&size=10&Appid=Y0CX1SH7JXDWUTR&Apikey=3c0b552c3fe44aeaa5fa696f08d0435820240713202814541751")
        const prodData = await response.json()
        console.log(prodData)
    }

        fetchData()
    // 3c0b552c3fe44aeaa5fa696f08d0435820240713202814541751
    
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