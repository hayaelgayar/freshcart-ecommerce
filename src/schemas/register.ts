import z, { string } from "zod";

export const registerSchema=z.object({
name: string().nonempty("name is required").min(3),
email: string().nonempty("email is required").email(),
password: string().nonempty("password is required").min(8),
rePassword: string().nonempty("rePassword is required").min(8),
phone: string().nonempty("phone is required")
}).refine((data) => data.password === data.rePassword, {
  message: "Passwords don't match",
  path: ["rePassword"], 
});

