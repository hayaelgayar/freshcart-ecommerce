import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'


export default async function proxy(req:NextRequest) {
    const jwt=await getToken({req})
  if(jwt!=null){
    return NextResponse.next()
  }
  return NextResponse.redirect("http://localhost:3000/login")
}
export const config={
    matcher:["/cart","/order"]
}