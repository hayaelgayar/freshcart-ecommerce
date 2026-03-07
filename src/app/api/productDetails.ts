export default async function productsDetails(details:any){

const res=await fetch(`https://ecommerce.routemisr.com/api/v1/products/${details}`,{method:"GET",cache:"force-cache"})
const {data}=await res.json()
return data
}