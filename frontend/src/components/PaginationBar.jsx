import React from 'react';
import { Link } from 'react-router-dom';
import useMobile from '../hooks/useMobile';
const PaginationBar = ({ page }) => {
    const isMobile = useMobile();
    return (
        <>
            {/* Pagination bar */}

            {/* Mobile view */}

            {isMobile ? (

                <section className='w-[55vw] gap-3 bg-[#111111] pt-6 h-fit p-3 pb-6 flex justify-center items-center'>
                    <div className='flex justify-center items-center gap-1'>
                        {/* Previous button */}
                        <Link to={`/movies?page=${page - 1}`} className='flex justify-center items-center flex-nowrap w-[22vw]' >
                            {"\u2190"} Previous
                        </Link>

                        {/* Page number links */}
                        <div className='flex justify-center items-center gap-3'>
                            {page > 3 && (
                                <>
                                    <Link to={`/movies?page=${page - 3}`}>
                                        {page - 3}
                                    </Link>
                                    <Link to={`/movies?page=${page - 2}`}>
                                        {page - 2}
                                    </Link>
                                    <Link to={`/movies?page=${page - 1}`}>
                                        {page - 1}
                                    </Link>
                                </>
                            )}

                            <p className='text-green-600 font-bold'>{page}</p>

                            <Link to={`/movies?page=${page + 1}`}>
                                {page + 1}
                            </Link>
                            <Link to={`/movies?page=${page + 2}`}>
                                {page + 2}
                            </Link>
                            <Link to={`/movies?page=${page + 3}`}>
                                {page + 3}
                            </Link>
                        </div>

                        <Link to={`/movies?page=${page + 1}`} className='flex justify-center items-center flex-nowrap w-[15vw]'>
                            Next {"\u27F6"}
                        </Link>
                    </div>
                </section>
            ) : (


                <section className='w-[55vw] gap-3 bg-[#111111] pt-6 h-fit p-3 pb-6 flex justify-center items-center'>
                    <div className='flex justify-center items-center gap-1'>
                        {/* Previous button */}
                        <Link to={`/movies?page=${page - 1}`} >
                            {"\u2190"} Previous
                        </Link>

                        {/* Page number links */}
                        <div className='flex justify-center items-center gap-3'>
                            {page > 3 && (
                                <>
                                    <Link to={`/movies?page=${page - 3}`}>
                                        {page - 3}
                                    </Link>
                                    <Link to={`/movies?page=${page - 2}`}>
                                        {page - 2}
                                    </Link>
                                    <Link to={`/movies?page=${page - 1}`}>
                                        {page - 1}
                                    </Link>
                                </>
                            )}

                            <p className='text-green-600 font-bold'>{page}</p>

                            <Link to={`/movies?page=${page + 1}`}>
                                {page + 1}
                            </Link>
                            <Link to={`/movies?page=${page + 2}`}>
                                {page + 2}
                            </Link>
                            <Link to={`/movies?page=${page + 3}`}>
                                {page + 3}
                            </Link>
                        </div>

                        <Link to={`/movies?page=${page + 1}`} >
                            Next {"\u27F6"}
                        </Link>
                    </div>
                </section>
            )}

        </>
    );
};

export default PaginationBar;
