import { Category } from "@/types/productType"


export default async function getAllCategories():Promise<Category[]>{

const response=await fetch(`https://ecommerce.routemisr.com/api/v1/categories`,{method:"GET",cache:"force-cache"})
const {data}=await response.json()
return data
}