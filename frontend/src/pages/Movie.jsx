import React, { Suspense, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import useMobile from '../hooks/useMobile';
import { BallTriangle } from 'react-loader-spinner';
import { useSearchParams } from 'react-router-dom';

export default function Movie() {

  const isMobile = useMobile();
  const [searchParams] = useSearchParams();
  const [slug, setSlug] = useState("");
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState(null);

  const fetchMovie = async (slug) => {
    setLoading(true);
    try {
      const res = await fetch(`${process.env.REACT_APP_BASE_URL}/fetch-one?slug=${slug}`);
      const data = await res.json();
      if (data) {
        setMovie([...data]);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }
  useEffect(() => {
    // Set page from URL search parameters
    const currentSlug = searchParams.get('page') ? parseInt(searchParams.get('page')) : 1;
    setSlug(currentSlug);
}, [searchParams]);

  useEffect(() => {
    fetchMovie()
  }, [])

  return (
    <Suspense
      fallback={
        <div className='w-screen h-screen flex justify-center items-center'>
          <p>Loading...</p>
        </div>
      }
    >
      {
        isMobile ?
          (
            <>
              <Navbar />
              <Header />
            </>

          ) :
          (
            <main style={{ background: "url('/bg.webp')", backgroundRepeat: "repeat" }} className='w-screen h-fit flex justify-center items-start'>
              <main className='w-[55vw]'>
                <Navbar />
                <Header />
                <section className='w-[55vw] grid grid-cols-4 gap-3 bg-[#111111] pt-6 h-fit p-3'>
                  {
                    loading ? (
                      <div className='w-[53.5vw] h-[58vh] flex gap-6 flex-col justify-center items-center'>
                        <BallTriangle
                          height={100}
                          width={100}
                          radius={5}
                          color="#4fa94d"
                          ariaLabel="ball-triangle-loading"
                          visible={true}
                        />
                        <p className='font-semibold tracking-wider'>Loading...</p>
                      </div>
                    ) : (
                      "Movie Content"
                    )
                  }
                </section>
              </main>
            </main>
          )
      }
    </Suspense>

  )
}
