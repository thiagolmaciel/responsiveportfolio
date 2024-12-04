import Image from "next/image"
import Link from "next/link"
import { FaExclamation } from "react-icons/fa"
import { IoIosWarning } from "react-icons/io"

function Projects() {
  return (
    <div className="page relative overflow-hidden">
      <div className='flex flex-col max-w-7xl mx-auto px-4 py-6 sm:px-6 sm:py-10 lg:px-8'>
        <div className="flex flex-col">
          <div className="flex max-w-7xl text-[3rem] sm:text-left font-bold animate-in animate-fade-right animate-once animate-delay-300">
            <p className=" ">
              PROJECTS
            </p>
          </div>
          <div className="flex sm:text-left animate-fade-right animate-delay-500 text-xl items-center">
            <p className="text-[1.3rem] animate-in animate-delay-200 animate-fade-down ">
              Here, you’ll find a collection of projects I’ve built for academic purposes, personal growth, or just for fun :)
            </p>
          </div>
        </div>
        <div className="flex max-w-7xl items-center flex-grow justify-evenly sm:flex-row gap-5 flex-wrap sm:justify-evenly sm:flex-grow animate-fade-up">
          <Link href="https://github.com/gacastelo/SBV" target="_blank">
            <div className="flex h-[27rem] sm:w-[24.5rem] p-5 gap-3 rounded-[1rem] grow sm:h-[25rem] flex-col bg-neutral-900 shadow-lg  cursor-pointer hover:-translate-y-5 hover:scale-105 transition-all">
              <div className="relative h-[18rem] w-full ">
                <Image src='/project1.png' layout='fill' objectFit='cover' alt=''></Image>
              </div>
              <div className="flex text-2xl ">
                <p className="font-bold">Portal Jornal Federal</p>
              </div>
              <div className="text-neutral-500">
                <p className="break-words">News portal created using HTML, CSS, Java, PHP, and MySQL.</p>
              </div>
            </div>
          </Link>
          <Link href="https://github.com/thiagolmaciel/modulologin-ppa" target="_blank">
            <div className="flex h-[27rem] sm:w-[24.5rem] p-5 gap-3 rounded-[1rem] grow sm:h-[25rem] flex-col bg-neutral-900 shadow-lg  cursor-pointer hover:-translate-y-5 hover:scale-105 transition-all">
              <div className="relative h-[18rem] w-full ">
                <Image src='/project2.png' layout='fill' objectFit='cover' alt=''></Image>
              </div>
              <div className="flex text-2xl ">
                <p className="font-bold">Portal PPA</p>
              </div>
              <div className="text-neutral-500">
                <p className="break-words">Project for full-stack practice with PHP and MySQL: assistance portal, developed in groups</p>
              </div>
            </div>
          </Link>
          <Link href="https://github.com/thiagolmaciel/jogodaforca-java" target="_blank">
            <div className="flex h-[27rem] sm:w-[24.5rem] p-5 gap-3 rounded-[1rem] grow sm:h-[25rem] flex-col bg-neutral-900 shadow-lg  cursor-pointer hover:-translate-y-5 hover:scale-105 transition-all">
              <div className="relative h-[18rem] w-full ">
                <Image src='/project3.png' layout='fill' objectFit='cover' alt=''></Image>
              </div>
              <div className="flex text-2xl ">
                <p className="font-bold">Java Hangman</p>
              </div>
              <div className="text-neutral-500">
                <p className="break-words">A simple yet complete hangman game made with Java, with custom words and length support</p>
              </div>
            </div>
          </Link>

        </div>

        <Link href='/contact'>
          <div className="flex gap-2 mx-auto w-[20rem] justify-center items-center text-white bg-violet-700 text-center py-1 shadow-lg shadow-neutral-950 hover:-translate-y-1 transition-all">
            <IoIosWarning />
            <p className="font-medium cursor-pointer">More projects soon! Click Here</p>
          </div>
        </Link>
      </div>
    </div >
  )
}

export default Projects