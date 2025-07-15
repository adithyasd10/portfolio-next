import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col bg-gradient-to-r from-blue-200 via-blue-300 to-blue-700 min-h-screen'>
        
    <div className='flex  flex-row  justify-around items-center py-20 md:justify-center md:items-center md:gap-20 transition-all duration-300'>
        <div className='border-[4px] border-solid border-transparent gradient-border rounded-lg'>
        <Link href="/singleproject" className='flex flex-col justify-center items-center '>
            <Image src="/public/next.svg" alt="logo" width={10} height={10} />
            <div className='flex justify-center items-center bg-gray-800 '>
                 <button className='flex justify-center items-center border w-50 h-50 sm:w-70 sm:h-70 md:w-80 md:h-80 lg:w-90 lg:h-90 xl:w-140 xl:h-100 2xl:h-120 rounded-md border-transparent '>hi</button>
            </div>
            </Link>
        </div>
        
         <Link href="/singleproject">
            <button className='flex justify-center items-center border w-50 h-50 sm:w-70 sm:h-70 md:w-80 md:h-80 lg:w-90 lg:h-90 xl:w-140 xl:h-100 2xl:h-120 rounded-md'>hi</button>
        </Link>
    </div>
    <div className='flex  flex-row  justify-around items-center py-5 md:justify-center md:items-center md:gap-20 transition-all duration-300'>
        <Link href="/singleproject">
            <button className='flex justify-center items-center border w-50 h-50 sm:w-70 sm:h-70 md:w-80 md:h-80 lg:w-90 lg:h-90 xl:w-140 xl:h-100 2xl:h-120 rounded-md'>hi</button>
        </Link>
         <Link href="/singleproject">
            <button className='flex justify-center items-center border w-50 h-50 sm:w-70 sm:h-70 md:w-80 md:h-80 lg:w-90 lg:h-90 xl:w-140 xl:h-100 2xl:h-120 rounded-md'>hi</button>
        </Link>
    </div>

    </div>
    
  )
}

export default page
