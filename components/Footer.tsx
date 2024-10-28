import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className='bg-neutral-900 max-w-100vw mx-auto p-4 sm:px-6 lg:px-8 text-center !mt-auto'>
        <div className='flex flex-col max-w-[40rem] gap-3 justify-between mx-auto sm:px-6 lg:px-8 sm:flex-row'>
          <div className='text-left'>
            <p className='text-xl font-bold pb-2'>Contato</p>
            <ul>
              <li>
                thiagolaranjeiramaciel@hotmail.com
              </li>
              <li>
                +55 11 98513-8727
              </li>
              
            </ul>
          </div>
          <div className="text-left">
            <p className='text-xl font-bold pb-2'>Site</p>
            <ul>
              <li>
                <Link href='/' className='transition-all hover:text-violet-700'>Home</Link>
              </li>
              <li>
                <Link href='/' className='transition-all hover:text-violet-700'>About me</Link>
              </li>
              <li>
                <Link href='/' className='transition-all hover:text-violet-700'>Projects</Link>
              </li>
              <li>
                <Link href='/' className='transition-all hover:text-violet-700'>Contact</Link>
              </li>
            </ul>
          </div>
          <div className="text-left">
            <p className='text-xl font-bold pb-2'>Social Media</p>
            <ul className='flex column gap-2'>
              <li><Link
                href='https://github.com/thiagolmaciel'
                target='_blank'
                className='transition-all hover:text-violet-700'
              >
                <FaGithub size={24} className='hover:scale-110' />
              </Link></li>
              <li>
                <Link
                  href='https://linkedin.com/in/thiagolmaciel'
                  target='_blank'
                  className='transition-all hover:text-violet-700'
                >
                  <FaLinkedin size={24} className='hover:scale-110' />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer
