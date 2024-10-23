"use client"
import Navbar from '@/components/Navbar'
import React, { useState } from 'react'
import Header from '@/components/Header'
import useMobile from "@/hooks/useMobile"

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
            background: url('/bg.webp')
          }}>
            <Navbar />
            <Header />
            <div>page</div>
          </main>
      }

    </>
  )
}

export default Home