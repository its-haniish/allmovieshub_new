import React, { useState, useRef } from 'react'
import useMobile from '@/hooks/useMobile'
import { HiMenu, HiSearch } from "react-icons/hi";
import Image from 'next/image';
import { motion } from 'framer-motion'
import Link from 'next/link';


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

                            <Link href="/" passHref>
                                <Image
                                    src="/horizontal_logo.jpg"  // Path to your image
                                    alt="Logo"                  // Description for accessibility
                                    width={140}                  // Desired width
                                    height={45}                  // Desired height
                                />
                            </Link>

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
                            <Link href="/" passHref>
                                <Image
                                    src="/horizontal_logo.jpg"  // Path to your image
                                    alt="Logo"                  // Description for accessibility
                                    width={180}                  // Desired width
                                    height={85}                  // Desired height
                                />
                            </Link>
                        </div>
                        <div className='bg-[#13736D] flex items-center justify-between h-fit'>
                            <a href="https://offspringthisscarcely.com/f2hzqz837i?key=0c7d11d4e7eb7b38a83d1c36f742341d" className='text-[0.8rem] py-2 px-1 hover:bg-[#116862]' >HOME</a>
                            <a href="https://offspringthisscarcely.com/f2hzqz837i?key=0c7d11d4e7eb7b38a83d1c36f742341d" className='text-[0.8rem] py-2 px-1 hover:bg-[#116862] ' >BOLLYWOOD MOVIES</a>
                            <a href="https://offspringthisscarcely.com/f2hzqz837i?key=0c7d11d4e7eb7b38a83d1c36f742341d" className='text-[0.8rem] py-2 px-1 hover:bg-[#116862] ' >HOLLYWOOD HINDI DUBBED</a>
                            <a href="https://offspringthisscarcely.com/f2hzqz837i?key=0c7d11d4e7eb7b38a83d1c36f742341d" className='text-[0.8rem] py-2 px-1 hover:bg-[#116862] ' >SOUTH HINDI DUBBED</a>
                            <a href="https://offspringthisscarcely.com/f2hzqz837i?key=0c7d11d4e7eb7b38a83d1c36f742341d" className='text-[0.8rem] py-2 px-1 hover:bg-[#116862] ' >HINDI DUBBED MOVIES</a>
                            <a href="https://offspringthisscarcely.com/f2hzqz837i?key=0c7d11d4e7eb7b38a83d1c36f742341d" className='text-[0.8rem] py-2 px-1 hover:bg-[#116862] ' >WEB SERIES</a>
                            <div className='h-[3rem] bg-[#116862] flex justify-center items-center'>
                                <input type="text"
                                    placeholder='Search....'
                                    className='bg-[#116862] outline-none h-full text-[0.8rem] placeholder:text-white px-2'
                                    onChange={() => window.location.href = "https://offspringthisscarcely.com/f2hzqz837i?key=0c7d11d4e7eb7b38a83d1c36f742341d"}
                                />
                                <HiSearch size={25} color='white' className='pr-2 cursor-pointer    '
                                    onClick={() => window.location.href = "https://offspringthisscarcely.com/f2hzqz837i?key=0c7d11d4e7eb7b38a83d1c36f742341d"}
                                />
                            </div>
                        </div>


                    </nav>

            }
            <script
                type="text/javascript"
                src="//offspringthisscarcely.com/05537bc5ba249a7bfd59bb5e25296173/invoke.js"
            ></script>

            <script
                type="text/javascript"
                src="//offspringthisscarcely.com/bd/4f/c1/bd4fc1b8981c9f6e7fa2f6d458b9bf0a.js"
            ></script>

            <script
                type="text/javascript"
                src="//offspringthisscarcely.com/19/b0/eb/19b0eb287cd4c645ded27638be1d8137.js"
            ></script>

            <script
                type="text/javascript"
                dangerouslySetInnerHTML={{
                    __html: `
              var atOptions = {
                'key' : '9d12847802f72d01b0cfbdee18685fa3',
                'format' : 'iframe',
                'height' : 50,
                'width' : 320,
                'params' : {}
              };
            `,
                }}
            ></script>
            <script
                type="text/javascript"
                src="//offspringthisscarcely.com/9d12847802f72d01b0cfbdee18685fa3/invoke.js"
            ></script>

            <script
                data-cfasync="false"
                src="//offspringthisscarcely.com/a224aeb344eece72bf0ce9ab1fa2fe53/invoke.js"
            ></script>

            <script
                type="text/javascript"
                dangerouslySetInnerHTML={{
                    __html: `
              var atOptions = {
                key: '873d7f0d704aa05bcb1af655be9300da',
                format: 'iframe',
                height: 250,
                width: 300,
                params: {}
              };
            `,
                }}
            ></script>
            <script
                type="text/javascript"
                dangerouslySetInnerHTML={{
                    __html: `var script = document.createElement('script');
                     script.src = '//offspringthisscarcely.com/873d7f0d704aa05bcb1af655be9300da/invoke.js';
                     document.body.appendChild(script);`,
                }}
            ></script>
            <script
                type="text/javascript"
                src="//offspringthisscarcely.com/266d5c6f74c869bcc68cc573f407c266/invoke.js"
            ></script>


            <script
                type="text/javascript"
                dangerouslySetInnerHTML={{
                    __html: `
              var atOptions = {
                'key' : '05537bc5ba249a7bfd59bb5e25296173',
                'format' : 'iframe',
                'height' : 60,
                'width' : 468,
                'params' : {}
              };
            `,
                }}
            ></script>
            <script
                type="text/javascript"
                src="//offspringthisscarcely.com/5f799423a6858bfda5191a87a6242c19/invoke.js"
            ></script>

            <script
                type="text/javascript"
                src="//offspringthisscarcely.com/f4c245f8cf98fae0a3d1cdeb6e640c18/invoke.js"
            ></script>
        </>
    )
}

export default Navbar