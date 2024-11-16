import React, { Suspense, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import useMobile from '../hooks/useMobile';
import { BallTriangle } from 'react-loader-spinner';
import SquareAd from '../components/ads/SquareAd';
import VeriticalBannerAdLong from '../components/ads/VeriticalBannerAdLong';
import HorizontalBannerSmall from '../components/ads/HorizontalBannerSmall';

export default function Movie() {
  const isMobile = useMobile();
  const { slug } = useParams(); // Extract the slug from the URL path
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState(null);

  const fetchMovie = async (slug) => {
    setLoading(true);
    try {
      const res = await fetch(`${process.env.REACT_APP_BASE_URL}/fetch-one?slug=${slug}`);
      const data = await res.json();
      if (data) {
        setMovie(data); // Store the fetched movie data directly
      }
    } catch (error) {
      console.error("Error fetching movie:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (slug) {
      fetchMovie(slug);
    }
  }, [slug]); // Fetch movie whenever the slug changes

  return (
    <Suspense
      fallback={
        <div className="w-screen h-screen flex justify-center items-center">
          <p>Loading...</p>
        </div>
      }
    >
      {isMobile ? (
        <>
          <Navbar />
          <Header />
          {loading ? (
            <div className="w-full h-[50vh] flex justify-center items-center">
              <BallTriangle height={100} width={100} radius={5} color="#4fa94d" ariaLabel="ball-triangle-loading" visible={true} />
              <p className="font-semibold tracking-wider">Loading...</p>
            </div>
          ) : (
            <div className="p-4">
              {movie ? (
                <>
                  <h1 className="text-xl font-semibold">{movie.title}</h1>
                  <div className="text-white p-4 rounded-lg my-6">
                    <div className="mt-2 ">
                      <span className='text-red-200 '> {movie.title} </span>. We provide direct download links for best qualities and fast downloads. You can contact us on Telegram for the latest updates.
                    </div>
                    <p className="mt-4 ">
                      <span className='text-red-400 font-semibold'>AllMoviesHub</span> is the best online platform for downloading Dual Audio <span className='text-blue-400 font-semibold'>[Hindi-English]</span> Series [300MB], Dual Audio <span className='text-purple-400 font-semibold'>[Hindi-English]</span> Movies Mkv <span className='text-orange-400 font-semibold'>[1080]</span>, Hindi Dubbed Movies Mkv <span className='text-aqua-400 font-semibold'>[720]</span>. We provide direct <span className='text-green-400 font-semibold'>G-Drive</span> download links for fast and secure downloading. Click on the download button below and follow the steps to start downloading.
                    </p>
                  </div>
                  <img src={movie.featuredImage} alt={movie.title} className="w-full h-auto my-4" />

                  {
                    movie.synopsis !== "No synopsis available" &&
                    <h2 className='font-bold text-xl text-yellow-400 text-center'>Synopsis:</h2>
                  }
                  <p className="text-sm text-gray-400 mb-3">{movie?.synopsis === "No synopsis available" ? movie.title : movie.synopsis}</p>
                  <hr />
                  <p ><strong className='text-yellow-400'>Director:</strong> {movie.director}</p>
                  <hr />
                  <p ><strong className='text-yellow-400'>Genres:</strong> {movie.genres}</p>
                  <hr />
                  <p ><strong className='text-yellow-400'>Release Year:</strong> {movie.releaseYear}</p>
                  <hr />
                  <p ><strong className='text-yellow-400'>IMDB Rating:</strong> {movie.imdbRating}</p>
                  <hr />
                  <p ><strong className='text-yellow-400'>Language:</strong> {movie.language}</p>
                  <hr />
                  <p ><strong className='text-yellow-400'>File Size:</strong> {movie.fileSize}</p>
                  <hr />
                  <p ><strong className='text-yellow-400'>Quality:</strong> {movie.quality}</p>
                  <hr />
                  <p ><strong className='text-yellow-400'>Stars:</strong> {movie.starCast}</p>
                  <hr />
                  <img src={movie.image} alt={movie.title} className="w-full h-auto my-4 mx-auto" />

                  {/* sqaure ad */}
                  <div className='flex justify-center items-center'>
                    <SquareAd />
                  </div>

                  {/* Download Links */}
                  <div className="mt-6">
                    <h3 className="font-bold text-xl text-yellow-400 text-center">Download Links:</h3>
                    {movie.downloadLinks
                      .filter(link => link.link && link.type)
                      .map((link, index) => {
                        const colors = ['text-red-400', 'text-green-400', 'text-blue-400', 'text-pink-400', 'text-orange-400', 'text-purple-400', 'text-teal-400'];
                        const colorClass = colors[index % colors.length];
                        return (
                          <div key={index} className="mt-2 text-center">
                            <hr />
                            <a
                              href={link.link}
                              className={`${colorClass} underline`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {link.type} Links [{link.size}]
                            </a>
                          </div>
                        );
                      })}
                    <hr />
                  </div>
                </>
              ) : (
                <p>No movie found for slug: {slug}</p>
              )}
            </div>
          )}
        </>
      ) : (
        <main style={{ background: "url('/bg.webp')", backgroundRepeat: "repeat" }} className="w-screen h-fit flex justify-center items-start">
          <main className="w-[55vw]">
            <Navbar />
            <Header />
            <div className='absolute left-0 bottom-0'>
              <VeriticalBannerAdLong />
            </div>

            <section className="w-[55vw] grid grid-cols-4 gap-3 bg-[#111111] pt-6 h-fit p-3">
              {loading ? (
                <div className="w-[53.5vw] h-[58vh] flex gap-6 flex-col justify-center items-center">
                  <BallTriangle height={100} width={100} radius={5} color="#4fa94d" ariaLabel="ball-triangle-loading" visible={true} />
                  <p className="font-semibold tracking-wider">Loading...</p>
                </div>
              ) : movie ? (
                <div className="col-span-4">
                  <h1 className="text-2xl font-semibold">{movie.title}</h1>
                  <div className="text-white p-4 rounded-lg my-6">
                    <div className="mt-2 text-[0.7rem]">
                      <span className='text-red-200 text-[0.7rem]'> {movie.title} </span>. We provide direct download links for best qualities and fast downloads. You can contact us on Telegram for the latest updates.
                    </div>
                    <div className='flex justify-center items-center bg-[#111111]'>
                      <HorizontalBannerSmall />
                    </div>

                    <p className="mt-4 text-[0.7rem]">
                      <span className='text-red-400 font-semibold'>AllMoviesHub</span> is the best online platform for downloading Dual Audio <span className='text-blue-400 font-semibold'>[Hindi-English]</span> Series [300MB], Dual Audio <span className='text-purple-400 font-semibold'>[Hindi-English]</span> Movies Mkv <span className='text-orange-400 font-semibold'>[1080]</span>, Hindi Dubbed Movies Mkv <span className='text-aqua-400 font-semibold'>[720]</span>. We provide direct <span className='text-green-400 font-semibold'>G-Drive</span> download links for fast and secure downloading. Click on the download button below and follow the steps to start downloading.
                    </p>
                  </div>
                  <img src={movie.featuredImage} alt={movie.title} className="w-[40%] h-auto my-4 mx-auto" />
                  {
                    movie.synopsis !== "No synopsis available" &&
                    <h2 className='mt-2 font-bold  text-center text-yellow-400 my-4 text-[1rem]'>Synopsis:</h2>
                  }
                  <p className="text-sm text-gray-400">{movie?.synopsis === "No synopsis available" ? movie.title : movie.synopsis}</p>
                  <div className="mt-4">
                    <hr className='my-4' />
                    <p className='text-[0.7rem]'><strong className='text-yellow-400'>Director:</strong> {movie.director}</p>
                    <hr className='my-4' />
                    <p className='text-[0.7rem]'><strong className='text-yellow-400'>Genres:</strong> {movie.genres}</p>
                    <hr className='my-4' />
                    <p className='text-[0.7rem]'><strong className='text-yellow-400'>Release Year:</strong> {movie.releaseYear}</p>
                    <hr className='my-4' />
                    <p className='text-[0.7rem]'><strong className='text-yellow-400'>IMDB Rating:</strong> {movie.imdbRating}</p>
                    <hr className='my-4' />
                    <p className='text-[0.7rem]'><strong className='text-yellow-400'>Language:</strong> {movie.language}</p>
                    <hr className='my-4' />
                    <p className='text-[0.7rem]'><strong className='text-yellow-400'>File Size:</strong> {movie.fileSize}</p>
                    <hr className='my-4' />
                    <p className='text-[0.7rem]'><strong className='text-yellow-400'>Quality:</strong> {movie.quality}</p>
                    <hr className='my-4' />
                    <p className='text-[0.7rem]'><strong className='text-yellow-400'>Stars:</strong> {movie.starCast}</p>
                    <hr className='my-4' />
                  </div>
                  <div>
                    <h2 className='mt-2 font-bold  text-center text-yellow-400 my-4 text-[1rem]'>ScreenShots:</h2>
                    <img src={movie.image} alt={movie.title} className="w-[50%] h-auto my-4 mx-auto" />
                  </div>
                  {/* sqaure ad */}
                  <div className='flex justify-center items-center'>
                    <SquareAd />
                  </div>
                  {/* Download Links */}
                  <div className="my-6">
                    <h3 className="font-bold text-yellow-400 text-center my-4 text-[1rem]">Download Links:</h3>
                    {movie.downloadLinks
                      .filter(link => link.link && link.type)
                      .map((link, index) => {
                        const colors = ['text-red-400', 'text-green-400', 'text-blue-400', 'text-pink-400', 'text-orange-400', 'text-purple-400', 'text-teal-400'];
                        const colorClass = colors[index % colors.length];
                        return (<>
                          <hr />
                          <div key={index} className="my-4 text-center ">
                            <a
                              href={link.link}
                              className={`${colorClass} underline text-[0.7rem]`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {link.type} Links [{link.size}]
                            </a>
                          </div>
                        </>
                        );
                      })}
                    <hr />
                  </div>
                </div>
              ) : (
                <>

                  <p>No movie found for slug: {slug}</p>
                </>
              )}
            </section>
          </main>
        </main>
      )}
    </Suspense>
  );
}
