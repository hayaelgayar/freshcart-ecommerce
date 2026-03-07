"use client"
import { useContext } from 'react'
import { wishlistContext } from '../_Providers/WishlistContext'
import ProductsList from '../productList/page'

export default function Wishlist() {
    const context=useContext(wishlistContext)
    if (!context) {
  return <div>Loading...</div>
}

const { wishlistData} = context
 return <ProductsList data={wishlistData} />
}
