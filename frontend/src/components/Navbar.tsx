import React, { useState, useRef } from 'react'
import useMobile from '@/hooks/useMobile'
import { HiMenu, HiSearch } from "react-icons/hi";
import Image from 'next/image';
import { motion } from 'framer-motion'


const Navbar: React.FC = () => {
    const isMobile = useMobile();
    const [search, setSearch] = useState('')
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

                            <Image
                                src="/horizontal_logo.jpg" // Path to your image
                                alt="Logo"             // Description for accessibility
                                width={140}             // Desired size with correct aspect ratio
                                height={45}             // Desired size with correct aspect ratio
                            />

                            <HiSearch size={30} color='white' onClick={() => setShowSearch(!showSearch)} />

                        </nav>

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
                                <button className='bg-[#0b9607] px-4 font-semibold text-white hover:bg-white hover:text-black'>
                                    Search
                                </button>
                            </motion.div>
                        )}

                    </>
                    :

                    <nav>
                        <div className='flex justify-center items-center py-3 bg-[#111111]'>
                            <Image
                                src="/horizontal_logo.jpg" // Path to your image
                                alt="Logo"             // Description for accessibility
                                width={180}             // Desired size with correct aspect ratio
                                height={85}             // Desired size with correct aspect ratio
                            />
                        </div>
                        <div className='bg-[#13736D] flex items-center justify-between h-fit'>
                            <a href="#" className='text-[0.8rem] py-2 px-1 hover:bg-[#116862]' >HOME</a>
                            <a href="#" className='text-[0.8rem] py-2 px-1 hover:bg-[#116862] ' >BOLLYWOOD MOVIES</a>
                            <a href="#" className='text-[0.8rem] py-2 px-1 hover:bg-[#116862] ' >HOLLYWOOD HINDI DUBBED</a>
                            <a href="#" className='text-[0.8rem] py-2 px-1 hover:bg-[#116862] ' >SOUTH HINDI DUBBED</a>
                            <a href="#" className='text-[0.8rem] py-2 px-1 hover:bg-[#116862] ' >HINDI DUBBED MOVIES</a>
                            <a href="#" className='text-[0.8rem] py-2 px-1 hover:bg-[#116862] ' >WEB SERIES</a>
                            <div className='h-[3rem] bg-[#116862] flex justify-center items-center'>
                                <input type="text"
                                    placeholder='Search....'
                                    className='bg-[#116862] outline-none h-full text-[0.8rem] placeholder:text-white px-2'
                                />
                                <HiSearch size={25} color='white' className='pr-2 cursor-pointer    ' />
                            </div>
                        </div>
                    </nav>

            }
        </>
    )
}

export default Navbar