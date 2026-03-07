import { LoginType } from "@/types/loginType"
import axios from "axios"
import { toast } from "sonner"


export  const login=async(data:LoginType)=>{
  try {
        console.log("Attempting login with:", { email: data.email })
    const res= await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signin",data)
     console.log("Login success:", res.data)
     toast.success("Welcome Back!",{position:'top-center'})
  return true
    } catch (error:any) {
      const errorMessage = error.response?.data?.message || "Invalid email or password"
    toast.error(errorMessage, { position: 'top-center' })
    return false
  }
}