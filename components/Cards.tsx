import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type CardsProps = {
  title:string
  description:string
  image:string
  link:string    
}

const Cards = ({title,description,image,link}: CardsProps) => {
  return (
     <div className='flex flex-col justify-center items-center bg-black p-6 sm:p-8 rounded-3xl m-4 w-full max-w-[700px] px-4 mx-auto'>
           <Image src={image} alt={title} width={600} height={400} className='w-full sm:w-[600px] h-auto rounded-md'/>
           <div className='text-neutral-400 text-center'>____________________________________________________________</div>
           <div>
            <h1 className='flex justify-center items-center p-3 text-xl sm:text-2xl'>{title}</h1>
            <p className='text-gray-400 text-center max-w-[500px]'>{description}</p>
           </div>
            <Link href={link} className='p-4'>
                <button className='flex justify-center items-center p-2 bg-gray-400 hover:bg-gray-500 rounded-lg text-black'>view project</button>
            </Link>  
        </div>
  )
}

export default Cards
