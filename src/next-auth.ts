import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";



export const nextAuthConfig : NextAuthOptions={
providers:[
    Credentials({
        name:"fresh cart",
        credentials:{
            email:{label:"email",type:"email"},
            password:{label:"password",type:"password"}
        },
        authorize:async function(credentials){
              const res= await fetch("https://ecommerce.routemisr.com/api/v1/auth/signin",{
                method:"POST",
                body:JSON.stringify(credentials),
                headers:{
                    "Content-Type":"application/json"
                }
              })
              

              const finalResponse=await res.json()
              console.log("LOGIN RESPONSE:", finalResponse)
              if(finalResponse.message!=="success") return null
       return {
        ...finalResponse.user,
        realTokenFromBackEnd:finalResponse.token
       }
            }
    })
]
,

pages:{
    signIn:"/login"
    ,signOut:"/home"
},
callbacks:{
jwt(params){
    if(params.user){
params.token.realTokenFromBackEnd=params.user.realTokenFromBackEnd
    }
    return params.token
},
session(params){
    return params.session
}
}
,
session:{
        strategy: "jwt",
    maxAge:60*60*24
}

}