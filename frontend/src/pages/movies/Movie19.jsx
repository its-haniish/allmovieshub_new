import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import useMobile from '../../hooks/useMobile';
import SquareAd from '../../components/ads/SquareAd';
import VeriticalBannerAdLong from '../../components/ads/VeriticalBannerAdLong';
import HorizontalBannerSmall from '../../components/ads/HorizontalBannerSmall';
import Footer from '../../components/Footer';
import { Helmet } from 'react-helmet';

export default function Movie() {
  const isMobile = useMobile();

  const [movie] = useState({
    featuredImage: 'https://allmovieshub.pl/wp-content/uploads/2024/11/2um206PiWGGckB6mXcXDNOfvghfdghdts-165x248.webp',
    title: 'Download American Warships | 2012 | Hindi – English | 480p 720p 1080p',
    slug: 'download-american-warships-2012-hindi-english-480p-720p-1080p',
    metaDesc: 'Download American Warships | 2012 | Hindi – English | 480p 720p 1080p in HD quality for free.',
    keywords: ['american', 'warships', '2012', '–'],
    imdbRating: '2.8/10',
    releaseYear: '2012',
    genres: 'Action, Adventure, Sci-Fi, Thriller, War',
    quality: '480p || 720p || 1080p – BluRay',
    fileSize: '300MB || 1GB || 2GB',
    language: 'Dual Audio {Hindi-English}',
    format: 'Mkv',
    director: 'Thunder Levin',
    starCast: 'Mario Van Peebles, Carl Weathers, Johanna Watts',
    synopsis: 'At the point when a US plane is brought down over oceans by an obscure aggressor, the military is certain it was North Korea and another conflict is going to break out. Far more detestable, the genuine aggressor is an outsider equipped power and just a single old warship can stop them.',
    image: 'No image available',
    downloadLinks: [
      {
        type: '480p Links [300MB]',
        link: 'https://ekbiharinews.in/?id=Z3gzNkdUUC82VzZiNndCcWpSNUdLRDNITHNWRVN0dDNmaEJ6MEIyengwVXdWMGRjMVNyemprd2FRY1A4WTBDTmEzZ0V5WmpKT1o1QTVubVBweE02WHdoVUJWZThNdlF0OUpWUlNGamVFNVU9'
      },
      {
        type: '720p Links [1GB]',
        link: 'https://ekbiharinews.in/?id=Z3gzNkdUUC82VzZiNndCcWpSNUdLRDNITHNWRVN0dDNmaEJ6MEIyengwVXdWMGRjMVNyemprd2FRY1A4WTBDTmpzK2pjanN0ZHQxYVZzTWV3RU1nM2JvS3BhREFUaHUrOCszbTJYaFo5dTQ9'
      },
      {
        type: '1080p Links [2GB]',
        link: 'https://ekbiharinews.in/?id=Z3gzNkdUUC82VzZiNndCcWpSNUdLRDNITHNWRVN0dDNmaEJ6MEIyengwVXdWMGRjMVNyemprd2FRY1A4WTBDTkswYldXd0U5SlNBNGRvWVJSOERqUkxDbHF4NFNUQTRPTDN5Mnk0d1JIZVU9'
      }
    ],
    postViews: 6961,
    __v: 0
  });


  return (
    <>
      <Helmet>
        <title>{movie.title}</title>
        <meta name="description" content={movie.metaDesc} />
        <meta name="keywords" content={movie.keywords} />
      </Helmet>
      {isMobile ? (
        <>
          <Navbar />
          <Header />
          {(
            <div className="p-4">
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

              <Footer />
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
              <div className="col-span-4">
                <h1 className="text-2xl font-semibold text-center">{movie.title}</h1>
                <div className="text-white p-4 rounded-lg my-6">
                  <div className="mt-2 text-[1rem]">
                    <span className='text-red-200 text-[1rem]'> {movie.title} </span>. We provide direct download links for best qualities and fast downloads. You can contact us on Telegram for the latest updates.
                  </div>
                  <div className='flex justify-center items-center bg-[#111111]'>
                    <HorizontalBannerSmall />
                  </div>

                  <p className="mt-4 text-[1rem]">
                    <span className='text-red-400 font-semibold'>AllMoviesHub</span> is the best online platform for downloading Dual Audio <span className='text-blue-400 font-semibold'>[Hindi-English]</span> Series [300MB], Dual Audio <span className='text-purple-400 font-semibold'>[Hindi-English]</span> Movies Mkv <span className='text-orange-400 font-semibold'>[1080]</span>, Hindi Dubbed Movies Mkv <span className='text-aqua-400 font-semibold'>[720]</span>. We provide direct <span className='text-green-400 font-semibold'>G-Drive</span> download links for fast and secure downloading. Click on the download button below and follow the steps to start downloading.
                  </p>
                </div>
                <img src={movie.featuredImage} alt={movie.title} className="w-[40%] h-auto my-4 mx-auto" />
                {
                  movie.synopsis !== "No synopsis available" &&
                  <h2 className='mt-2 font-bold  text-center text-yellow-400 my-4 text-[1.4rem]'>Synopsis:</h2>
                }
                <p className="text-sm text-gray-400 text-[1rem]">{movie?.synopsis === "No synopsis available" ? movie.title : movie.synopsis}</p>
                <div className="mt-4">
                  <hr className='my-4' />
                  <p className='text-[1rem]'><strong className='text-yellow-400'>Director:</strong> {movie.director}</p>
                  <hr className='my-4' />
                  <p className='text-[1rem]'><strong className='text-yellow-400'>Genres:</strong> {movie.genres}</p>
                  <hr className='my-4' />
                  <p className='text-[1rem]'><strong className='text-yellow-400'>Release Year:</strong> {movie.releaseYear}</p>
                  <hr className='my-4' />
                  <p className='text-[1rem]'><strong className='text-yellow-400'>IMDB Rating:</strong> {movie.imdbRating}</p>
                  <hr className='my-4' />
                  <p className='text-[1rem]'><strong className='text-yellow-400'>Language:</strong> {movie.language}</p>
                  <hr className='my-4' />
                  <p className='text-[1rem]'><strong className='text-yellow-400'>File Size:</strong> {movie.fileSize}</p>
                  <hr className='my-4' />
                  <p className='text-[1rem]'><strong className='text-yellow-400'>Quality:</strong> {movie.quality}</p>
                  <hr className='my-4' />
                  <p className='text-[1rem]'><strong className='text-yellow-400'>Stars:</strong> {movie.starCast}</p>
                  <hr className='my-4' />
                </div>
                {/* <div>
                    <h2 className='mt-2 font-bold  text-center text-yellow-400 my-4 text-[1rem]'>ScreenShots:</h2>
                    <img src={movie.image} alt={movie.title} className="w-[50%] h-auto my-4 mx-auto" />
                  </div> */}
                {/* sqaure ad */}
                <div className='flex justify-center items-center'>
                  <SquareAd />
                </div>
                {/* Download Links */}
                <div className="my-6">
                  <h3 className="font-bold text-yellow-400 text-center my-4 text-[1.4rem]">Download Links:</h3>
                  {movie.downloadLinks
                    .filter(link => link.link && link.type)
                    .map((link, index) => {
                      const colors = ['text-red-400', 'text-green-400', 'text-blue-400', 'text-pink-400', 'text-orange-400', 'text-purple-400', 'text-teal-400'];
                      const colorClass = colors[index % colors.length];
                      return (<>
                        <hr />
                        <div key={index} className="my-4 text-center ">
                          <a
                            href="/"
                            className={`${colorClass} underline text-[1rem]`}
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

            </section>
            <Footer />
          </main>
        </main>
      )}
    </>
  );
}
