import { nextAuthConfig } from "@/next-auth";
import NextAuth from "next-auth";

const nextHandler=NextAuth(nextAuthConfig);

export {nextHandler as GET,nextHandler as POST}