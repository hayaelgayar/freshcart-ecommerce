import { RegisterType } from "@/types/registerType"
import { toast } from "sonner"

export const register = async (data: RegisterType) => {
  try {
       console.log("Sending data:", data);
    const res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signup", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })

    const finalData = await res.json()
       console.log("API Response:", finalData);

    if (!res.ok) {
      toast.error(finalData.message, { position: "top-center" })
      return false
    }

  
    toast.success("User added successfully", { position: "top-center" })
    return true

  } catch (error: any) {
     console.error("Error:", error);
    toast.error(error.message || "Something went wrong", { position: "top-center" })
    return false
  }
}