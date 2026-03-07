import productsDetails from '@/app/api/productDetails'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import AddToCartBtn from '../AddToCartBtn'
import Image from 'next/image'
export default async function Details({params}:any) {
 const{details}=await params 
 const data=await productsDetails(details)
  return <>
 <div className='container w-[80%] mx-auto flex '>
    <div className="left w-full md:w-1/4">
<Image width={500} height={500} src={data.imageCover} alt="" />
  </div>
  <div className="right my-auto w-full md:w-3/4">
<Card className='p-4'>
  <CardHeader>
    <CardTitle className='font-bold '>{data.title}</CardTitle>
    <CardDescription>{data.description}</CardDescription>
    
  </CardHeader>
  <CardContent>
    <p className='line-clamp-1'>{data.category.name}</p>
  </CardContent>
  <CardFooter>
   <div className="flex justify-between w-full ">
     <h5>{data.price} EGP</h5>
    <p><i className='fa fa-star text-yellow-300'></i>{data.ratingsAverage}</p>

   </div>
  </CardFooter>
  <AddToCartBtn productId={data._id}/>
</Card>

  </div>

 </div>
  </>
}
