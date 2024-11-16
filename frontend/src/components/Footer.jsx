import React, { useState, useEffect } from 'react';
import useMobile from '../hooks/useMobile';

export default function Footer() {
   const isMobile = useMobile();
   const [showButton, setShowButton] = useState(false);

   // Handle scroll event to show/hide the button
   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY > 300) {
            setShowButton(true);
         } else {
            setShowButton(false);
         }
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   // Scroll to top function
   const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
   };

   return (
      <>
         {
            isMobile ? (
               <div className='mt-4'>
                  <div className='p-2 gap-2 mb-2 mt-2'>
                     <p className='text-center text-gray-400 text-xs'>Copyright © 2024. Created by ❤️ AllMovieshub Team ❤️</p>
                  </div>
                  <hr />
                  <div className='flex flex-row justify-center text-xs underline w-100 p-2 gap-1 pb-4 bg-[#111111]'>
                     <a href='/'>Request Movie</a> |
                     <a href='/'>DMCA</a> |
                     <a href='/'>Sitemap</a>
                  </div>
               </div>
            ) : (
               <div>
                  <div className='text-center pt-4 p-2 gap-1 pb-4 bg-[#010101]'>
                     <p className='text-gray-400 text-sm'>Copyright © 2024. Created by ❤️ AllMovieshub Team ❤️</p>
                  </div>
                  <hr className='w-[90%] mx-auto' />
                  <div className='flex flex-row justify-center text-xs underline w-100 p-2 gap-1 pb-4 bg-[#111111]'>
                     <a href='/'>Request Movie</a> |
                     <a href='/'>DMCA</a> |
                     <a href='/'>Sitemap</a>
                  </div>
               </div>
            )
         }
         {/* Back to Top Button */}
         {showButton && (
            <button
               onClick={scrollToTop}
               className="flex gap-x-2 fixed bottom-5 right-5 bg-green-500 text-white font-semibold p-2 shadow-lg hover:bg-green-600 transition duration-300"
               title="Back to Top"
            >
               Top
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-black"
                  viewBox="0 0 20 20"
                  fill="currentColor"
               >
                  <path
                     fillRule="evenodd"
                     d="M10 3a1 1 0 01.707.293l7 7a1 1 0 01-1.414 1.414L11 6.414V17a1 1 0 11-2 0V6.414L3.707 11.707a1 1 0 01-1.414-1.414l7-7A1 1 0 0110 3z"
                     clipRule="evenodd"
                  />
               </svg>
            </button>
         )}
      </>
   );
}
