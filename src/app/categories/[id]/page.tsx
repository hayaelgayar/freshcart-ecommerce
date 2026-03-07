import getAllProducts from "@/app/api/getProducts";
import ProductsList from "@/app/productList/page"


export default async function CategoryPage({ params }: any) {

    const { id } = await params;
 const url = `https://ecommerce.routemisr.com/api/v1/products?category[in]=${id}`;
 const data=await getAllProducts(url)
 
  return <ProductsList data={data} />
}