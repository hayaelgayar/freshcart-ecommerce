
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from 'next/link'
import Image from 'next/image'
import { Product } from '@/types/productType'
import AddToCartBtn from '../products/AddToCartBtn'
import AddToWishlistBtn from '../wishlist/AddToWishlistBtn'


export default function ProductsList({ data}:any) {

 if (!data || data.length === 0) {
    return <p className="text-center mt-10">No products found </p>;
  }
console.log(data)
  return<>
  <br /><br />
 <div className=" mx-auto md:w-[80%]">
 
  <div className='flex flex-wrap justify-center'>
   {data.map((product:Product)=>{
    return<Card  key={product._id} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2 m-3  '>
<AddToWishlistBtn productId={product._id}/>
<Link href={`/products/${product._id}`}>
      <div className='p-4'>
  <CardHeader>
    <CardTitle><Image width={150} height={150} src={product.imageCover} alt="" /></CardTitle>
    <CardDescription>{product?.category?.name}</CardDescription>
    
  </CardHeader>
  <CardContent>
    <p className='font-bold line-clamp-1'>{product.title}</p>
  </CardContent>
  <CardFooter>
   <div className="flex justify-between w-full ">
     <h5>{product.price} EGP</h5>
    <p><i className='fa fa-star text-yellow-300'></i>{product.ratingsAverage}</p>

   </div>
  </CardFooter>
 
</div>
</Link>
 <AddToCartBtn productId={product._id}/>
    </Card>
  })}
 </div>
 </div>
  </>
}
