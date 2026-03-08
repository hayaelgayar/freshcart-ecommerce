"use server";

import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export async function getMyToken() {
  console.log(process.env.env);
  const myCookies = await cookies();
  const isLocal = process.env.env=="local";
  const TokenFromCookies = myCookies.get(
    isLocal ? "next-auth.session-token" : "__Secure-next-auth.session-token",
  )?.value;
  console.log((await cookies()).getAll());
  if (!TokenFromCookies) {
    return null;
  }

  const decodedToken = await decode({
    token: TokenFromCookies,
    secret: process.env.NEXTAUTH_SECRET!,
  });

  return decodedToken?.realTokenFromBackEnd;
}
