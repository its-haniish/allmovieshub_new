import Navbar from '../components/Navbar'
import React, { useEffect, useState, Suspense } from 'react'
import Header from '../components/Header'
import { BallTriangle } from "react-loader-spinner"
import PaginationBar from '../components/PaginationBar'
import { useSearchParams } from 'react-router-dom';
import useMobile from '../hooks/useMobile';
import VeriticalBannerAdLong from '../components/ads/VeriticalBannerAdLong'
import VeriticalBannerAdShort from '../components/ads/VeriticalBannerAdShort'
import Footer from '../components/Footer'

const Home = () => {
    const isMobile = useMobile();
    const [searchParams] = useSearchParams();  // Destructure correctly to get the searchParams
    const [page, setPage] = useState(1);
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const searchQuery = searchParams.get('search');


    const fetchMovies = async (page) => {
        setLoading(true);
        try {

            const res = await fetch(`${process.env.REACT_APP_BASE_URL}/movies?page=${page}`);
            const data = await res.json();

            if (data) {
                if (data.length === 0) {
                    setPage(1);
                    setLoading(false);
                    return;
                }
                setMovies([...data]);
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }


    const searchMovies = async (searchQuery, page) => {
        setLoading(true);
        try {

            const res = await fetch(`${process.env.REACT_APP_BASE_URL}/search?search=${searchQuery}&page=${page}`);
            const data = await res.json();



            if (data) {

                if (data.posts.length === 0) {
                    setPage(1)
                    setMovies([]);
                    setLoading(false);
                    return;
                }
                setMovies([...data.posts]);
                setLoading(false);
            }

        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }




    useEffect(() => {
        // Set page from URL search parameters
        const currentPage = searchParams.get('page') ? parseInt(searchParams.get('page')) : 1;
        setPage(currentPage);
        // Set searchQuery from URL search parameters
        if (searchQuery) {
            searchMovies(searchQuery, currentPage);
        }
    }, [searchParams, searchQuery]);

    useEffect(() => {
        // Fetch movies when `searchQuery` changes
        if (searchQuery) {
            searchMovies(searchQuery, page);
            return;
        }
        // Fetch movies when `page` changes
        fetchMovies(page);

    }, [page, searchQuery]);

    return (
        <Suspense fallback={
            <div className='w-screen h-screen flex justify-center items-center'>
                <p>Loading...</p>
            </div>}>
            {
                isMobile ? (
                    <>
                        <Navbar />
                        <Header />



                        <section className="w-full grid grid-cols-2 gap-4 bg-[#111111] pt-6 px-3">
                            {loading ? (
                                <div className="w-[100vw] h-[58vh] flex gap-6 flex-col justify-center items-center flex-wrap">
                                    <BallTriangle height={100} width={100} radius={5} color="#4fa94d" ariaLabel="ball-triangle-loading" visible={true} />
                                    <p className="font-semibold tracking-wider">Loading...</p>
                                </div>
                            ) : (
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


                            )}


                        </section>

                        <div className='bg-[#111111] w-full flex justify-center items-center'>
                            <VeriticalBannerAdShort />
                        </div>

                        <section className="w-full gap-3 bg-[#111111] pt-6 h-fit p-3 pb-6 flex justify-center items-center">
                            {!loading && <PaginationBar page={page} moviesLength={movies.length} />}
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

                                    )
                                }
                            </section>




                            {!loading && <PaginationBar page={page} moviesLength={movies.length} />}
                            <Footer />
                        </main>


                    </main>
                )
            }
        </Suspense >
    );
};

export default Home;



