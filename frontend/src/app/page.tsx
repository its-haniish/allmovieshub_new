"use client"
import Navbar from '@/components/Navbar'
import React, { useState } from 'react'
import Header from '@/components/Header'
import useMobile from "@/hooks/useMobile"
import Image from 'next/image'

const Home: React.FC = () => {
  const isMobile = useMobile();
  return (
    <>
      {
        isMobile ?
          <>
            <Navbar />
            <Header />
            <div>page</div>
          </>
          :
          <main style={{
            background: "url('/bg.webp')",
          }} className='w-screen h-screen flex justify-center items-start'>

            <main className='w-[55vw]'>

              <Navbar />
              <Header />

              <section className='w-[55vw] grid grid-cols-5 gap-3 bg-[#111111] pt-6 h-fit p-3'>

                {Array(8).fill("").map((_, index) => (
                  <div key={index} className='flex flex-col justify-center items-start gap-3 w-full overflow-hidden h-fit'>
                    <div className="border-4 rounded-lg cursor-pointer" style={{ borderImage: "linear-gradient(to right, orange, green) 1;" }}>
                      <Image
                        src="/poster.webp" // Path to your image
                        alt="Logo"     // Description for accessibility
                        width={180}    // Desired width
                        height={100}   // Desired height
                        layout="responsive" // This ensures the aspect ratio is maintained
                      />
                    </div>
                    <a href="#" className='w-[175px] text-[0.8rem] text-center hover:text-red-600'>
                      Download Borderlands | 2024 | Hindi-English | 480p 720p 1080p
                    </a>
                  </div>
                ))}

              </section>

              {/* pagination bar */}
              <section>

              </section>
            </main>


          </main>
      }

    </>
  )
}

export default Home