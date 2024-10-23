import React from 'react'
import useMobile from '@/hooks/useMobile'
import { TbRating18Plus } from "react-icons/tb";
import { FaTelegram } from "react-icons/fa";
import { ImEye } from "react-icons/im";

const Header = () => {
    const isMobile = useMobile();

    return (
        <header>
            {
                isMobile ?
                    <>
                        <div className='flex flex-wrap justify-evenly items-start p-2 gap-2 mb-2 mt-2'>
                            <div className='w-[45vw] overflow-hidden'>
                                <button className='w-[47vw] ml-[-4px] px-2 py-3 bg-[#43B51A] text-[0.8rem] rounded-r-full rounded-l-full ' >
                                    DUAL AUDIO CONTENT
                                </button>
                            </div>

                            <div className='w-[45vw] overflow-hidden'>
                                <button className='w-[47vw] ml-[-4px] px-2 py-3 bg-[#FF0000] text-[0.8rem] rounded-r-full rounded-l-full flex justify-center items-center gap-1' >
                                    <TbRating18Plus size={20} />
                                    DESI JUNCTION
                                </button>
                            </div>


                            <div className='w-[45vw] overflow-hidden'>
                                <button className='w-[47vw] ml-[-4px] px-2 py-3 bg-[#059ADD] text-[0.8rem] rounded-r-full rounded-l-full flex justify-center items-center gap-1' >
                                    <FaTelegram size={20} />
                                    JOIN TELEGRAM
                                </button>
                            </div>


                            <div className='w-[45vw] overflow-hidden'>
                                <button className='w-[47vw] ml-[-4px] px-2 py-3 bg-[#DF9A17] text-[0.8rem] rounded-r-full rounded-l-full flex justify-center items-center gap-1' >
                                    HOW TO DOWNLOAD
                                    <ImEye size={20} />
                                </button>
                            </div>

                        </div>

                        <div className='flex justify-evenly items-start gap-2 flex-wrap w-screen'>

                            <button className='w-fit  p-2 px-4 bg-[#0B9607] text-[0.8rem] rounded-r-xl rounded-l-xl flex justify-center items-center gap-1' >
                                480P
                            </button>

                            <button className='w-fit p-2 px-4 bg-[#0B9607] text-[0.8rem] rounded-r-xl rounded-l-xl flex justify-center items-center gap-1' >
                                720P
                            </button>


                            <button className='w-fit p-2 px-4 bg-[#0B9607] text-[0.8rem] rounded-r-xl rounded-l-xl flex justify-center items-center gap-1' >
                                1080P
                            </button>


                            <button className='w-fit  p-2 px-4 bg-[#0B9607] text-[0.8rem] rounded-r-xl rounded-l-xl flex justify-center items-center gap-1' >
                                2160P 4K
                            </button>


                            <button className='w-fit  p-2 px-4 bg-[#0B9607] text-[0.8rem] rounded-r-xl rounded-l-xl flex justify-center items-center gap-1' >
                                AMZN PRIME
                            </button>


                            <button className='w-fit  p-2 px-4 bg-[#0B9607] text-[0.8em] rounded-r-xl rounded-l-xl flex justify-center items-center gap-1' >
                                DISNEY + HOTSTAR
                            </button>


                            <button className='w-fit  p-2 px-4 bg-[#0B9607] text-[0.8rem] rounded-r-xl rounded-l-xl flex justify-center items-center gap-1' >
                                SONYLIV
                            </button>


                            <button className='w-fit  p-2 px-4 bg-[#0B9607] text-[0.8rem] rounded-r-xl rounded-l-xl flex justify-center items-center gap-1' >
                                ZEE5
                            </button>


                            <button className='w-fit  p-2 px-4 bg-[#0B9607] text-[0.8rem] rounded-r-xl rounded-l-xl flex justify-center items-center gap-1' >
                                JIOCINEMA
                            </button>

                            <button className='w-fit  p-2 px-4 bg-[#0B9607] text-[0.8rem] rounded-r-xl rounded-l-xl flex justify-center items-center gap-1' >
                                HOICHIO
                            </button>


                            <button className='w-fit  p-2 px-4 bg-[#0B9607] text-[0.8rem] rounded-r-xl rounded-l-xl flex justify-center items-center gap-1' >
                                ALTBALAJI
                            </button>


                            <button className='w-fit  p-2 px-4 bg-[#0B9607] text-[0.8rem] rounded-r-xl rounded-l-xl flex justify-center items-center gap-1' >
                                BENGALI
                            </button>


                            <button className='w-fit  p-2 px-4 bg-[#0B9607] text-[0.8rem] rounded-r-xl rounded-l-xl flex justify-center items-center gap-1' >
                                GUJARATI
                            </button>


                            <button className='w-fit  p-2 px-4 bg-[#0B9607] text-[0.8rem] rounded-r-xl rounded-l-xl flex justify-center items-center gap-1' >
                                PUNJABI MOVIES
                            </button>


                            <button className='w-fit  p-2 px-4 bg-[#0B9607] text-[0.8rem] rounded-r-xl rounded-l-xl flex justify-center items-center gap-1' >
                                MARATHI MOVIES
                            </button>


                            <button className='w-fit  p-2 px-4 bg-[#0B9607] text-[0.8rem] rounded-r-xl rounded-l-xl flex justify-center items-center gap-1' >
                                HINDI DUBBED MOVIES
                            </button>


                            <button className='w-fit  p-2 px-3 bg-[#0B9607] text-[0.8rem] rounded-r-xl rounded-l-xl flex justify-center items-center gap-1' >
                                HOLLYWOOD HINDI DUBBED
                            </button>

                            <button className='w-fit  p-2 px-3 bg-[#0B9607] text-[0.8rem] rounded-r-xl rounded-l-xl flex justify-center items-center gap-1' >
                                SOUTH HINDI DUBBED
                            </button>


                            <button className='w-fit  p-2 px-3 bg-[#0B9607] text-[0.8rem] rounded-r-xl rounded-l-xl flex justify-center items-center gap-1' >
                                BOLLYWOOD MOVIES
                            </button>


                            <button className='w-fit  p-2 px-4 bg-[#0B9607] text-[0.8rem] rounded-r-xl rounded-l-xl flex justify-center items-center gap-1' >
                                WEB SERIES
                            </button>

                        </div>

                        {/* second search bar */}

                        <div className='mb-2'>
                            <input type="text"
                                placeholder='Search Movies or WEB-Series here....'
                                className='w-screen mt-3 bg-[#111111] placeholder:text-gray-400
                                 focus:placeholder:text-white text-[0.8rem] py-3 px-2 
                                 border-gray-500 outline-none border-2'
                            />
                        </div>

                    </>
                    : null
            }

        </header>
    )
}

export default Header