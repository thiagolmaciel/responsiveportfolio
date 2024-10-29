import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className='bg-[#151515] max-w-full mx-auto px-4 py-6 sm:px-6 sm:py-10 lg:px-8'>
      <div className='flex flex-col max-w-7xl gap-8 justify-between sm:flex-row sm:mx-auto sm:items-center'>
          <div className='text-left'>
            <Image src='/altlogo.svg' alt='altlogo' height={100} width={100} className='pb-2'/>
            <p className='text-neutral-400'>Provided by Github</p>
          </div>
          <div className="text-left">
            <p className='text-xl font-bold pb-2 text-neutral-400'>Navigate</p>
            <ul className='flex flex-col gap-3 sm:flex-row'>
              <li>
                <Link href='/' className='transition-all hover:text-violet-700 hover:font-bold text-neutral-400'>Home</Link>
              </li>
              <li>
                <Link href='/' className='transition-all hover:text-violet-700 hover:font-bold text-neutral-400'>About me</Link>
              </li>
              <li>
                <Link href='/' className='transition-all hover:text-violet-700 hover:font-bold text-neutral-400'>Projects</Link>
              </li>
              <li>
                <Link href='/' className='transition-all hover:text-violet-700 hover:font-bold text-neutral-400'>Contact</Link>
              </li>
            </ul>
          </div>
          <div className="text-left">
            <p className='text-xl font-bold pb-2 text-neutral-400'>Social Media</p>
            <ul className='flex column gap-2'>
              <li><Link
                href='https://github.com/thiagolmaciel'
                target='_blank'
                className='transition-all  text-neutral-400 hover:text-violet-700'
              >
                <FaGithub size={24} className='hover:scale-110' />
              </Link></li>
              <li>
                <Link
                  href='https://linkedin.com/in/thiagolmaciel'
                  target='_blank'
                  className='transition-all text-neutral-400 hover:text-violet-700' 
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
