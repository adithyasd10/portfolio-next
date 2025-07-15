import React from 'react'

const Hero = () => {
  return (
    <div className="flex justify-center flex-col items-center h-[70vh] text-centerfont-bold ">
      <h1 className="text-center sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-black font-bold sm:font-light">Hey There,</h1>
      <div className="flex flex-row gap-3 text-center " >
        <h1 className=" pt-2  sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-black font-bold sm:font-light">I'm</h1>
        <h1 className="sm:p-2 pt-2 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-gray-700 via-gray-900 to-black hover:text-transparent hover:bg-clip-text hover:from-gray-900 hover:via-neutral-900 hover:to-black font-bold">Adithya S D</h1>
      </div>
      </div>
  )
}

export default Hero
