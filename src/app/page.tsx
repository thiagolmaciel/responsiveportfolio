'use client'
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";


const BgImage = () => {
  const svg = useRef(null);
  useEffect(() => {
    if (svg.current) {
      gsap.to(svg.current, {
        rotation: '+360',
        duration: 3,
        repeat: -1,
        ease: 'none'
      });
    }
  }, [])
  return <div className="svg" ref={svg}>
    <Image src='/drawing.svg' alt='' height={1000} width={1000}></Image>
  </div>;
}


export default function Home() {
  return (
    <div className="page relative overflow-hidden">
      <div className='flex mih-h-screen w-7xl mx-auto px-4 py-6 sm:px-6 sm:py-10 lg:px-8'>
        <div className="flex flex-col justify-center">
          <p className='animation title text-[5rem] font-bold animate-fade-right'>Hello! 👋🏻<br/></p>
          <p className='animation title text-[5rem] font-bold animate-fade-right animate-delay-300'>I am Thiago!</p>
          <p className='text-[1.5rem] mb-4 animate-fade-down animate-delay-300 text-neutral-400'>Building things for the internet...</p>
          <Link href='/about-me/'>
            <button className="!bg-violet-700 py-3 px-4 rounded text-white text-xl font-bold transition-all hover:py-4 hover:px-5 hover:text-2xl active:bg-white active:text-violet-700 animate-in animate-jump-in animate-delay-500">About me</button>
          </Link>
        </div>
      </div>
      <div className="absolute right-0 bottom-0 z-[-10]">
        <BgImage />
      </div>
    </div>
   
  );
}
