import React from 'react';
import Link from 'next/link';

interface Props {
    page: number;
}

const PaginationBar: React.FC<Props> = ({ page }) => {
    return (
        <div className='flex justify-center items-center gap-3'>
            {/* Previous button */}
            {
                page > 1 &&
                <Link href={`/movies?page=${page - 1}`}>
                    &#11164; Previous
                </Link>
            }

            {/* Page number links */}
            <div className='flex justify-center items-center gap-3'>
                {page > 3 && (
                    <>
                        <Link href={`/movies?page=${page - 3}`}>
                            {page - 3}
                        </Link>
                        <Link href={`/movies?page=${page - 2}`}>
                            {page - 2}
                        </Link>
                        <Link href={`/movies?page=${page - 1}`}>
                            {page - 1}
                        </Link>
                    </>
                )}

                <p className='text-green-600 font-bold'>{page}</p>

                <Link href={`/movies?page=${page + 1}`}>
                    {page + 1}
                </Link>
                <Link href={`/movies?page=${page + 2}`}>
                    {page + 2}
                </Link>
                <Link href={`/movies?page=${page + 3}`}>
                    {page + 3}
                </Link>
            </div>

            {/* Next button */}
            <Link href={`/movies?page=${page + 1}`}>
                Next &#11166;
            </Link>
        </div>
    );
};

export default PaginationBar;
