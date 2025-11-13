import React from 'react';
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div className='flex flex-col w-11/12 mx-auto bg-[#E9E9E9]'>
            <div className='flex flex-col items-center py-10'>
                <div className='space-y-5 text-center'>
                    <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold'>
                        <span className='text-[#632ee3]'>Book Haven</span> - A <span className='text-[#392f5a]'>Digital Library</span>
                    </h1>
                    <p className='italic max-w-10/12 mx-auto text-base sm:text-lg md:text-xl pb-5'>
                        Explore our extensive digital library. Discover and support talented authors. Connect with stories and writers alike
                    </p>
                </div>

                <Link to="/books" className='btn btn-lg bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white hover:bg-gray-200 sm:btn-sm md:btn-md xl:btn-xl rounded-xl'>
                    Start Reading
                </Link>
            </div>
        </div>
    );
};

export default Banner;