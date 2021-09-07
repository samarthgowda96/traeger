import Product from './Product'
import {useEffect, useState} from 'react'
import Faqs from './Faqs'
const Products=({products,grillName})=>{
    //Declaring the state to set parsed data 
    const [newproducts,setNewProducts]= useState({})
    //Parsing the data based on Grill type
    useEffect(()=>{
        //Parsing the data based on Grill Type
        if(grillName==="Timberline Features - Tout Content"){
            const res=products.filter((product)=>(
            product['_meta'].schema==="https://traegergrills.com/data/contentTypes/toutContent.json")
            )
            setNewProducts(res)
            
        }else if(grillName==="Ironwood 650 Pellet Grill"){
           const res=products.filter((product)=>(
                product['_meta'].schema==="https://traegergrills.com/data/contentTypes/product.json"||product['_meta'].schema==="https://traegergrills.com/data/contentTypes/grillCapacityAndMeasurement.json")
                )
                setNewProducts(res)
        }
 },[grillName])
 
 return(
        <>
            {/* Based on the selection sending the newProducts as Props*/}
            {newproducts.length>1&& <Product newproducts={newproducts} grillName={grillName} products={products} />}
        </>
    )
}

export default Products;