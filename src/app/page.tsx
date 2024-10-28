import React from 'react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="page">
      <div className='bg-[#151515] flex h-full max-w-7xl mx-auto px-4 py-6 sm:px-6 sm:py-10 lg:px-8'>
        <div>
          <p className='text-xl font-bold'>Hello! 👋🏻<br />I am Thiago!</p>
          <p className='italic'>Building things for the internet...</p>
          <button className="!bg-blue-500 text-white font-bold py-2 px-4 rounded">About me</button>
        </div>
      </div>
    </div>
  );
}
