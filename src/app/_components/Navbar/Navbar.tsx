"use client"
import { cartContext } from '@/app/_Providers/CartContext'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import  { useContext } from 'react'

export default function Navbar() {
  
  
 
  
  
  function handlelogout(){
    signOut({redirect:true, callbackUrl:"/login"})
  }
 const {numOfCartItems}= useContext(cartContext)
   const session=useSession()
  return <>
 <nav>
    <div className="container py-6 flex justify-between items-center w-full md:w-[80%] mx-auto">
<div className="left">
<ul className='flex gap-4 items-center'>
    <li><Link href="/" className='font-bold text-2xl'><i className="text-green-400 fa-solid fa-cart-arrow-down"></i>FreshCart </Link></li>
    <li><Link href="/">Home </Link></li>
    <li className='relative'>
      <span className='bg-slate-500 text-white text-sm absolute -right-2 top-5 p-1 rounded'>{numOfCartItems}</span>
      <Link href="/cart">Carts </Link>
    
    </li>
    <li><Link href="/products">Products </Link></li>
    <li><Link href="/categories">Categories</Link></li>
    <li><Link href="/brands">Brands</Link></li>
    <li><Link href="/wishlist"><i className="fa-regular fa-heart"></i></Link></li>
</ul>
</div>
<div className="right">
<ul className='flex gap-4'>
    <li><Link href="https://www.instagram.com/"><i className='fa-brands fa-instagram'></i></Link></li>
    <li><Link href="https://www.facebook.com/"><i className='fa-brands fa-facebook'></i></Link></li>
    <li><Link href="https://www.tiktok.com/"><i className='fa-brands fa-tiktok'></i></Link></li>
    <li><Link href="https://twitter.com/"><i className='fa-brands fa-twitter'></i></Link></li>
    <li><Link href="https://www.linkedin.com/"><i className='fa-brands fa-linkedin'></i></Link></li>
    <li><Link href="https://www.youtube.com/"><i className='fa-brands fa-youtube'></i></Link></li>
    {session.data?<li><button onClick={handlelogout}>SignOut</button></li>:<>
     <li><Link href="/login">Login</Link></li>
    <li><Link href="/register">Register</Link></li>
    </>}
    
    
   
  
</ul>
</div>
    </div>
    <hr />
 </nav>
  </>
}
