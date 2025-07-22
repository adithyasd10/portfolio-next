import Image from 'next/image';
import React from 'react'

type BentoGridProps ={
    width?:string,
    height?:string,
    name:string,
    image:string
};

const BentoGrid = ({width='100%', height='auto',name,image}:BentoGridProps) => {
  return (
    <div className='flex justify-center items-center border border-gray-500 m-2 p-4 rounded-md w-full h-40 hover:scale-90 transition-all duration-500 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-950'
    style={{width,height}}>
        <div className='flex flex-roe justify-center items-center w-full mx-auto max-w-screen h-full relative gap-4'>
            <h1 className='font-bold font-stretch-130% text-gray-400 hover:text-white text-2xl md:text-3xl'>{name}</h1>
            <Image src={image} alt={image} width={60} height={70}></Image>
        </div>
    </div>
  )
}

export default BentoGrid
