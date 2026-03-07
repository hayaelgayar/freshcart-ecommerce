import React from "react"
import ProductsList from "../productList/page"
import getAllProducts from "../api/getProducts"


export default async function Products() {
  const url = "https://ecommerce.routemisr.com/api/v1/products"
  const data=await getAllProducts(url)
   
    return <ProductsList data={data} />
}