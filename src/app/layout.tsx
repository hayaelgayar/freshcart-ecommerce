
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../../node_modules/@fortawesome/fontawesome-free/css/all.min.css"
import Navbar from "./_components/Navbar/Navbar";
import { Toaster } from "@/components/ui/sonner";
import MySessionProvider from "./_Providers/MySessionProvider";
import CartContextProvider from "./_Providers/CartContext";
import WishlistProvider from "./_Providers/WishlistContext";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
         suppressHydrationWarning={true}
      >
<MySessionProvider>
 <CartContextProvider>
    <WishlistProvider>
  <Navbar/>
        {children}


        <Toaster/>

       </WishlistProvider>
 </CartContextProvider>
</MySessionProvider>
        
 
      
      </body>
     
    </html>
  );
}
