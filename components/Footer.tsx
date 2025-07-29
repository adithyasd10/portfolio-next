import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <section className='flex justify-center items-center w-screen mx-auto h-45 bg-gradient-to-r from-slate-800 via-slate-900 to-black border border-white/10 bg-white/5 backdrop-blur-md shadow-lg '>
        <div className='flex flex-col justify-center items-center gap-2'>
            <h1 className='text-gray-400 text-xl lg:text-2xl transition-all duration-400'>Let&rsquo;s Collaborate </h1>
            <div className='flex flex-row gap-4'>
              <Link href='https://github.com/adithyasd10'>
                 <Image src="/githubf.png" alt="" width={40} height={40} className='hover:scale-110 transition-all duration-200'/>
              </Link>
              <Link href='mailto:adithyasd@gmail.com'>
                 <Image src="/gmail.png" alt="" width={40} height={40} className='hover:scale-110 transition-all duration-200'/>
              </Link>
              <Link href="https://www.linkedin.com/in/adithyasd/">
                <Image src="/linkedin.png" alt="" width={40} height={40} className='hover:scale-110 transition-all duration-200'/>
              </Link>    
            </div>   
        </div>
    </section>
  )
}

export default Footer
