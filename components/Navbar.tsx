import { FolderKanban, HomeIcon, Mail, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <main className="flex justify-center p-4 bg-gradient-to-r from-slate-800 via-slate-900 to-black">
      <nav className="flex justify-around items-center p-4 w-sm md:w-md bg-gradient-to-br from-gray-700 via-gray-900 to-black flex-row border border-neutral-900 rounded-4xl text-gray-400 backdrop-blur-md hover:scale-105 transition-all duration-400 my-4">
        <Link href="/" className="hover:text-slate-500">
          <HomeIcon className='md:hidden hover:animate-pulse transition-all duration-300 '/>
          <button className='hidden md:block'>Home</button>
        </Link>
        <Link href="/projects" className="hover:text-slate-500">
         <FolderKanban className='md:hidden hover:animate-pulse transition-all duration-300'/>
         <button className='hidden md:block'>Projects</button>
        </Link>
        <Link href="/about" className="hover:text-slate-500">
          <User className='md:hidden hover:animate-pulse transition-all duration-300'/>
          <button className='hidden md:block'>About</button>
        </Link>
        <Link href="/contact" className="hover:text-slate-500">
          <Mail className='md:hidden hover:animate-pulse transition-all duration-300'/>
          <button className='hidden md:block'>Contact</button>
        </Link>
      </nav>
    </main>
  )
}

export default Navbar
