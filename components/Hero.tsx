import React from 'react'

const Hero = () => {
  return (
    <div className="flex justify-center flex-col items-center h-[70vh] text-center font-bold">
  <h1 className="text-center sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-slate-300 font-bold sm:font-light">
    👋 Hey There,
  </h1>

  <div className="flex flex-row gap-3 text-center">
    <h1 className="pt-2 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-slate-300 font-bold sm:font-light">
      I'm
    </h1>

    <h1 className="sm:p-2 pt-2 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-300 to-slate-400 hover:hover:scale-95 hover:transition-transform font-extrabold transition-all duration-500">
       Adithya S D
    </h1>
  </div>
</div>

  )
}

export default Hero
