import Cards from '@/components/Cards'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col bg-gradient-to-r from-blue-200 via-blue-300 to-blue-700 min-h-screen p-4 justify-center items-center'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-7 p-4 m-2 transition-all duration-700'>
        <Cards title="Movie Reviews App" description="A modern movie app project built with tools like Next.js 14, Tailwind CSS, and the TMDB API. This project helps you learn how to create a responsive, interactive, and visually stunning movie browsing experience, similar to IMDB." image="/popcornflix1.png" link="https://github.com/adithyasd10/imdb-next" link1="https://popcorn-flix-lake.vercel.app/"/>
        <Cards title="Savorly(Restaurant App)-Frontend UI" description="A visually appealing and fully responsive restaurant frontend built using Next.js. This modern web interface features smooth animations, engaging image sliders, an intuitive,Add to Cart system, and attractive offer sections —all optimized for desktop and mobile experiences" image="/savorly.jpg" link="https://github.com/adithyasd10/restuarant-next" link1="https://restuarant-next.vercel.app/"/>
        <Cards title="LunaLog" description="LunaLog is a beautifully designed sleep tracking web application built with Next.js, allowing users to log, visualize, and analyze their sleep habits. It features modern UI design, real-time data insights, and secure authentication with Clerk." image="/sleep-tracker.png" link="https://github.com/adithyasd10/sleep-tracker-next" link1="https://luna-log.vercel.app/"/>
        <Cards title="Campus Compass" description="Campus Compass is a cross-platform application developed using the Flutter framework, designed to enhance campus management and communication for both teachers and students. The application integrates Firebase for authentication and real-time database functionality, providing a robust and scalable solution for collaborative group management." image="/IV-tracker.jpg" link="https://github.com/adithyasd10/IV-tracker-app" link1="/projects"/>
      </div>
        
    </div>
    
  )
}

export default page
