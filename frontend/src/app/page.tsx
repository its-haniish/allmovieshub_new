"use client"
import Navbar from '@/components/Navbar'
import React, { useEffect, useState } from 'react'
import Header from '@/components/Header'
import useMobile from "@/hooks/useMobile"
import Image from 'next/image'
import { MovieCard } from '@/types/movies'
import { BallTriangle } from "react-loader-spinner"
import PaginationBar from '@/components/PaginationBar'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
const Home: React.FC = () => {
  const isMobile = useMobile();
  const searchParams = useSearchParams();
  const [page] = useState<number>(1);
  const [movies, setMovies] = useState<MovieCard[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchMovies = async (page: number) => {
    setLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/movies?page=${page}`);
      const data = await res.json();
      if (data) {
        setMovies([...data]);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }


  useEffect(() => {
    // Use the searchParams API to get the 'page' query parameter
    const currentPage = searchParams.get('page') ? parseInt(searchParams.get('page') as string) : 1;
    fetchMovies(currentPage);
  }, [searchParams]);  // Dependency on searchParams to trigger when query changes


  return (
    <>
      {
        isMobile ?
          <>
            <Navbar />
            <Header />
            <section className="w-full grid grid-cols-2 gap-4 bg-[#111111] pt-6 px-3">
              {loading ? (
                <div className="w-full h-[58vh] flex gap-6 flex-col justify-center items-center">
                  <BallTriangle height={100} width={100} radius={5} color="#4fa94d" ariaLabel="ball-triangle-loading" visible={true} />
                  <p className="font-semibold tracking-wider">Loading...</p>
                </div>
              ) : (
                movies.map((movie) => (
                  <div key={movie._id} className="flex flex-col justify-center items-center gap-3 w-full overflow-hidden h-fit">
                    <div className="border-4 rounded-lg cursor-pointer" style={{ borderImage: "linear-gradient(to right, orange, green) 1;" }}>
                      <div className="w-full" style={{ position: 'relative', height: 'auto' }}>
                        <Image
                          src={movie.featuredImage}
                          alt="Movie Image"
                          width={600}  // Increased width
                          height={400}  // Increased height
                        />
                      </div>
                    </div>
                    <Link href="/" className="w-full text-[0.7rem] text-center hover:text-red-600" passHref>
                      {movie.title}
                    </Link>
                  </div>
                ))
              )}
            </section>

            {/* Pagination Bar */}
            <section className="w-full gap-3 bg-[#111111] pt-6 h-fit p-3 pb-6 flex justify-center items-center">
              <PaginationBar page={page} />
            </section>
          </>
          :
          <main style={{
            background: "url('/bg.webp')",
            backgroundRepeat: "repeat",
          }} className='w-screen h-fit flex justify-center items-start'>

            <main className='w-[55vw]'>

              <Navbar />
              <Header />

              <section className='w-[55vw] grid grid-cols-5 gap-3 bg-[#111111] pt-6 h-fit p-3'>
                {
                  loading ?
                    <div className='w-[53.5vw] h-[58vh] flex gap-6 flex-col justify-center items-center '>
                      <BallTriangle
                        height={100}
                        width={100}
                        radius={5}
                        color="#4fa94d"
                        ariaLabel="ball-triangle-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                      />
                      <p
                        className='font-semibold tracking-wider'
                      >Loading...</p>
                    </div>
                    :
                    movies.map((movie) => (
                      <div key={movie._id} className='flex flex-col justify-center items-start gap-3 w-full overflow-hidden h-fit'>
                        <div className="border-4 rounded-lg cursor-pointer" style={{ borderImage: "linear-gradient(to right, orange, green) 1;" }}>
                          <Image
                            src={movie.featuredImage}
                            alt="Logo"
                            width={180}
                            height={100}
                            layout="responsive"
                          />
                        </div>
                        <Link href="/" className='w-[175px] text-[0.9rem] text-center hover:text-red-600' passHref>
                          {movie.title}
                        </Link>
                      </div>
                    ))
                }

              </section>

              {/* pagination bar */}
              <section className='w-[55vw] gap-3 bg-[#111111] pt-6 h-fit p-3 pb-6 flex justify-center items-center'>
                <PaginationBar page={page} />
              </section>
            </main>


          </main>
      }

    </>
  )
}

export default Home