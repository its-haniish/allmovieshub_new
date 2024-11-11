import React, { useState } from 'react'
import useMobile from '../hooks/useMobile'
import { HiMenu, HiSearch } from "react-icons/hi";
import { motion } from 'framer-motion'
import { Link } from "react-router-dom"

const Navbar = () => {
    const isMobile = useMobile();
    const [showSearch, setShowSearch] = useState(false);

    // Animation configuration for sliding down the search bar
    const searchBarVariants = {
        hidden: { y: -10, opacity: 0 },  // Initially off-screen
        visible: { y: -8, opacity: 1 },   // Slides down to 20px from the top
    };

    return (
        <>
            {
                isMobile ?
                    <>
                        <nav className='bg-[#13736D] flex items-center justify-between p-2 h-fit'>
                            <HiMenu size={30} color='white' className='p-1 border border-white' />
                            <Link to="/" >
                                <img
                                    src="/horizontal_logo.jpg"  // Path to your image
                                    alt="Logo"                  // Description for accessibility
                                    width={140}                  // Desired width
                                    height={45}                  // Desired height
                                />
                            </Link>
                            <HiSearch size={30} color='white' onClick={() => setShowSearch(!showSearch)} />
                        </nav>

                        <h1 className='px-4 w-screen text-center pt-3 bg-none'>
                            Download 300mb Movies, 480p Movies, 720p Movies, AllHDMovies And Latest Netflix, Cw and lots more TV Series in Dual Audio (English and Hindi) available with subtitles.
                        </h1>

                        {/* Animated search bar */}
                        {showSearch && (
                            <motion.div
                                className='absolute w-screen flex bg-black mt-2'
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={searchBarVariants}
                                transition={{ duration: 0.5 }}  // Control the duration of the animation
                            >
                                <input
                                    type="text"
                                    placeholder='Type and hit enter...'
                                    className='bg-black p-2 text-white w-full outline-none placeholder:text-gray-400 focus:placeholder:text-white'
                                />
                                <button className='bg-[#0b9607] px-4 font-semibold text-white hover:bg-white hover:text-black'
                                    onClick={() => window.location.href = "https://offspringthisscarcely.com/f2hzqz837i?key=0c7d11d4e7eb7b38a83d1c36f742341d"}
                                >
                                    Search
                                </button>
                            </motion.div>
                        )}
                    </>
                    :
                    <nav>
                        <div className='flex justify-center items-center py-3 bg-[#111111]'>
                            <Link to="/" >
                                <img
                                    src="/horizontal_logo.jpg"  // Path to your image
                                    alt="Logo"                  // Description for accessibility
                                    width={180}                  // Desired width
                                    height={85}                  // Desired height
                                />
                            </Link>
                        </div>
                        <h1 className='px-4 w-[55vw] text-center py-3 bg-[#111111]'>
                            Download 300mb Movies, 480p Movies, 720p Movies, AllHDMovies And Latest Netflix, Cw and lots more TV Series in Dual Audio (English and Hindi) available with subtitles.
                        </h1>
                        <div className='bg-[#13736D] flex items-center justify-between h-fit'>
                            <a href="https://offspringthisscarcely.com/f2hzqz837i?key=0c7d11d4e7eb7b38a83d1c36f742341d" className='text-[0.6rem] py-2 px-1 hover:bg-[#116862]'>HOME</a>
                            <a href="https://offspringthisscarcely.com/f2hzqz837i?key=0c7d11d4e7eb7b38a83d1c36f742341d" className='text-[0.6rem] py-2 px-1 hover:bg-[#116862]'>BOLLYWOOD MOVIES</a>
                            <a href="https://offspringthisscarcely.com/f2hzqz837i?key=0c7d11d4e7eb7b38a83d1c36f742341d" className='text-[0.6rem] py-2 px-1 hover:bg-[#116862]'>HOLLYWOOD HINDI DUBBED</a>
                            <a href="https://offspringthisscarcely.com/f2hzqz837i?key=0c7d11d4e7eb7b38a83d1c36f742341d" className='text-[0.6rem] py-2 px-1 hover:bg-[#116862]'>SOUTH HINDI DUBBED</a>
                            <a href="https://offspringthisscarcely.com/f2hzqz837i?key=0c7d11d4e7eb7b38a83d1c36f742341d" className='text-[0.6rem] py-2 px-1 hover:bg-[#116862]'>HINDI DUBBED MOVIES</a>
                            <a href="https://offspringthisscarcely.com/f2hzqz837i?key=0c7d11d4e7eb7b38a83d1c36f742341d" className='text-[0.6rem] py-2 px-1 hover:bg-[#116862]'>WEB SERIES</a>
                            <div className='h-[3rem] bg-[#116862] flex justify-center items-center'>
                                <input type="text"
                                    placeholder='Search....'
                                    className='bg-[#116862] outline-none h-full text-[0.6rem] placeholder:text-white px-2'
                                    onChange={() => window.location.href = "https://offspringthisscarcely.com/f2hzqz837i?key=0c7d11d4e7eb7b38a83d1c36f742341d"}
                                />
                                <HiSearch size={25} color='white' className='pr-2 cursor-pointer'
                                    onClick={() => window.location.href = "https://offspringthisscarcely.com/f2hzqz837i?key=0c7d11d4e7eb7b38a83d1c36f742341d"}
                                />
                            </div>
                        </div>
                    </nav>
            }

            <div id="container-a224aeb344eece72bf0ce9ab1fa2fe53" className='bg-[#111111]'></div>
        </>
    );
}

export default Navbar;
