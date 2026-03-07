"use client"

import { Button } from '@/components/ui/button'
import React, { useContext, useState } from 'react'
import { addItemToCart } from '../../addToCart'
import { toast } from 'sonner'
import { cartContext } from '../_Providers/CartContext'

export default function AddToCartBtn({ productId }: { productId: string }) {
    const [isLoading, setIsLoading] = useState(false)
const {setcartData,setnumOfCartItems}=useContext(cartContext)
    const handleAddItem = async () => {
        setIsLoading(true)
        try {
            const data = await addItemToCart(productId)
            
            if (data.status === "success") {
                toast.success("Product added to cart", { 
                    position: "top-center" 
                })
                setcartData(data.data)
                setnumOfCartItems(data.numOfCartItems)
            } else {
                toast.error(data.message || "Error adding product to cart", { 
                    position: "top-center" 
                })
                
            }
        } catch (error) {
            toast.error("Something went wrong", { 
                position: "top-center" 
            })
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }
    
    return (
        <Button 
            onClick={handleAddItem}  
            className='bg-green-800 text-white cursor-pointer' 
            variant="outline"
            disabled={isLoading}
        >
            <i className='fa-solid fa-plus'></i> 
            {isLoading ? ' Adding...' : ' Add to Cart'}
        </Button>
    )
}