import { Product } from "@/types/productType"


export default async function getAllProducts(url:any):Promise<Product[]>{

const response=await fetch(`${url}`,{method:"GET",cache:"force-cache"})
const {data}=await response.json()

if (!data) return [];
return data
}