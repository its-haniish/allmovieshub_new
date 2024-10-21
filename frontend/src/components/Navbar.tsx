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
        visible: { y: 0, opacity: 1 },   // Slides down to 20px from the top
    };

    if (isMobile) {
        return (
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
                        className='w-screen flex bg-black mt-2'
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
        )
    }
    return (
        <img src='/horizontal_logo.jpg'></img>
    )
}

export default Navbar