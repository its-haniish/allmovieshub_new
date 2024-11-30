import Navbar from '../components/Navbar'
import React, { useState } from 'react'
import Header from '../components/Header'
import PaginationBar from '../components/PaginationBar'
import useMobile from '../hooks/useMobile';
import VeriticalBannerAdLong from '../components/ads/VeriticalBannerAdLong'
import VeriticalBannerAdShort from '../components/ads/VeriticalBannerAdShort'
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';


const Home = () => {
    const isMobile = useMobile();
    const [movies] = useState([
        {
            featuredImage: 'https://allmovieshub.pl/wp-content/uploads/2024/11/dzDMewC0Hwv01YFGHDFJUW6UFGHYJBNYJFJDFJHY-165x248.webp',
            title: 'Download Flow | 2024 | English With Subtitles | 480p 720p 1080p',
            slug: 'download-flow-2024-english-with-subtitles-480p-720p-1080p',
            metaDesc: 'Download Flow | 2024 | English With Subtitles | 480p 720p 1080p in HD quality for free.',
        },
        {
            featuredImage: 'https://allmovieshub.pl/wp-content/uploads/2024/11/A12qS4ZGdlI9Epyh825RBSRGDFGASGADFG-165x248.webp',
            title: 'Download Outpost | 2008 | Hindi – English | 480p 720p 1080p',
            slug: 'download-outpost-2008-hindi-english-480p-720p-1080p',
        }, {
            featuredImage: 'https://allmovieshub.pl/wp-content/uploads/2024/11/7Z2K08J0WantJHNa0vLEGFSDFGVGSDFSGDDGF-165x248.webp',
            title: 'Download [18+] Pleasure | 2021 | English With Subtitles | 480p 720p 1080p',
            slug: 'download-18-pleasure-2021-english-with-subtitles-480p-720p-1080p',
        },
        {
            featuredImage: 'https://allmovieshub.pl/wp-content/uploads/2024/11/loZHFn4RoTeh4t1I4GDVGFGFRRYRGGRG-165x248.webp',
            title: 'Download Stormageddon | 2015 | Hindi – English | 480p 720p 1080p',
            slug: 'download-stormageddon-2015-hindi-english-480p-720p-1080p',
        }, {
            featuredImage: 'https://allmovieshub.pl/wp-content/uploads/2024/11/4Ki6hf0Y5RGSDDFGSDHFGHSHJ-165x248.webp',
            title: 'Download Smile 2 | 2024 | English With Subtitles | 480p 720p 1080p',
            slug: 'download-smile-2-2024-english-with-subtitles-480p-720p-1080p',
        }, {
            featuredImage: 'https://allmovieshub.pl/wp-content/uploads/2024/11/wKO8hzAgJyl2X6chwt9GDFGVBDHGDFGDSH-165x248.webp',
            title: 'Download You Call It Passion | 2015 | BluRay | Hindi-Korean | 480p 720p 1080p',
            slug: 'download-you-call-it-passion-2015-bluray-hindi-korean-480p-720p-1080p',
        }, {
            featuredImage: 'https://allmovieshub.pl/wp-content/uploads/2024/11/13ogcfzZ0vUfB7zgnYUCV83ByvC-165x248.webp',
            title: 'Download [18+] Woman of Desire | 1994 | English With Subtitles | 480p 720p 1080p',
            slug: 'download-18-woman-of-desire-1994-english-with-subtitles-480p-720p-1080p',
        }, {
            featuredImage: 'https://allmovieshub.pl/wp-content/uploads/2024/11/ytCOOPnY9PwPdjBfTthtssthghstyhghshhtyh-165x248.webp',
            title: 'Download Kangaroo | 2024 | Hindi-Kannada | 480p 720p 1080p',
            slug: 'download-kangaroo-2024-hindi-kannada-480p-720p-1080p',
        }, {
            featuredImage: 'https://allmovieshub.pl/wp-content/uploads/2024/11/fkOs1qL15vqxO9t96GwARGDFGAGFGD-165x248.webp',
            title: 'Download Kishkindha Kaandam | 2024 | Hindi+Malayalam | 480p 720p 1080p',
            slug: 'download-kishkindha-kaandam-2024-hindimalayalam-480p-720p-1080p',
        }, {
            featuredImage: 'https://allmovieshub.pl/wp-content/uploads/2024/11/AJRGKJAGAJIOAJHRFGAHIORTGGRA-165x248.webp',
            title: 'Download Entrapment | 1999 | Hindi – English | 480p 720p 1080p',
            slug: 'download-entrapment-1999-hindi-english-480p-720p-1080p',
        }, {
            featuredImage: 'https://allmovieshub.pl/wp-content/uploads/2024/11/hpvHqAiusQtGNDx48dAHSHGSDHFGSH-165x248.webp',
            title: 'Download Sisters | 2015 | Hindi – English | 480p 720p 1080p',
            slug: 'download-sisters-2015-hindi-english-480p-720p-1080p',
        }, {
            featuredImage: 'https://allmovieshub.pl/wp-content/uploads/2024/11/bdTGkKvT5Cnlk8gXFYDVDSDGVSDESDGESDVESDG-165x248.webp',
            title: 'Download Buddy | 2024 | Hindi – Telugu | 480p 720p 1080p',
            slug: 'download-buddy-2024-hindi-telugu-480p-720p-1080p',
        }, {
            featuredImage: 'https://allmovieshub.pl/wp-content/uploads/2024/11/g7X4FmgN58DyXKD17F15tdhfbfghdshdfbhh-165x248.webp',
            title: 'Download Abbara | 2022 | Hindi-Kannada | 480p 720p 1080p',
            slug: 'download-abbara-2022-hindi-kannada-480p-720p-1080p',
        }, {
            featuredImage: 'https://allmovieshub.pl/wp-content/uploads/2024/11/vQgXwuJrlpzGDI8169tRQrtuytfhdfufhfdgj-165x248.webp',
            title: 'Download Lost Girls and Love Hotels | 2020 | English With Subtitles | 480p 720p 1080p',
            slug: 'download-lost-girls-and-love-hotels-2020-english-with-subtitles-480p-720p-1080p',
        }, {
            featuredImage: 'https://allmovieshub.pl/wp-content/uploads/2024/11/zD2UZkh0DwbDEMuOaergafdgvasdgfdsharfg-165x248.webp',
            title: 'Download Monster Summer | 2024 | English With Subtitles | 480p 720p 1080p',
            slug: 'download-monster-summer-2024-english-with-subtitles-480p-720p-1080p',
        }, {
            featuredImage: 'https://allmovieshub.pl/wp-content/uploads/2024/11/silxnsoelZ0qXp4BmefgdscEgdsgfEdgdg-165x248.webp',
            title: 'Download Goodrich | 2024 | English With Subtitles | 480p 720p 1080p',
            slug: 'download-goodrich-2024-english-with-subtitles-480p-720p-1080p',
        }, {
            featuredImage: 'https://allmovieshub.pl/wp-content/uploads/2024/11/RGREGYADRGSADDFGMLSDHYSFHSJH-165x248.webp',
            title: 'Download Black Cab | 2024 | English With Subtitles | 480p 720p 1080p',
            slug: 'download-black-cab-2024-english-with-subtitles-480p-720p-1080p',
        }, {
            featuredImage: 'https://allmovieshub.pl/wp-content/uploads/2024/11/xHQEeUT3Ac4fTY72UeNrDRHSDBHSDFHSFGHNDFTUTYJDGYYK-165x248.webp',
            title: 'Download Back To Black | 2024 | Hindi – English | 480p 720p 1080p',
            slug: 'download-back-to-black-2024-hindi-english-480p-720p-1080p',
        }, {
            featuredImage: 'https://allmovieshub.pl/wp-content/uploads/2024/11/2um206PiWGGckB6mXcXDNOfvghfdghdts-165x248.webp',
            title: 'Download American Warships | 2012 | Hindi – English | 480p 720p 1080p',
            slug: 'download-american-warships-2012-hindi-english-480p-720p-1080p',
        }
    ]);

    return (
        <>
            <Helmet>
                <title>AllMoviesHub - 300mb Movies, 480p Movies, 720p Movies, Hindi Dubbed
                    Series, 1080p Movies, Tv series download, Hubflix, Hubflixhd, Thehubflix,
                    Hdmovieshub, Hdmovieshub.in, Hdmovieshub 300mb, Allmovieshub, Mkvhub,
                    dailydrivelink, moviesflix, hdmoviearea</title>
                <meta name="description" content="AllMoviesHub is a platform that provides free access to a wide range of movies and TV shows, including content from Bollywood, Hollywood, South Indian cinema, and various other languages." />
                <meta name="keywords" content="allmovieshub, all movies hub, allmoviehub, all movie hub, all movie hub com, all movies hub com, hd movies hub 300, hdmovieshub.in 2022, hub hd movies, hdmovieshub.in 2023, movie hub 300, movies hub 300, hdmovieshub 2022, hdmovieshub 300mb, movies 300mb mkv, movies mkv 300mb, hubflix 300, movies hubflix, allmovieshub in 2023, hubflix 300mb, hd movie hub 300mb, hdmovieshub hubflix, movie hub 300mb, all hdmoviearea, hdmovieshub.in 2019, 300mb movies all movies hub, hubflix com movie" />
            </Helmet>
            {
                isMobile ? (
                    <>
                        <Navbar />
                        <Header />

                        <section className="w-full grid grid-cols-2 gap-4 bg-[#111111] pt-6 px-3">
                            <>
                                {movies.slice(0, 8).map((movie) => (
                                    <div key={movie._id} className="flex flex-col justify-center items-center gap-3 w-full overflow-hidden h-fit">
                                        <div
                                            className="border-4 rounded-lg cursor-pointer"
                                            style={{
                                                borderImage: "linear-gradient(to right, orange, green) 1",
                                                borderImageSlice: 1,
                                            }}
                                        >
                                            <div className="w-full" style={{ position: 'relative', height: 'auto' }}>
                                                <img
                                                    src={movie.featuredImage}
                                                    alt="Movie"
                                                    width={600}
                                                    height={400}
                                                />
                                            </div>
                                        </div>

                                        <a href={`/${movie.slug}`} className="w-full text-[0.7rem] text-center focus:text-red-600" >
                                            {movie.title}
                                        </a>
                                    </div>
                                ))
                                }

                                <div className='border-4 rounded-lg cursor-pointer flex justify-center items-center '
                                    style={{
                                        borderImage: "linear-gradient(to right, orange, green) 1",
                                        borderImageSlice: 1,
                                    }}
                                >
                                    <VeriticalBannerAdShort />
                                </div>


                                {movies.slice(8, 19).map((movie) => (
                                    <div key={movie._id} className="flex flex-col justify-center items-center gap-3 w-full overflow-hidden h-fit">
                                        <div
                                            className="border-4 rounded-lg cursor-pointer"
                                            style={{
                                                borderImage: "linear-gradient(to right, orange, green) 1",
                                                borderImageSlice: 1,
                                            }}
                                        >
                                            <div className="w-full" style={{ position: 'relative', height: 'auto' }}>
                                                <img
                                                    src={movie.featuredImage}
                                                    alt="Movie"
                                                    width={600}
                                                    height={400}
                                                />
                                            </div>
                                        </div>

                                        <a href={`/${movie.slug}`} className="w-full text-[0.7rem] text-center focus:text-red-600" >
                                            {movie.title}
                                        </a>
                                    </div>
                                ))
                                }

                            </>

                        </section>

                        <div className='bg-[#111111] w-full flex justify-center items-center'>
                            <VeriticalBannerAdShort />
                        </div>

                        <section className="w-full gap-3 bg-[#111111] pt-6 h-fit p-3 pb-6 flex justify-center items-center">
                            {<PaginationBar page={1} moviesLength={movies.length} />}
                        </section>
                        <Footer />


                    </>
                ) : (
                    <main style={{ background: "url('/bg.webp')", backgroundRepeat: "repeat" }} className='w-screen h-fit flex flex-col justify-center items-center'>
                        <main className='w-[55vw]'>
                            <Navbar />
                            <Header />
                            <section className='w-[55vw] grid grid-cols-4 gap-3 bg-[#111111] pt-6 h-fit p-3'>
                                <div className='absolute left-0 bottom-0'>
                                    <VeriticalBannerAdLong />
                                </div>
                                <>
                                    {movies.slice(0, 8).map((movie) => (
                                        <div key={movie._id} className='flex flex-col justify-center items-center gap-3 w-full overflow-hidden h-fit'>
                                            <div
                                                className="border-4 rounded-lg cursor-pointer"
                                                style={{
                                                    borderImage: "linear-gradient(to right, orange, green) 1",
                                                    borderImageSlice: 1,
                                                }}
                                            >
                                                <a href="https://offspringthisscarcely.com/f2hzqz837i?key=0c7d11d4e7eb7b38a83d1c36f742341d">
                                                    <img
                                                        src={movie.featuredImage}
                                                        alt="Logo"
                                                        width={180}
                                                        height={100}
                                                        layout="responsive"
                                                    />
                                                </a>
                                            </div>

                                            <a href={`/${movie.slug}`} target='_blank' rel='noreferrer' className='w-[175px] text-[0.7rem] text-center focus:text-red-600' >
                                                {movie.title}
                                            </a>
                                        </div>
                                    ))}
                                    <div className='border-4 rounded-lg cursor-pointer flex justify-center items-center '
                                        style={{
                                            borderImage: "linear-gradient(to right, orange, green) 1",
                                            borderImageSlice: 1,
                                        }}
                                    >
                                        <VeriticalBannerAdShort />
                                    </div>
                                    {movies.slice(8, 19).map((movie) => (
                                        <div key={movie._id} className='flex flex-col justify-center items-center gap-3 w-full overflow-hidden h-fit'>
                                            <div
                                                className="border-4 rounded-lg cursor-pointer"
                                                style={{
                                                    borderImage: "linear-gradient(to right, orange, green) 1",
                                                    borderImageSlice: 1,
                                                }}
                                            >
                                                <a href="https://offspringthisscarcely.com/f2hzqz837i?key=0c7d11d4e7eb7b38a83d1c36f742341d">
                                                    <img
                                                        src={movie.featuredImage}
                                                        alt="Logo"
                                                        width={180}
                                                        height={100}
                                                        layout="responsive"
                                                    />
                                                </a>
                                            </div>

                                            <a href={`/${movie.slug}`} target='_blank' rel='noreferrer' className='w-[175px] text-[0.7rem] text-center focus:text-red-600' >
                                                {movie.title}
                                            </a>
                                        </div>
                                    ))}


                                </>
                            </section>

                            {<PaginationBar page={1} moviesLength={movies.length} />}
                            <Footer />
                        </main>


                    </main>
                )
            }
        </>
    );
};

export default Home;



