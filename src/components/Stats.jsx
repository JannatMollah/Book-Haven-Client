import React from 'react';

const Stats = () => {
    return (
        <div className='flex flex-col w-11/12 mx-auto rounded-xl items-center bg-linear-to-br from-[#632EE3] to-[#9F62F2] py-8 sm:py-12 lg:py-15 px-4 sm:px-8 lg:px-25 text-white'>
            <h2 className='text-2xl sm:text-3xl lg:text-5xl font-bold text-center'>Trusted by Millions of Reader</h2>
            <div className='flex gap-3 lg:gap-8 pt-6 sm:pt-8 lg:pt-10'>
                <div>
                    <p className='text-lg sm:text-xl'>Total Reader</p>
                    <div className='flex gap-3 sm:gap-4 py-2 sm:py-3'>
                        <p className='text-3xl sm:text-4xl lg:text-5xl font-extrabold'>29.6M</p>
                    </div>
                </div>
                <div>
                    <p className='text-lg sm:text-xl'>Total Reviews</p>
                    <div className='flex gap-3 sm:gap-4 py-2 sm:py-3'>
                        <p className='text-3xl sm:text-4xl lg:text-5xl font-extrabold'>906K</p>
                    </div>
                </div>
                <div>
                    <p className='text-lg sm:text-xl'>Total Books</p>
                    <div className='flex gap-3 sm:gap-4 py-2 sm:py-3'>
                        <p className='text-3xl sm:text-4xl lg:text-5xl font-extrabold'>132+</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;