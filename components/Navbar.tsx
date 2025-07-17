import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <main className="flex justify-center p-4 bg-gradient-to-r from-slate-800 via-slate-900 to-black">
      <nav className="flex justify-around items-center p-4 w-sm bg-gradient-to-r from-gray-700 via-gray-900 to-black flex-row border border-neutral-900 rounded-4xl text-gray-400 backdrop-blur-md">
        <Link href="/" className="hover:text-slate-500">
          <button>Home</button>
        </Link>
        <Link href="/projects" className="hover:text-slate-500">
         <button>Projects</button>
        </Link>
        <Link href="/about" className="hover:text-slate-500">
          <button>About</button>
        </Link>
        <Link href="/contacts" className="hover:text-slate-500">
          <button>Contacts</button>
        </Link>
      </nav>
    </main>
  )
}

export default Navbar
