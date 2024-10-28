'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FaBars, FaGithub, FaLinkedin } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { ImCross } from 'react-icons/im'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className='bg-transparent'>
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
              href='/'
              className='transition-all hover:font-bold hover:text-violet-700 text-xl'
            >
              About Me
            </Link>
            <Link
              href='/'
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
                <FaBars size={24} className='hover:scale-110' />
              ) : (
                <ImCross size={24} className='hover:scale-90' />
              )}
            </button>
          </div>
        </div>
      </div>
      <div>
        <p>{isOpen}</p>
      </div>
    </nav>
  )
}

export default Navbar
