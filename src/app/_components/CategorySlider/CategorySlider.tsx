import getAllCategories from '@/app/api/getCategories'
import MySlider from '@/components/ui/MySlider/MySlider'
import React from 'react'

export default async function CategorySlider() {
    const data=await getAllCategories();
const dataImages=data.map((category)=>{
    return category.image
})

  return<div className='w-[80%] mx-auto my-10'>
  
 
  <MySlider imgList={dataImages} slidesPerView={7}/>
  </div>
}
