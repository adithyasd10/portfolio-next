import TechStack from '@/components/TechStack'
import React from 'react'

const Aboutpage = () => {
  return (
    <div className='flex flex-col justify-start text-start p-20 gap-4 bg-gradient-to-r from-slate-800 via-slate-900 to-black min-h-screen items-center'>
        <div className='flex flex-col gap-3  '>
            <h1 className='flex justify-center text-3xl md:text-7xl text-start bg-clip-text text-transparent bg-gradient-to-r from-gray-800 via-white to-black font-extrabold hover:from-gray-300 hover:via-gray-600 hover:to-white hover:hover:scale-95 hover:transition-transform'>ABOUT</h1>
            <p className='flex justify-around items-center w-screen mx-auto max-w-[400px] sm:max-w-[450px] md:max-w-[800px] lg:max-w-[1100px] p-2 sm:p-5 text-sm sm:text-xl md:text-2xl text-center text-gray-400 transition-all duration-300'>Computer Engineering student at Marian Engineering College, passionate about full-stack, mobile app development and Cloud.
Experienced in building responsive web applications with HTML, CSS, SCSS, TypeScript, and Next.js, and cross-platform apps using
Flutter, Android Studio, and Flask. Skilled in C, Data Structures, and Python, with a strong focus on solving real-world problems
through scalable tech solutions. Open to any roles in software or mobile development, Cloud including Cloud Security and DevOps,
and committed to continuously learning and exploring new technologies. Currently working part-time at NatInfoTech in Cloud
Infrastructure support (Azure, AWS) to sharpen my cloud skills.
</p>
        </div>
        <div className='flex justify-center items-center py-20'>
          <TechStack/>
        </div>
        
    </div>
  )
}

export default Aboutpage
