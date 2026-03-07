import getAllProducts from "@/app/api/getProducts";
import ProductsList from "@/app/productList/page"
import React from "react"

export default async function BrandsPage({ params }: any) {

    const { id } = await params;
 const url = `https://ecommerce.routemisr.com/api/v1/products?brand=${id}`;
 const data=await getAllProducts(url)
 
  return <ProductsList data={data} />
}