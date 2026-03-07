import z, { string } from "zod";

export const loginSchema=z.object({
email: string().nonempty("email is required").email(),
password: string().nonempty("password is required").min(8)
})

