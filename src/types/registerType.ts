import { registerSchema } from "@/schemas/register";
import z from "zod";

export type RegisterType=z.infer<typeof registerSchema>