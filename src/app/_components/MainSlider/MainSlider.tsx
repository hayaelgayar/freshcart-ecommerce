"use client"

import MySlider from "@/components/ui/MySlider/MySlider";
import img1 from "../../../../public/images/blog-img-1.jpg"
import img2 from "../../../../public/images/blog-img-2.jpg"
import img3 from "../../../../public/images/blog-img-3.jpg"
import Image from 'next/image';


export default function MainSlider() {
  return <>
 <div className='p-4 md:w-[80%] container mx-auto flex'>
    <div className="w-3/4">
<MySlider imgList={[img1.src,img2.src,img3.src]} slidesPerView={1}/>

    </div>
    <div className="w-1/4">
    <Image className='h-[150]' src={img2} alt=''></Image>
    <Image className='h-[150]' src={img3} alt=''></Image>
    </div>
 </div>
  </>
}
