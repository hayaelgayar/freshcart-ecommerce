import React from "react"
import Link from "next/link";
import Image from "next/image";



async function getBrandNames() {
  const response = await fetch(
    `https://ecommerce.routemisr.com/api/v1/brands`,
    { cache: "force-cache" }
  )
  const { data } = await response.json()
  return data
}


export default async function Brands() {
  const data = await getBrandNames()

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-10 text-center">Shop by Brand</h1>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.map((item: any) => (
          <Link
            key={item._id}
            href={`/brands/${item._id}`}
            className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <Image width={500} height={500}
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <h2 className="text-center font-semibold text-lg p-2">{item.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  )
}