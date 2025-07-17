import Cards from '@/components/Cards'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col bg-gradient-to-r from-blue-200 via-blue-300 to-blue-700 min-h-screen p-4 justify-center items-center'>
        <Cards title="Movie Reviews App" description="A modern movie app project built with tools like Next.js 14, Tailwind CSS, and the TMDB API. This project helps you learn how to create a responsive, interactive, and visually stunning movie browsing experience, similar to IMDB." image="/popcornflix1.png" link="/"/>
    </div>
    
  )
}

export default page
