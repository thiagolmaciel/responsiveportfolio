'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FaBars, FaGithub, FaLinkedin } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className='bg-[#111111] sticky top-0 z-[9999] animate-fade-down'>
      <div className=' max-w-7xl mx-auto px-4 py-4 sm:px-6 sm:py-10 lg:px-8'>
        <div className='flex justify-between items-center w-full'>
          <div className=''>
            <Link href='/'>
              <Image
                src='/logo.svg'
                alt='logo'
                height={250}
                width={250}
                className='transition-all hover:scale-105'
              />
            </Link>
          </div>

          <div className='hidden md:flex gap-8 items-center'>
            <Link
              href='/'
              className='transition-all hover:font-bold hover:text-violet-700 text-xl'
            >
              Home
            </Link>
            <Link
              href='/about-me'
              className='transition-all hover:font-bold hover:text-violet-700 text-xl'
            >
              About Me
            </Link>
            <Link
              href='/projects'
              className='transition-all hover:font-bold hover:text-violet-700 text-xl'
            >
              Projects
            </Link>
            <Link
              href='/contact'
              className='transition-all hover:font-bold hover:text-violet-700 text-xl'
            >
              Contact
            </Link>
            <div className='flex gap-4 items-center'>
              <Link
                href='https://github.com/thiagolmaciel'
                target='_blank'
                className='transition-all hover:text-violet-700'
              >
                <FaGithub size={24} className='hover:scale-110' />
              </Link>
              <Link
                href='https://linkedin.com/in/thiagolmaciel'
                target='_blank'
                className='transition-all hover:text-violet-700'
              >
                <FaLinkedin size={24} className='hover:scale-110' />
              </Link>
            </div>
          </div>
          <div className='flex items-center md:hidden'>
            <button
              onClick={toggleMenu}
              className='flex items-center transition-all hover:text-violet-700'
            >
              {isOpen ? (
                <ImCross size={24} className='hover:scale-90' />
              ) : (
                <FaBars size={24} className='hover:scale-110' />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/">
              <p className="block px-3 py-2 rounded-md text-base font-medium hover:bg-neutral-900">
                Home
              </p>
            </Link>
            <Link href="/about-me">
              <p className="block px-3 py-2 rounded-md text-base font-medium hover:bg-neutral-900">
                About me
              </p>
            </Link>
            <Link href="/projects">
              <p className="block px-3 py-2 rounded-md text-base font-medium hover:bg-neutral-900">
                Projects
              </p>
            </Link>
            <Link href="/contact">
              <p className="block px-3 py-2 rounded-md text-base font-medium hover:bg-neutral-900">
                Contact
              </p>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
