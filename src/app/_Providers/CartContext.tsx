"use client"
import React, { createContext, useEffect, useState } from 'react'
import { getUserCart } from '../_actions/getCartData';


 export const cartContext= createContext({})


export default function CartContextProvider( {children}:{children:React.ReactNode}) {
  const [cartData, setcartData] = useState(null);
  const [numOfCartItems, setnumOfCartItems] = useState(0);
  const [cartId, setcartId] = useState(null);
  
  
 async function getData(){
const userDataCart=await getUserCart()
 if (!userDataCart) {
    setcartData(null)
    setnumOfCartItems(0)
    setcartId(null)
    return
  }

  setcartData(userDataCart.data)
  setnumOfCartItems(userDataCart.numOfCartItems)
  setcartId(userDataCart.cartId)

  }
  useEffect(function(){
    function flag(){
 getData()
    }
   
    flag()
  },[])
  
    return <cartContext.Provider value={{cartData,numOfCartItems,cartId,setcartData,setnumOfCartItems

  }}>
  
  
  {children}
  
  
  
  
  
  </cartContext.Provider>}
