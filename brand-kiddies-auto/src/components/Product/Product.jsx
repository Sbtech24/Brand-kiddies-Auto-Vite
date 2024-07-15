import React, { useEffect } from 'react'
import productData from "../../data.json"
import { useState } from 'react'
import Card from "../Card/Card"
import "./product.css"
import { Link } from 'react-router-dom'
import axios from "axios"





const fetchData=(page)=>{
    const res = axios.get("https://timbu-get-all-products.reavdev.workers.dev/",{
        params:{
            organization_id: '31903eef72364830901d8c7fd5b390f4',
            reverse_sort: false,
            page: page,
            size: 10,
            Appid: 'Y0CX1SH7JXDWUTR',
            Apikey: '3c0b552c3fe44aeaa5fa696f08d0435820240713202814541751',
        }
    })
    return res 
}



const Product = () => {
    const [productData,setProductData] = useState([])
    const [page,setPage] = useState(1)

    useEffect(()=>{
        const getProduct = async ()=>{
            const itemdata = await fetchData(page)
            console.log(itemdata.data.items)
            setProductData(itemdata?.data.items)
        }
        getProduct()
    },[page])
    

    // const fetchData=async()=>{
    //     const response = await fetch("https://timbu-get-all-products.reavdev.workers.dev/?organization_id=31903eef72364830901d8c7fd5b390f4&reverse_sort=false&page=1&size=10&Appid=Y0CX1SH7JXDWUTR&Apikey=3c0b552c3fe44aeaa5fa696f08d0435820240713202814541751")
    //     const prodData = await response.json()
    //     console.log(prodData)
    // }

    //     fetchData()
    // 3c0b552c3fe44aeaa5fa696f08d0435820240713202814541751
    



  return (
        <div className='product-container'>
        {productData.map((item)=>{
            return(
            <div >
                <Link to="/product">
                <Card key={item.id} name={item.name} car={`https://api.timbu.cloud/product/${item.photos[0]?.url}`} height={160} alt={item.name} />
                </Link>
            
            </div>
            )     
        })}
        </div>
  )

    
  
}

export default Product