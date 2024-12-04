import Link from "next/link"
import { FaDiscord, FaGithub, FaKeyboard, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

function Contact() {

  return (
    <div className="page relative overflow-hidden">
      <div className='flex flex-col max-w-7xl mx-auto px-4 py-6 sm:px-6 sm:py-10 lg:px-8 items-center'>
        <div className="flex flex-col items-center">
          <div className="flex max-w-7xl text-[3rem] sm:text-center font-bold animate-ease-in-out animate-fade-down animate-once animate-delay-300">
            <p className=" ">
              Let's Talk!
            </p>
          </div>
          <div className="flex sm:text-left animate-fade-right animate-delay-500 text-xl items-center">
            <p className="text-[1.3rem] animate-in animate-delay-200 animate-fade-down ">
              You can contact me through these ways:
            </p>
          </div>
        </div>

        <div className="flex flex-col mt-8 gap-5 flex-wrap sm:w-[50rem] items-center justify-center animate-ease-in-out animate-fade-up">
          <Link href="https://www.discord.com" target="_blank">
            <div className="flex h-[5rem] w-[12rem] items-center justify-center gap-4 text-lg text-white rounded-lg bg-neutral-900 border-b border-violet-700 hover:border-b-[0.7rem] hover:scale-105 hover:-translate-y-2 transition-all">
              <FaDiscord size={30} />
              thiagolmaciel
            </div>
          </Link>
          <Link href="https://www.github.com/thiagolmaciel" target="_blank">
            <div className="flex py-6 px-7 items-center justify-center gap-4 text-lg text-white rounded-lg bg-neutral-900 border-b border-violet-700 hover:border-b-[0.7rem] hover:scale-105 hover:-translate-y-2 transition-all">
              <FaGithub size={30} />
              /thiagolmaciel
            </div>
          </Link>
          <Link href="https://www.linkedin.com/in/thiagolmaciel" target="_blank">
            <div className="flex py-6 px-7 items-center justify-center gap-4 text-lg text-white rounded-lg bg-neutral-900 border-b border-violet-700 hover:border-b-[0.7rem] hover:scale-105 hover:-translate-y-2 transition-all">
              <FaLinkedin size={30} />
              /thiagolmaciel
            </div>
          </Link>
          <Link href="mailto:thiagomacieldev@gmail.com" target="_blank">
            <div className="flex py-6 px-7 items-center justify-center gap-4 text-lg text-white rounded-lg bg-neutral-900 border-b border-violet-700 hover:border-b-[0.7rem] hover:scale-105 hover:-translate-y-2 transition-all">
              <MdEmail size={30} />
              thiagolaranjeiramaciel@hotmail.com
            </div>
          </Link>
          <Link href="https://wa.me/5511985138727" target="_blank">
            <div className="flex py-6 px-7 items-center justify-center gap-4 text-lg text-white rounded-lg bg-neutral-900 border-b border-violet-700 hover:border-b-[0.7rem] hover:scale-105 hover:-translate-y-2 transition-all">
              <FaWhatsapp size={30} />
              +55 11 98513-8727
            </div>
          </Link>
        </div>
        <div className="flex flex-col mt-10 h-fit w-fit items-center justify-around  bg-violet-700 py-6 px-6 gap-2 animate-ease-in-out animate-fade-up rounded-md">
          <FaKeyboard size={40} />
          <p className="text-xl">It’s an honor to create and innovate with you!</p>
        </div>

        <div className=" absolute rounded-full bg-violet-900 filter blur-xl z-[-10] top-[20rem] opacity-20 h-72 w-72 align-middle animate-ease-linear animate-pulse"></div>
        <div className=" absolute rounded-full bg-violet-700 filter blur-xl z-[-10] right-[50%] opacity-15 h-72 w-72 align-middle animate-ease-linear animate-pulse"></div>
        <div className=" absolute rounded-full bg-violet-700 filter blur-xl z-[-10] left-[50%] opacity-5 h-72 w-72 align-middle animate-ease-linear animate-pulse"></div>


      </div>
    </div>
  )
}

export default Contact