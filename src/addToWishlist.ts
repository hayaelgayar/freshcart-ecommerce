"use server"

import axios from "axios"
import { getMyToken } from "./app/_actions/getMyToken"

export async function addToWishlist(productId: string) {
    try {
      
        const token = await getMyToken() as string
        
        if (!token) {
            return { 
                status: "error", 
                message: "Please login first" 
            }
        }

        const { data } = await axios.post(
            "https://ecommerce.routemisr.com/api/v1/wishlist",
            { productId: productId },
            {
                headers: {
                    token: token
                }
            }
        )

        return data
    } catch (error) {
        console.error("Error adding to wishList:", error)
         console.log(error)
        return { 
            status: "error", 
            message: "Failed to add to wishList" 
            
        }
       
    }
}