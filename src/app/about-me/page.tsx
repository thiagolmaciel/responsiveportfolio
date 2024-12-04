import Link from "next/link";
import { FaDatabase, FaGitAlt, FaHtml5, FaJava, FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { PiFileCppFill } from "react-icons/pi";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript, SiPhp } from "react-icons/si";
import { TbFileCode } from "react-icons/tb";

export default function Home() {
  return (
    <div className="page relative  overflow-hidden flex flex-col animate-fade-right">
      <div className="flex flex-col max-w-7xl mx-auto px-4 py-6 gap-5 sm:px-6 sm:py-10 sm:gap-32 lg:px-8 sm:flex-row border-b-2 border-neutral-600 ">
        <div className="flex flex-col text-[3rem] sm:text-left font-bold animate-in animate-fade-right animate-once animate-delay-300">
          <p className=" ">
            ABOUT MYSELF
          </p>
        </div>  
        <div className="flex items-center">
          <p className="text-[1.3rem] animate-in animate-delay-200 animate-fade-down">
            I am currently a student of the integrated course of IT technician  in the Instituto Federal de São Paulo, and I am
            seeking to develop myself as a FullStack developer.
            <br />
            My actual goal is to become proeficient in
            <Link href='https://react.dev/' target='_blank' className="text-violet-500"> React</Link>,
            <Link href='https://nextjs.org/' target='_blank' className="text-violet-500"> Nextjs</Link>,
            <Link href='https://nodejs.org/en/about' target='_blank' className="text-violet-500"> Nodejs</Link> and
            <Link href='https://expressjs.com/' target='_blank' className="text-violet-500"> Expressjs</Link>.
          </p>        </div>
      </div>
      <div className="flex flex-col w-full max-w-7xl mx-auto gap-5 px-4 py-6 sm:px-6 sm:py-10 lg:px-8 sm:flex-col">
        <p className="title text-[2.5rem] font-bold animate-in animate-delay-500 animate-fade-up animate-once ">
          Skills
        </p>
        <div className="flex gap-4 w-full max-md:flex-col">
          <div className="border border-neutral-600 shadow-md shadow-neutral-950 rounded-lg w-3/5 max-md:w-full px-6 py-4 flex flex-col gap-4 animate-fade-right ">
            <p className="text-2xl font-bold">Hardskills</p>
            <p className="mb-2 text-[1.2rem]">I have experience studying all these technologies through 
              <Link href='/projects' className=" font-bold text-violet-700 "> projects</Link> and activities, and I seek to apply them in a workplace where I can improve myself as a developer.</p>
            <div className="flex flex-row flex-wrap gap-2 items-start h-fit justify-between">
              <Link 
                href="https://developer.mozilla.org/en-US/docs/Web/HTML/"
                target="_blank"
                className="flex py-2 px-4 text-md font-bold flex-grow bg-orange-500 rounded-full justify-around text-white gap-2 items-center hover:scale-[1.05] transition-all duration-300"
              >
                <div className="flex items-center justify-center gap-2">
                  <FaHtml5 />
                  HTML
                </div>
              </Link>
              <Link
                href="https://www.mysql.com/"
                target="_blank"
                className="flex py-2 px-4 text-md font-bold flex-grow bg-blue-600 rounded-full justify-around text-white gap-2 items-center hover:scale-[1.05] transition-all duration-300"
              >
                <div className="flex items-center justify-center gap-2">
                  <FaDatabase />
                  MySQL
                </div>
              </Link>
              <Link
                href="https://nextjs.org/"
                target="_blank"
                className="flex py-2 px-4 text-md font-bold flex-grow bg-white rounded-full justify-around text-black gap-2 items-center hover:scale-[1.05] transition-all duration-300"
              >
                <div className="flex items-center justify-center gap-2">
                  <RiNextjsFill />
                  Nextjs
                </div>
              </Link>
              <Link
                href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                target="_blank"
                className="flex py-2 px-4 text-md font-bold flex-grow bg-blue-500 rounded-full justify-around text-white gap-2 items-center hover:scale-[1.05] transition-all duration-300"
              >
                <div className="flex items-center justify-center gap-2">
                  <IoLogoCss3 />
                  CSS
                </div>
              </Link>
              <Link
                href="https://www.php.net/"
                target="_blank"
                className="flex py-2 px-4 text-md font-bold flex-grow  bg-blue-700 rounded-full justify-around text-white gap-2 items-center hover:scale-[1.05] transition-all duration-300"
              >
                <div className="flex items-center justify-center gap-2">
                  <SiPhp />
                  PHP
                </div>
              </Link>
              <Link
                href="https://tailwindcss.com/"
                target="_blank"
                className="flex py-2 px-4 text-md font-bold flex-grow bg-blue-500 rounded-full justify-around text-white gap-2 items-center hover:scale-[1.05] transition-all duration-300"
              >
                <div className="flex items-center justify-center gap-2">
                  <RiTailwindCssFill />
                  Tailwind
                </div>
              </Link>
              <Link
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
                className="flex py-2 px-4 text-md font-bold flex-grow bg-yellow-500 rounded-full justify-around text-white gap-2 items-center hover:scale-[1.05] transition-all duration-300"
              >
                <div className="flex items-center justify-center gap-2">
                  <SiJavascript />
                  JS
                </div>
              </Link>
              <Link
                href="https://git-scm.com/"
                target="_blank"
                className="flex py-2 px-4 text-md font-bold flex-grow bg-red-600 rounded-full justify-around text-white gap-2 items-center hover:scale-[1.05] transition-all duration-300"
              >
                <div className="flex items-center justify-center gap-2">
                  <FaGitAlt />
                  Git
                </div>

              </Link>
              <Link
                href="https://react.dev/"
                target="_blank"
                className="flex py-2 px-4 text-md font-bold flex-grow bg-blue-700 rounded-full justify-around text-white gap-2 items-center hover:scale-[1.05] transition-all duration-300"
              >
                <div className="flex items-center justify-center gap-2">
                  <FaReact />
                  React
                </div>
              </Link>
              <Link
                href="https://www.w3schools.com/java/java_intro.asp"
                target="_blank"
                className="flex py-2 px-4 text-md font-bold flex-grow bg-red-500 rounded-full justify-around text-white gap-2 items-center hover:scale-[1.05] transition-all duration-300"
              >
                <div className="flex items-center justify-center gap-2">
                  <FaJava />
                  Java
                </div>
              </Link>
              <Link
                href="https://www.w3schools.com/c/c_intro.php"
                target="_blank"
                className="flex py-2 px-4 text-md font-bold flex-grow bg-blue-900 rounded-full justify-around text-white gap-2 items-center hover:scale-[1.05] transition-all duration-300"
              >
                <div className="flex items-center justify-center gap-2">
                  <TbFileCode />
                  C
                </div>
              </Link>
              <Link
                href="https://www.w3schools.com/cpp/cpp_intro.asp"
                target="_blank"
                className="flex py-2 px-4 text-md font-bold flex-grow bg-blue-900 rounded-full justify-around text-white gap-2 items-center hover:scale-[1.05] transition-all duration-300"
              >
                <div className="flex items-center justify-center gap-2">
                  <PiFileCppFill />
                  C++
                </div>
              </Link>

            </div>


          </div>
          <div className="border border-neutral-600 shadow-md shadow-neutral-950 rounded-lg w-2/5 max-md:w-full px-6 py-4 flex flex-col gap-4 animate-fade-right animate-delay-500">
            <p className="text-2xl font-bold">Softskills</p>
            <p className="mb-2 text-[1.2rem]">Simple yet valuable skills I was able to develop and apply throughout my academic journey.</p>

            <div className="flex flex-row gap-2 flex-wrap justify-between">
              <div className="py-2 px-4 text-md flex flex-grow items-center justify-center bg-neutral-800  cursor-default">
                Autodidatism
              </div>
              <div className="py-2 px-4 text-md flex flex-grow items-center justify-center bg-neutral-800  cursor-default">
                Discipline
              </div>
              <div className="py-2 px-4 text-md flex flex-grow items-center justify-center bg-neutral-800  cursor-default">
                Clean Code
              </div>
              <div className="py-2 px-4 text-md flex flex-grow items-center justify-center bg-neutral-800  cursor-default">
                Emotional Intelligence
              </div>
              <div className="py-2 px-4 text-md flex flex-grow items-center justify-center bg-neutral-800  cursor-default">
                Creativity
              </div>
              <div className="py-2 px-4 text-md flex flex-grow items-center justify-center bg-neutral-800  cursor-default">
                Adaptability
              </div>
              <div className="py-2 px-4 text-md flex flex-grow items-center justify-center bg-neutral-800  cursor-default">
                Team Work
              </div>
              <div className="py-2 px-4 text-md flex flex-grow items-center justify-center bg-neutral-800  cursor-default">
                Logical Communication
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}