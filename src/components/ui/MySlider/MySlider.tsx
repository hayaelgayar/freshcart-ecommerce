"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
const MySlider=(props:{imgList:string[],slidesPerView:number})=>{
    return(        <Swiper

      spaceBetween={0}
      slidesPerView={props.slidesPerView || 1}
      pagination={{clickable:true}}
    modules={[Autoplay,Pagination]}
    autoplay={{delay:2000}}
    >
{props.imgList.map((src,index)=>{
    return <>
          <SwiperSlide key={index}>
        <Image  width={1200}
            height={300}
            className="h-[300px] w-full object-cover" src={src} alt=''></Image>
      </SwiperSlide>
    </>
})}
     
  
    </Swiper>);
}
export default MySlider;