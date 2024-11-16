import React, { useEffect, useState } from 'react'
import useMobile from '../hooks/useMobile'
import { TbRating18Plus } from "react-icons/tb";
import { FaTelegram } from "react-icons/fa";
import { ImEye } from "react-icons/im";
import { useNavigate } from 'react-router-dom';
import HorizontalBannerSmall from './ads/HorizontalBannerSmall';

const Header = () => {
    const isMobile = useMobile();
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <header>

            {
                isMobile ?
                    <>
                        <div className='flex flex-wrap justify-evenly items-start p-2 gap-2 mb-2 mt-2 '>
                            <div className='w-[45vw] overflow-hidden' onClick={() => window.location.href = "https://offspringthisscarcely.com/f2hzqz837i?key=0c7d11d4e7eb7b38a83d1c36f742341d"}>
                                <button className='w-[47vw] ml-[-4px] px-2 py-3 bg-[#43B51A] text-[0.7rem] rounded-r-full rounded-l-full ' >
                                    DUAL AUDIO CONTENT
                                </button>
                            </div>

                            <div className='w-[45vw] overflow-hidden'>
                                <button className='w-[47vw] ml-[-4px] px-2 py-3 bg-[#FF0000] text-[0.7rem] rounded-r-full rounded-l-full flex justify-center items-center gap-1' onClick={() => window.location.href = "https://offspringthisscarcely.com/f2hzqz837i?key=0c7d11d4e7eb7b38a83d1c36f742341d"}>
                                    <TbRating18Plus size={20} />
                                    DESI JUNCTION
                                </button>
                            </div>


                            <div className='w-[45vw] overflow-hidden'>
                                <button className='w-[47vw] ml-[-4px] px-2 py-3 bg-[#059ADD] text-[0.7rem] rounded-r-full rounded-l-full flex justify-center items-center gap-1' onClick={() => window.location.href = "https://offspringthisscarcely.com/f2hzqz837i?key=0c7d11d4e7eb7b38a83d1c36f742341d"}>
                                    <FaTelegram size={20} />
                                    JOIN TELEGRAM
                                </button>
                            </div>


                            <div className='w-[45vw] overflow-hidden'>
                                <button className='w-[47vw] ml-[-4px] px-2 py-3 bg-[#DF9A17] text-[0.7rem] rounded-r-full rounded-l-full flex justify-center items-center gap-1' onClick={() => window.location.href = "https://offspringthisscarcely.com/f2hzqz837i?key=0c7d11d4e7eb7b38a83d1c36f742341d"}>
                                    HOW TO DOWNLOAD
                                    <ImEye size={20} />
                                </button>
                            </div>

                        </div>

                        <div className='flex justify-evenly items-start gap-2 flex-wrap w-screen'>

                            <button className='w-fit  p-2 px-4 bg-[#0B9607] text-[0.7rem] rounded-r-xl rounded-l-xl flex justify-center items-center gap-1' onClick={() => window.location.href = "https://offspringthisscarcely.com/f2hzqz837i?key=0c7d11d4e7eb7b38a83d1c36f742341d"}>
                                480P
                            </button>

                            <button className='w-fit p-2 px-4 bg-[#0B9607] text-[0.7rem] rounded-r-xl rounded-l-xl flex justify-center items-center gap-1' onClick={() => window.location.href = "https://offspringthisscarcely.com/f2hzqz837i?key=0c7d11d4e7eb7b38a83d1c36f742341d"}>
                                720P
                            </button>


                            <button className='w-fit p-2 px-4 bg-[#0B9607] text-[0.7rem] rounded-r-xl rounded-l-xl flex justify-center items-center gap-1' onClick={() => window.location.href = "https://offspringthisscarcely.com/f2hzqz837i?key=0c7d11d4e7eb7b38a83d1c36f742341d"}>
                                1080P
                            </button>


                            <button className='w-fit  p-2 px-4 bg-[#0B9607] text-[0.7rem] rounded-r-xl rounded-l-xl flex justify-center items-center gap-1' onClick={() => window.location.href = "https://offspringthisscarcely.com/f2hzqz837i?key=0c7d11d4e7eb7b38a83d1c36f742341d"}>
                                2160P 4K
                            </button>


                            <button className='w-fit  p-2 px-4 bg-[#0B9607] text-[0.7rem] rounded-r-xl rounded-l-xl flex justify-center items-center gap-1' onClick={() => window.location.href = "https://offspringthisscarcely.com/f2hzqz837i?key=0c7d11d4e7eb7b38a83d1c36f742341d"}>
                                AMZN PRIME
                            </button>


                            <button className='w-fit  p-2 px-4 bg-[#0B9607] text-[0.7em] rounded-r-xl rounded-l-xl flex justify-center items-center gap-1' onClick={() => window.location.href = "https://offspringthisscarcely.com/f2hzqz837i?key=0c7d11d4e7eb7b38a83d1c36f742341d"}>
                                DISNEY + HOTSTAR
                            </button>


                            <button className='w-fit  p-2 px-4 bg-[#0B9607] text-[0.7rem] rounded-r-xl rounded-l-xl flex justify-center items-center gap-1' onClick={() => window.location.href = "https://offspringthisscarcely.com/f2hzqz837i?key=0c7d11d4e7eb7b38a83d1c36f742341d"}>
                                SONYLIV
                            </button>


                            <button className='w-fit  p-2 px-4 bg-[#0B9607] text-[0.7rem] rounded-r-xl rounded-l-xl flex justify-center items-center gap-1' onClick={() => window.location.href = "https://offspringthisscarcely.com/f2hzqz837i?key=0c7d11d4e7eb7b38a83d1c36f742341d"}>
                                ZEE5
                            </button>


                            <button className='w-fit  p-2 px-4 bg-[#0B9607] text-[0.7rem] rounded-r-xl rounded-l-xl flex justify-center items-center gap-1' onClick={() => window.location.href = "https://offspringthisscarcely.com/f2hzqz837i?key=0c7d11d4e7eb7b38a83d1c36f742341d"}>
                                JIOCINEMA
                            </button>

                            <button className='w-fit  p-2 px-4 bg-[#0B9607] text-[0.7rem] rounded-r-xl rounded-l-xl flex justify-center items-center gap-1' onClick={() => window.location.href = "https://offspringthisscarcely.com/f2hzqz837i?key=0c7d11d4e7eb7b38a83d1c36f742341d"}>
                                HOICHIO
                            </button>


                            <button className='w-fit  p-2 px-4 bg-[#0B9607] text-[0.7rem] rounded-r-xl rounded-l-xl flex justify-center items-center gap-1' onClick={() => window.location.href = "https://offspringthisscarcely.com/f2hzqz837i?key=0c7d11d4e7eb7b38a83d1c36f742341d"}>
                                ALTBALAJI
                            </button>


                            <button className='w-fit  p-2 px-4 bg-[#0B9607] text-[0.7rem] rounded-r-xl rounded-l-xl flex justify-center items-center gap-1' onClick={() => window.location.href = "https://offspringthisscarcely.com/f2hzqz837i?key=0c7d11d4e7eb7b38a83d1c36f742341d"}>
                                BENGALI
                            </button>


                            <button className='w-fit  p-2 px-4 bg-[#0B9607] text-[0.7em] rounded-r-xl rounded-l-xl flex justify-center items-center gap-1' onClick={() => window.location.href = "https://offspringthisscarcely.com/f2hzqz837i?key=0c7d11d4e7eb7b38a83d1c36f742341d"}>
                                GUJARATI
                            </button>


                            <button className='w-fit  p-2 px-4 bg-[#0B9607] text-[0.7rem] rounded-r-xl rounded-l-xl flex justify-center items-center gap-1' onClick={() => window.location.href = "https://offspringthisscarcely.com/f2hzqz837i?key=0c7d11d4e7eb7b38a83d1c36f742341d"}>
                                PUNJABI MOVIES
                            </button>


                            <button className='w-fit  p-2 px-4 bg-[#0B9607] text-[0.7rem] rounded-r-xl rounded-l-xl flex justify-center items-center gap-1' onClick={() => window.location.href = "https://offspringthisscarcely.com/f2hzqz837i?key=0c7d11d4e7eb7b38a83d1c36f742341d"}>
                                MARATHI MOVIES
                            </button>


                            <button className='w-fit  p-2 px-4 bg-[#0B9607] text-[0.7rem] rounded-r-xl rounded-l-xl flex justify-center items-center gap-1' onClick={() => window.location.href = "https://offspringthisscarcely.com/f2hzqz837i?key=0c7d11d4e7eb7b38a83d1c36f742341d"}>
                                HINDI DUBBED MOVIES
                            </button>


                            <button className='w-fit  p-2 px-3 bg-[#0B9607] text-[0.7rem] rounded-r-xl rounded-l-xl flex justify-center items-center gap-1' onClick={() => window.location.href = "https://offspringthisscarcely.com/f2hzqz837i?key=0c7d11d4e7eb7b38a83d1c36f742341d"}>
                                HOLLYWOOD HINDI DUBBED
                            </button>

                            <button className='w-fit  p-2 px-3 bg-[#0B9607] text-[0.7rem] rounded-r-xl rounded-l-xl flex justify-center items-center gap-1' onClick={() => window.location.href = "https://offspringthisscarcely.com/f2hzqz837i?key=0c7d11d4e7eb7b38a83d1c36f742341d"}>
                                SOUTH HINDI DUBBED
                            </button>


                            <button className='w-fit  p-2 px-3 bg-[#0B9607] text-[0.7rem] rounded-r-xl rounded-l-xl flex justify-center items-center gap-1' onClick={() => window.location.href = "https://offspringthisscarcely.com/f2hzqz837i?key=0c7d11d4e7eb7b38a83d1c36f742341d"}>
                                BOLLYWOOD MOVIES
                            </button>


                            <button className='w-fit  p-2 px-4 bg-[#0B9607] text-[0.7rem] rounded-r-xl rounded-l-xl flex justify-center items-center gap-1' onClick={() => window.location.href = "https://offspringthisscarcely.com/f2hzqz837i?key=0c7d11d4e7eb7b38a83d1c36f742341d"}>
                                WEB SERIES
                            </button>

                        </div>

                        {/* second search bar */}

                        <form className='mb-2 '
                            onSubmit={e => {
                                e.preventDefault();
                                window.location.href = `https://allmovieshub.live/search?search=${searchQuery}&page=1`
                            }}
                        >
                            <input type="text"
                                placeholder='Search Movies or WEB-Series here....'
                                className='w-screen mt-3 bg-[#111111] placeholder:text-gray-400
                                 focus:placeholder:text-white text-[0.7rem] py-3 px-2 
                                 border-gray-500 outline-none border-2'
                                onChange={e => setSearchQuery(e.target.value)}
                            />
                        </form>

                    </>
                    :
                    <>
                        <div className='flex pt-4 flex-nowrap justify-evenly items-start p-2 gap-1 pb-4 bg-[#111111]'>
                            <div className='w-[12.5vw] overflow-hidden'>
                                <button className='w-[13vw] ml-[-4px] px-2 py-3 bg-[#43B51A] text-[0.7rem] rounded-r-full rounded-l-full ' onClick={() => window.location.href = "https://offspringthisscarcely.com/f2hzqz837i?key=0c7d11d4e7eb7b38a83d1c36f742341d"}>
                                    DUAL AUDIO CONTENT
                                </button>
                            </div>

                            <div className='w-[12.5vw] overflow-hidden'>
                                <button className='w-[13vw] ml-[-4px] px-2 py-3 bg-[#FF0000] text-[0.7rem] rounded-r-full rounded-l-full flex justify-center items-center gap-1' onClick={() => window.location.href = "https://offspringthisscarcely.com/f2hzqz837i?key=0c7d11d4e7eb7b38a83d1c36f742341d"}>
                                    <TbRating18Plus size={20} />
                                    DESI JUNCTION
                                </button>
                            </div>


                            <div className='w-[12.5vw] overflow-hidden'>
                                <button className='w-[13vw] ml-[-4px] px-2 py-3 bg-[#059ADD] text-[0.7rem] rounded-r-full rounded-l-full flex justify-center items-center gap-1' onClick={() => window.location.href = "https://offspringthisscarcely.com/f2hzqz837i?key=0c7d11d4e7eb7b38a83d1c36f742341d"}>
                                    <FaTelegram size={20} />
                                    JOIN TELEGRAM
                                </button>
                            </div>


                            <div className='w-[12.5vw] overflow-hidden'>
                                <button className='w-[13vw] ml-[-4px] px-2 py-3 bg-[#DF9A17] text-[0.7rem] rounded-r-full rounded-l-full flex justify-center items-center gap-1' onClick={() => window.location.href = "https://offspringthisscarcely.com/f2hzqz837i?key=0c7d11d4e7eb7b38a83d1c36f742341d"}>
                                    HOW TO DOWNLOAD
                                    <ImEye size={20} />
                                </button>
                            </div>

                        </div>

                        <div className='flex w-[55vw] justify-evenly items-start gap-2 flex-wrap bg-[#111111]'>

                            <button className='w-fit  p-2 px-4 bg-[#0B9607] text-[0.7rem] rounded-r-xl rounded-l-xl flex justify-center items-center gap-1' onClick={() => window.location.href = "https://offspringthisscarcely.com/f2hzqz837i?key=0c7d11d4e7eb7b38a83d1c36f742341d"}>
                                480P
                            </button>

                            <button className='w-fit p-2 px-4 bg-[#0B9607] text-[0.7rem] rounded-r-xl rounded-l-xl flex justify-center items-center gap-1' onClick={() => window.location.href = "https://offspringthisscarcely.com/f2hzqz837i?key=0c7d11d4e7eb7b38a83d1c36f742341d"}>
                                720P
                            </button>


                            <button className='w-fit p-2 px-4 bg-[#0B9607] text-[0.7rem] rounded-r-xl rounded-l-xl flex justify-center items-center gap-1' onClick={() => window.location.href = "https://offspringthisscarcely.com/f2hzqz837i?key=0c7d11d4e7eb7b38a83d1c36f742341d"}>
                                1080P
                            </button>


                            <button className='w-fit  p-2 px-4 bg-[#0B9607] text-[0.7rem] rounded-r-xl rounded-l-xl flex justify-center items-center gap-1' onClick={() => window.location.href = "https://offspringthisscarcely.com/f2hzqz837i?key=0c7d11d4e7eb7b38a83d1c36f742341d"}>
                                2160P 4K
                            </button>


                            <button className='w-fit  p-2 px-4 bg-[#0B9607] text-[0.7rem] rounded-r-xl rounded-l-xl flex justify-center items-center gap-1' onClick={() => window.location.href = "https://offspringthisscarcely.com/f2hzqz837i?key=0c7d11d4e7eb7b38a83d1c36f742341d"}>
                                AMZN PRIME
                            </button>


                            <button className='w-fit  p-2 px-4 bg-[#0B9607] text-[0.7em] rounded-r-xl rounded-l-xl flex justify-center items-center gap-1' onClick={() => window.location.href = "https://offspringthisscarcely.com/f2hzqz837i?key=0c7d11d4e7eb7b38a83d1c36f742341d"}>
                                DISNEY + HOTSTAR
                            </button>


                            <button className='w-fit  p-2 px-4 bg-[#0B9607] text-[0.7rem] rounded-r-xl rounded-l-xl flex justify-center items-center gap-1' onClick={() => window.location.href = "https://offspringthisscarcely.com/f2hzqz837i?key=0c7d11d4e7eb7b38a83d1c36f742341d"}>
                                SONYLIV
                            </button>


                            <button className='w-fit  p-2 px-4 bg-[#0B9607] text-[0.7rem] rounded-r-xl rounded-l-xl flex justify-center items-center gap-1' onClick={() => window.location.href = "https://offspringthisscarcely.com/f2hzqz837i?key=0c7d11d4e7eb7b38a83d1c36f742341d"}>
                                ZEE5
                            </button>


                            <button className='w-fit  p-2 px-4 bg-[#0B9607] text-[0.7rem] rounded-r-xl rounded-l-xl flex justify-center items-center gap-1' onClick={() => window.location.href = "https://offspringthisscarcely.com/f2hzqz837i?key=0c7d11d4e7eb7b38a83d1c36f742341d"}>
                                JIOCINEMA
                            </button>

                            <button className='w-fit  p-2 px-4 bg-[#0B9607] text-[0.7rem] rounded-r-xl rounded-l-xl flex justify-center items-center gap-1' onClick={() => window.location.href = "https://offspringthisscarcely.com/f2hzqz837i?key=0c7d11d4e7eb7b38a83d1c36f742341d"}>
                                HOICHIO
                            </button>


                            <button className='w-fit  p-2 px-4 bg-[#0B9607] text-[0.7rem] rounded-r-xl rounded-l-xl flex justify-center items-center gap-1' onClick={() => window.location.href = "https://offspringthisscarcely.com/f2hzqz837i?key=0c7d11d4e7eb7b38a83d1c36f742341d"}>
                                ALTBALAJI
                            </button>


                            <button className='w-fit  p-2 px-4 bg-[#0B9607] text-[0.7rem] rounded-r-xl rounded-l-xl flex justify-center items-center gap-1' onClick={() => window.location.href = "https://offspringthisscarcely.com/f2hzqz837i?key=0c7d11d4e7eb7b38a83d1c36f742341d"}>
                                BENGALI
                            </button>


                            <button className='w-fit  p-2 px-4 bg-[#0B9607] text-[0.7rem] rounded-r-xl rounded-l-xl flex justify-center items-center gap-1' onClick={() => window.location.href = "https://offspringthisscarcely.com/f2hzqz837i?key=0c7d11d4e7eb7b38a83d1c36f742341d"}>
                                GUJARATI
                            </button>


                            <button className='w-fit  p-2 px-4 bg-[#0B9607] text-[0.7rem] rounded-r-xl rounded-l-xl flex justify-center items-center gap-1' onClick={() => window.location.href = "https://offspringthisscarcely.com/f2hzqz837i?key=0c7d11d4e7eb7b38a83d1c36f742341d"}>
                                PUNJABI MOVIES
                            </button>


                            <button className='w-fit  p-2 px-4 bg-[#0B9607] text-[0.7rem] rounded-r-xl rounded-l-xl flex justify-center items-center gap-1' onClick={() => window.location.href = "https://offspringthisscarcely.com/f2hzqz837i?key=0c7d11d4e7eb7b38a83d1c36f742341d"}>
                                MARATHI MOVIES
                            </button>


                            <button className='w-fit  p-2 px-4 bg-[#0B9607] text-[0.7rem] rounded-r-xl rounded-l-xl flex justify-center items-center gap-1' onClick={() => window.location.href = "https://offspringthisscarcely.com/f2hzqz837i?key=0c7d11d4e7eb7b38a83d1c36f742341d"}>
                                HINDI DUBBED MOVIES
                            </button>


                            <button className='w-fit  p-2 px-3 bg-[#0B9607] text-[0.7rem] rounded-r-xl rounded-l-xl flex justify-center items-center gap-1' onClick={() => window.location.href = "https://offspringthisscarcely.com/f2hzqz837i?key=0c7d11d4e7eb7b38a83d1c36f742341d"}>
                                HOLLYWOOD HINDI DUBBED
                            </button>

                            <button className='w-fit  p-2 px-3 bg-[#0B9607] text-[0.7rem] rounded-r-xl rounded-l-xl flex justify-center items-center gap-1' onClick={() => window.location.href = "https://offspringthisscarcely.com/f2hzqz837i?key=0c7d11d4e7eb7b38a83d1c36f742341d"}>
                                SOUTH HINDI DUBBED
                            </button>


                            <button className='w-fit  p-2 px-3 bg-[#0B9607] text-[0.7rem] rounded-r-xl rounded-l-xl flex justify-center items-center gap-1' onClick={() => window.location.href = "https://offspringthisscarcely.com/f2hzqz837i?key=0c7d11d4e7eb7b38a83d1c36f742341d"}>
                                BOLLYWOOD MOVIES
                            </button>


                            <button className='w-fit  p-2 px-4 bg-[#0B9607] text-[0.7rem] rounded-r-xl rounded-l-xl flex justify-center items-center gap-1' onClick={() => window.location.href = "https://offspringthisscarcely.com/f2hzqz837i?key=0c7d11d4e7eb7b38a83d1c36f742341d"}>
                                WEB SERIES
                            </button>

                        </div>

                        {/* second search bar */}



                        <form
                            onSubmit={e => {
                                e.preventDefault();
                                window.location.href = `https://allmovieshub.live/search?search=${searchQuery}&page=1`
                            }}
                            className='pt-4 w-full overflow-hidden bg-[#111111] pb-5'>
                            <input type="text"
                                placeholder='Search Movies or WEB-Series here....'
                                className='w-full mt-3 bg-[#111111] placeholder:text-gray-400
                             focus:placeholder:text-white text-[0.7rem] py-3 px-2 
                             border-gray-500 outline-none border'
                                onChange={e => setSearchQuery(e.target.value)}
                            />
                        </form>

                    </>
            }



        </header>


    )
}

export default Header