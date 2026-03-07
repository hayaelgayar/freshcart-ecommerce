import { loginSchema } from "@/schemas/login";
import z from "zod";

export type LoginType=z.infer<typeof loginSchema>