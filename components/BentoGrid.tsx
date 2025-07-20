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
    <div className='flex justify-center items-center border border-gray-500 m-2 p-4 rounded-md w-full h-40 hover:scale-90 transition-all duration-500'
    style={{width,height}}>
        <div className='flex flex-row justify-center items-center'>
            <h1>{name}</h1>
      <Image src={image} alt='image' width={10} height={10}/>
        </div>
    </div>
  )
}

export default BentoGrid
