

import React from 'react'
import { getMyToken } from '../_actions/getMyToken'
import axios from 'axios'
import {jwtDecode} from 'jwt-decode'

export async function getUserOrder() {
    const token= await getMyToken()

const userData:any=jwtDecode(token as string)


    const {data}=await axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${userData.id}`,{
        headers:{
            token:token as string
        }
    })

return data
}


export default async function Allorders() {
  
  const orders:any[]=await getUserOrder()

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-slate-900">My Orders</h1>

      {orders.length === 0 ? (
        <p className="text-slate-500">You have no orders yet.</p>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order._id}
              className="border border-slate-300 rounded-lg p-4 bg-slate-50 "
            >
            
              <div className="flex justify-between items-center mb-3">
                <p className="font-medium text-slate-700">Order #{order.id}</p>
                <p className="text-sm text-slate-500">
                  {new Date(order.createdAt).toLocaleString()}
                </p>
              </div>

              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 mb-3 text-slate-700">
                <p>
                  <span className="font-medium">Payment:</span>{" "}
                  <span
                    className={`px-2 py-0.5 rounded text-slate-900`}
                  >
                    {order.isPaid ? "Paid" : "Not Paid"} ({order.paymentMethodType})
                  </span>
                </p>

                <p>
                  <span className="font-medium">Delivery:</span>{" "}
                  <span
                    className={`px-2 py-0.5 rounded text-slate-900`}
                  >
                    {order.isDelivered ? "Delivered" : "Pending"}
                  </span>
                </p>

                <p>
                  <span className="font-medium">Total:</span>{" "}
                  <span className="text-slate-500">${order.totalOrderPrice}</span>
                </p>
              </div>

              <p className="mb-2 text-slate-500">
                <span className="font-medium">Customer:</span>{" "}
                {order.user.name} - {order.user.phone}
              </p>

              <div>
                <p className="font-medium text-slate-700 mb-1">Items:</p>
                <ul className="list-disc list-inside text-slate-500">
                  {order.cartItems.map((item: any) => (
                    <li key={item._id || item.name}>
                      {item.name} - {item.count} x ${item.price}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
