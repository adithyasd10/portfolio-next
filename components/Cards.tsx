import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Cards = () => {
  return (
     <div className='flex flex-col justify-center items-center bg-black p-6 sm:p-8 rounded-3xl m-4 w-full max-w-[700px] px-4 mx-auto'>
           <Image src="/popcornflix1.png" alt="project 1" width={600} height={400} className='w-full sm:w-[600px] h-auto rounded-md'/>
           <div className='text-neutral-400 text-center'>____________________________________________________________</div>
           <div>
            <h1 className='flex justify-center items-center p-3 text-xl sm:text-2xl'>Movie Reviews App</h1>
            <p className='text-gray-400 text-center max-w-[500px]'>A modern movie app project built with tools like Next.js 14, Tailwind CSS, and the TMDB API. This project helps you learn how to create a responsive, interactive, and visually stunning movie browsing experience, similar to IMDB.</p>
           </div>
            <Link href="/" className='p-4'>
                <button className='flex justify-center items-center p-2 bg-gray-400 hover:bg-gray-500 rounded-lg text-black'>view project</button>
            </Link>  
        </div>
  )
}

export default Cards
