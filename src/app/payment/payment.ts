"use server"

import axios from "axios"
import { getMyToken } from "../_actions/getMyToken"

export type shippingAddressType={
    shippingAddress:{
        details:string,
        phone:string,
        city:string
    }
}


export async function cashOrder(cartId:string,shippingAddress:shippingAddressType) {
    const token=await getMyToken()
    const {data}=await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/${cartId}`,{shippingAddress},{
        headers:{
            token:token as string
        }
    })
    return data
}
export async function visaOrder(cartId:string,shippingAddress:shippingAddressType) {
    const token=await getMyToken()
      const body = {
    city: shippingAddress.shippingAddress.city,
    phone: shippingAddress.shippingAddress.phone,
    details: shippingAddress.shippingAddress.details,
    url: "http://localhost:3000"
  };
    const {data}=await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}`,body,{
        headers:{
            token:token as string
        }
    })
    return data
}