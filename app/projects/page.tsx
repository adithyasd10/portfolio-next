import Cards1 from '@/components/Cards1'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col bg-gradient-to-r from-slate-800 via-slate-900 to-black min-h-screen p-4 justify-center items-center'>
      <div className=''>
        <h1 className='text-3xl md:text-4xl lg:text-5xl transition-all duration-300 text-gray-400 font-stretch-140%'>MY WORK</h1>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 transition-all duration-700'>
        <Cards1 title="Movie Reviews App" description="A modern movie app project built with tools like Next.js 14, Tailwind CSS, and the TMDB API. This project helps you learn how to create a responsive, interactive, and visually stunning movie browsing experience, similar to IMDB." image="/popcornflix1.png" link="https://github.com/adithyasd10/imdb-next" link1="https://popcorn-flix-lake.vercel.app/"/>
        <Cards1 title="Savorly(Restaurant App)-Frontend UI" description="A visually appealing and fully responsive restaurant frontend built using Next.js. This modern web interface features smooth animations, engaging image sliders, an intuitive,Add to Cart system, and attractive offer sections —all optimized for desktop and mobile experiences" image="/savorly.jpg" link="https://github.com/adithyasd10/restuarant-next" link1="https://restuarant-next.vercel.app/"/>
        <Cards1 title="LunaLog" description="LunaLog is a beautifully designed sleep tracking web application built with Next.js, allowing users to log, visualize, and analyze their sleep habits. It features modern UI design, real-time data insights, and secure authentication with Clerk." image="/sleep-tracker.png" link="https://github.com/adithyasd10/sleep-tracker-next" link1="https://luna-log.vercel.app/"/>
        <Cards1 title="Campus Compass" description="Campus Compass is a cross-platform application developed using the Flutter framework, designed to enhance campus management and communication for both teachers and students. The application integrates Firebase for authentication and real-time database functionality, providing a robust and scalable solution for collaborative group management." image="/IV-tracker.jpg" link="https://github.com/adithyasd10/IV-tracker-app" link1="/projects"/>
      </div>  
      <div className='my-2'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl transition-all duration-300 text-gray-400 font-stretch-140%'>ONGOING PROJECTS</h1>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 m-2 transition-all duration-700'>
        <Cards1 title="Ai Logo Generator" description="AI Logo Maker — A modern web app built with Next.js, ShadCN UI, and React, enabling users to generate unique logos via Gemini API and Hugging Face models. Enter your brand ideas as text prompts and get stunning, AI-generated logos in seconds." image="/ai-logo-maker.png" link="https://github.com/adithyasd10/ai-logo-maker" link1="/projects"/>
      </div> 
    </div>
    
  )
}

export default page
