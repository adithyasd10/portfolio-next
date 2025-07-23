import React from 'react'
import BentoGrid from './BentoGrid'

const TechStack = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-3'>
      <h1 className='my-4 font-extrabold font-stretch-100% text-3xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 hover:text-gray-400 hover:hover:scale-95 hover:transition-transform'>TECH STACK</h1>
      <div className='flex w-full max-w-screen mx-auto'>
        <BentoGrid width="250px" height="150px" name='Vercel' image='/vercelf.png' />
        <BentoGrid width="450px" height="150px" name='Vite' image='/vite.png' />
      </div>
      <div className='flex w-full max-w-screen mx-auto'>
        <BentoGrid width="460px" height="150px" name='Next.JS' image='/nextjsf.png' />
        <BentoGrid width="240px" height="150px" name='Flutter' image='/flutterf.png' />
      </div>
      <div className='flex w-full max-w-screen mx-auto'>
        <BentoGrid width="350px" height="150px" name='Dart' image='/dart.png'/>
        <BentoGrid width="350px" height="150px" name='GitHub' image='/githubf.png' />
      </div>
    </div>
  )
}

export default TechStack
