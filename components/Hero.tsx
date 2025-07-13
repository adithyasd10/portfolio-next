import React from 'react'

const Hero = () => {
  return (
    <div className="flex justify-center flex-col items-center h-[70vh] text-centerfont-bold ">
      <h1 className="text-center sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-700 ">Hey There,</h1>
      <div className="flex flex-row gap-3 text-center " >
        <h1 className=" pt-2  sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-600">I'm</h1>
        <h1 className="p-2 pt-2 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 hover:text-transparent hover:bg-clip-text hover:from-blue-300 hover:via-blue-500 hover:to-blue-400">Adithya</h1>
      </div>
      </div>
  )
}

export default Hero
