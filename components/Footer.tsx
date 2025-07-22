import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <section className='flex justify-center items-center w-screen mx-auto h-45 bg-gradient-to-r from-slate-800 via-slate-900 to-black border border-t-gray-500 '>
        <div className='flex flex-col justify-center items-center gap-2'>
            <h1 className='text-gray-400 text-xl lg:text-2xl transition-all duration-400'>Let's Collaborate </h1>
            <div className='flex flex-row gap-4'>
                <Image src="/githubf.png" alt="" width={40} height={40} className='hover:scale-110 transition-all duration-200'/>
                <Image src="/gmail.png" alt="" width={40} height={40} className='hover:scale-110 transition-all duration-200'/>
                <Image src="/linkedin.png" alt="" width={40} height={40} className='hover:scale-110 transition-all duration-200'/>
            </div>   
        </div>
    </section>
  )
}

export default Footer
