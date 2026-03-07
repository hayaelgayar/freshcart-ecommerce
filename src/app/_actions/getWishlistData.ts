"use server"

import axios from "axios"
import { getMyToken } from "./getMyToken"

export async function getWishlistData() {
 const token=await getMyToken()
 if(!token){
    return null
 }
     try {
    const { data } = await axios.get(
      "https://ecommerce.routemisr.com/api/v1/wishlist",
      {
        headers: {
          token: token as string
        }
      }
    )

    return data
  } catch (error) {
    console.log(error)
    return null
  }
}