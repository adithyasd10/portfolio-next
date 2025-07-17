import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type CardsProps = {
  title:string
  description:string
  image:string
  link:string   
  link1:string 
}

const Cards = ({title,description,image,link,link1}: CardsProps) => {
  return (
     <div className='flex flex-col justify-center items-center bg-gray-950 p-6 sm:p-8 rounded-3xl m-4 w-full max-w-[700px] px-4 mx-auto '>
           <Image src={image} alt={title} width={600} height={400} className='w-full sm:w-[600px] h-auto rounded-md hover:scale-95 hover:shadow-2xl active:scale-95 transition-all duration-300'/>
           <hr className='border-none h-[2px] bg-gradient-to-r from-gray-600 via-gray-400 to-gray-600 w-full my-4'/>
           <div>
            <h1 className='flex justify-center items-center p-3 text-xl sm:text-2xl font-bold text-gray-300'>{title}</h1>
            <p className='text-gray-400 text-center max-w-[500px]'>{description}</p>
           </div>
           <div className='flex flex-row justify-center items-center'>
              <Link href={link} className='p-2 hover:scale-110 hover:shadow-2xl hover:animate-pulse active:scale-95 transition-all duration-300 ease-in-out'>
                <Image src="/github.png" alt="github" width={70} height={70} className='flex justify-center items-center p-2 rounded-lg text-black'/>
            </Link>  
            <Link href={link1} className='p-2 hover:scale-110 hover:shadow-2xl hover:animate-pulse active:scale-95 transition-all duration-300 ease-in-out'>
                <Image src="/vercel.png" alt="vercel" width={80} height={80} className='flex justify-center items-center p-2 rounded-lg text-black'/>
            </Link> 
           </div>
            
        </div>
  )
}

export default Cards
