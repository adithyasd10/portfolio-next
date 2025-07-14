import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <main className="flex justify-center p-4">
      <nav className="flex justify-around items-center p-4 w-sm bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 flex-row border-b border-black rounded-4xl text-black backdrop-blur-md">
        <Link href="/about" className="hover:text-blue-700">
          <button>About</button>
        </Link>
        <Link href="/projects" className="hover:text-blue-700">
         <button>Projects</button>
        </Link>
        <Link href="/contacts" className="hover:text-blue-700">
          <button>Contacts</button>
        </Link>
      </nav>
    </main>
  )
}

export default Navbar
