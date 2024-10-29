
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="page relative overflow-hidden">
      <div className='flex flex-col w-7xl mx-auto gap-5 px-4 py-6 sm:px-6 sm:py-10 lg:px-8 sm:flex-row'>
        <div className="flex flex-col">
          <p className='title text-[3rem] font-bold'>About me... </p>
          <p className='text-[1.3rem]'>I am currently a student of Integrated High School in Technical Computer Science at the 
            Federal Institute of São Paulo, and I am seeking to develop myself as a FullStack developer.
            <br />My actual goal is to become proeficient in 
            <span className="text-violet-700"> React</span>, 
            <span className="text-violet-700"> Nextjs</span>,
            <span className="text-violet-700"> Nodejs</span> and
            <span className="text-violet-700"> Expressjs</span>.
          </p>
        </div>
        <div className="">
            <Image src='/pic.jpg' alt='picture' height={700} width={700}></Image>
        </div>
      </div>
    </div>
  );
}
