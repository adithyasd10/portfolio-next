import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <main className="flex justify-center p-4">
      <nav className="flex justify-around items-center p-4 w-sm bg-gradient-to-r bg-gray-800 via-gray-900 to-black flex-row border-b border-black rounded-4xl text-gray-300 ">
        <Link href="/about" className="hover:text-gray-400">
          <button>About</button>
        </Link>
        <Link href="/projects" className="hover:text-gray-400">
         <button>Projects</button>
        </Link>
        <Link href="/contacts" className="hover:text-gray-400">
          <button>Contacts</button>
        </Link>
      </nav>
    </main>
  )
}

export default Navbar
