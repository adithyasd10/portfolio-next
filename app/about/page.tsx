import React from 'react'

const Aboutpage = () => {
  return (
    <div className='flex flex-col justify-start text-start p-40 gap-4 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-700 min-h-screen items-center'>
        <div className='flex flex-col gap-3  '>
            <h1 className='flex justify-center text-3xl md:text-6xl text-start bg-clip-text text-transparent bg-gradient-to-r from-gray-500 via-gray-800 to-black font-extrabold hover:from-gray-900 hover:via-neutral-900 hover:to-black'>ABOUT</h1>
            <p className='sm:p-5 text-sm sm:text-xl md:text-2xl text-center text-gray-800'>Computer engineering student at Marian Engineering College with a strong interest in full-stack and mobile app development. Experienced in building responsive web apps using HTML, CSS, SCSS, TypeScript,Next.js,React and cross-platform mobile apps with Flutter, Android Studio, and Flask.Skilled in C, Data Structures, and Python, with a passion for solving real-world problems through scalable tech solutions.Open to internships and entry-level roles in software/mobile development</p>
        </div>
      
    </div>
  )
}

export default Aboutpage
