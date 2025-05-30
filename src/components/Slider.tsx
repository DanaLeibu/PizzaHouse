"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image'

const data = [
    {
        id:1,
        title: "always fresh & always hot",
        image: "/slide1.png",
    },
    {
        id:2,
        title: "We deliver all across the north",
        image: "/slide2.png", 
    },
    {
        id:3,
        title: "The best pizza to share with your family",
        image: "/slide3.jpg",
    },
];

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    // useEffect(()=>{
    //     const interval = setInterval(
    //         ()=>setCurrentSlide(prev=>(prev === data.length-1 ? 0 : prev+1)),2000)
    //     return ()=> clearInterval(interval)
    // },[])
  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50">
        <div className="flex-1 flex items-center justify-center flex-col gap-8 text-red-500 font-bold">
            <h1 className="text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl">
                {data[currentSlide].title}
            </h1>
            <button className="bg-red-500 text-white py-4 px-8">Order Now</button>
        </div>
        <div className="w-full flex-1 relative">
            <Image src={data[currentSlide].image} alt="" fill className='object-cover'/>
        </div>
    </div>
  )
}

export default Slider