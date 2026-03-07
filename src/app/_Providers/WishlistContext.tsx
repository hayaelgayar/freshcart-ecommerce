"use client"
import React, { createContext, useEffect, useState } from 'react'
import { getWishlistData } from '../_actions/getWishlistData';
import { getMyToken } from '../_actions/getMyToken';


 export const wishlistContext= createContext<any>(null)


export default function WishlistProvider( {children}:{children:React.ReactNode}) {
  const [wishlistData, setwishlistData] = useState<any[]>([]);;
  const [numOfWishItems, setnumOfWishItems] = useState(0);
  const [wishId, setwishId] = useState(null);
  
  
   const [token, setToken] = useState<string | null>(null); 

  useEffect(() => {
    const fetchToken = async () => {
      const userToken = await getMyToken();
      setToken( userToken as string);
    };
    fetchToken();
  }, []);

  
  useEffect(() => {
    async function getData() {
      const userWishlist = await getWishlistData();
      if (!userWishlist) {
        setwishlistData([]);
        setnumOfWishItems(0);
        setwishId(null);
        return;
      }

      setwishlistData(userWishlist.data || []);
      setnumOfWishItems(userWishlist.numOfWishItems);
      setwishId(userWishlist.wishId);
    }
    
    getData();
  }, [token]); 

  
    return <wishlistContext.Provider value={{wishlistData,numOfWishItems,wishId,setwishlistData,setnumOfWishItems

  }}>
  
  
  {children}
  
  
  
  
  
  </wishlistContext.Provider>}
