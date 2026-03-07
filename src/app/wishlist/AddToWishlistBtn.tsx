"use client"

import { Button } from '@/components/ui/button'
import  { useContext, useState } from 'react'
import { toast } from 'sonner'
import { addToWishlist } from '@/addToWishlist'
import { wishlistContext } from '../_Providers/WishlistContext'
import { getMyToken } from '../_actions/getMyToken'
import axios from 'axios'

export default function AddToWishlistBtn({ productId }: { productId: string }) {
const {setwishlistData,setnumOfWishItems,wishlistData}=useContext(wishlistContext)
const [clicked, setClicked] = useState(() => 
    wishlistData?.some((item:any) => item._id === productId) || false
)
 async function deleteItem(productId:string) {
    const token=await getMyToken()
const {data}=await axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,{
    headers:{
        token:token as string
    }
})
return data

}


const handleAddItem = async () => {
      const token = await getMyToken()
  if (!token) {
    toast.error("Please login first", { position: "top-center" })
    return
  }

const currentlyClicked = clicked
    setClicked(!clicked) 
setIsLoading(true)

try {

if(currentlyClicked){

const data = await deleteItem(productId)

setwishlistData(data.data)
setnumOfWishItems(data.numOfWishItems)

toast.success("Removed from wishlist",{position:"top-center"})

}else{

const data = await addToWishlist(productId)

setwishlistData(data.data)
setnumOfWishItems(data.numOfWishItems)

toast.success("Added to wishlist",{position:"top-center"})

}

} catch (error) {
 setClicked(currentlyClicked)
toast.error("Something went wrong",{position:"top-center"})
console.log(error)

} finally {

setIsLoading(false)

}

}
    return (
        <Button 
            onClick={handleAddItem}  
            className=' cursor-pointer text-black bg-transparent' 
        >
            <i className={`fa-heart ${clicked ? "fa-solid text-slate-600" : "fa-regular text-slate-600"}`}></i>
        </Button>
    )
}