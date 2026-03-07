"use server"

import { decode } from "next-auth/jwt"
import { cookies } from "next/headers"

export async function getMyToken() {
    const myCookies = await cookies()
     const TokenFromCookies =
        myCookies.get("next-auth.session-token")?.value 
    console.log((await cookies()).getAll())
   if (!TokenFromCookies) {
    return null
}
    
    const decodedToken = await decode({ 
        token: TokenFromCookies, 
        secret: process.env.NEXTAUTH_SECRET! 
    })
    
    return decodedToken?.realTokenFromBackEnd
}