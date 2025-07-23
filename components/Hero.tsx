import React from 'react'
import TechStack from './TechStack'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className="flex justify-center flex-col items-center h-[70vh] text-center font-bold ">
  <h1 className="text-center text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-slate-300 font-bold sm:font-light">
    👋 Hey There,
  </h1>

  <div className="flex flex-row gap-3 text-center">
    <h1 className="pt-2 text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-slate-300 font-bold sm:font-light">
      I'm
    </h1>

    <h1 className="sm:p-2 pt-2 text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-300 to-slate-400 hover:hover:scale-95 hover:transition-transform font-extrabold transition-all duration-500">
       Adithya S D
    </h1>
  </div>
  <p className='my-1 p-2 font-normal text-gray-500 text-[10px] sm:text-[13px] lg:text-xl lg:my-4 '>
    Front-End Developer | Building Scalable Interfaces
  </p>
  <div className='flex flex-row justify-center items-center gap-2'>
    <Link href="/projects">
      <button className="relative overflow-hidden group rounded-md border border-gray-400 text-gray-500 hover:text-gray-300 transition-all duration-300 hover:scale-105 text-sm px-2 py-2 md:px-6 md:py-4 my-3">
        <span className="absolute inset-0 w-0 group-hover:w-full transition-all duration-300 bg-gradient-to-r from-[#948979]/10 to-[#DFD0B8]/10"></span>
        <span className="relative z-10">My Work</span>
      </button>
    </Link>
    
  </div>
</div>


  )
}

export default Hero
