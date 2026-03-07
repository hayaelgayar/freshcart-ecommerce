"use client"
import React, { useContext } from 'react'
import { cartContext } from '../_Providers/CartContext'
import { Product } from '@/types/productType'
import { updateCount } from './updateCount'
import { toast } from 'sonner'
import { clearCart, deleteItem } from './deleteItem'
import { useRouter } from "next/navigation"
import Link from 'next/link'
import Image from 'next/image'


export default function Carts() {
  const router = useRouter();


type cartDataItem={
  count:number,
  price:number
  ,product:Product
}
 
  const context = useContext(cartContext)

if (!context) {
  return <div>Loading...</div>
}

const { numOfCartItems, cartData, setnumOfCartItems, setcartData } = context
  
  async function  handleCountUpdate(productId: string,count:number){
  const res= await updateCount(productId,count)
  setcartData(res.data)
  setnumOfCartItems(res.numOfCartItems)
  toast.error("error")
  }
  
  async function handleDeleteItem(productId:string) {
    const res =await deleteItem(productId)
    setcartData(res.data)
  setnumOfCartItems(res.numOfCartItems)
  toast.error("error")
  }
  async function handleClear() {
    const res =await clearCart()
    console.log(res)
    setcartData(null)
  setnumOfCartItems(0)
  toast.error("error")
  }
  
  
  return <>
 <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-16">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
       
        <div className="lg:col-span-8 space-y-6">
         
           {cartData?.products?.map((item:cartDataItem)=>(
          <div key={item.product._id} className="bg-white rounded-xl shadow-sm p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
            
          
           <div className="flex items-center gap-6">
              <Image width={500} height={500}
                src={item.product.imageCover}
                alt="product"
                className="w-24 h-24 object-cover rounded-lg"
              />

              <div>
                <h2 className="font-semibold text-lg">{item.product.title}</h2>
                <p className="text-gray-500 text-sm">{item.product.brand.name}</p>
                <p className="text-gray-400 text-sm mb-3">{item.product.category.name}</p>

             
                <div className="flex items-center border rounded-md w-fit">
                  <button 
                   onClick={()=>handleCountUpdate(item.product._id,item.count-1)}       
                  className="px-3 py-1 text-lg font-semibold">
                    -
                  </button>
                  <span className="px-4">{item.count}</span>
                  <button 
                  
           onClick={()=>handleCountUpdate(item.product._id,item.count+1)}       
                  className="px-3 py-1 text-lg font-semibold">
                    +
                  </button>
                </div>
              </div>
             
            <div className="flex flex-col items-end gap-4">
              <span className="text-green-600 font-semibold text-lg">
                {item.price}
              </span>
              <button
              onClick={()=>handleDeleteItem(item.product._id)}
              className="text-red-500 text-sm cursor-pointer">
                Remove
              </button>
            </div>
            </div>

           
          </div>
          ))}

      
          <div className="flex justify-between items-center">
            <button onClick={() => router.push("/products")}  className="text-indigo-600 cursor-pointer">
              ← Continue Shopping
            </button>

            <button
            onClick={()=>handleClear()}
            className="border border-red-500 text-red-500 px-4 py-2 rounded-lg hover:bg-red-50 transition cursor-pointer">
              Clear Cart
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 h-fit lg:col-span-4">
          <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

          <div className="flex justify-between mb-4 text-gray-600">
            <span>Total Items</span>
            <span>{numOfCartItems}</span>
          </div>

          <div className="flex justify-between mb-6 font-semibold text-lg">
            <span>Total Price</span>
            <span className="text-indigo-600">{cartData?.totalCartPrice}</span>
          </div>

          <Link href={"/payment"}>
          <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition cursor-pointer">
            Checkout
          </button>
          </Link>

          <p className="text-xs text-gray-400 text-center mt-4">
            Taxes and shipping calculated at checkout
          </p>
        </div>
      </div>
    </div>
  
  
  </>
}
