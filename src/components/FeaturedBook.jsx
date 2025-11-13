import React, { Suspense } from 'react';
import { Link } from 'react-router';
import BookCard from './BookCard';

const FeaturedBook = ({ BooksData }) => {

    return (
        <div className="text-center bg-[#E9E9E9] py-10">
            <div className="flex flex-col items-center text-center mb-6">
                <div className="flex gap-3 items-center">
                    <h2 className="text-4xl font-bold">Popular Books</h2>
                    <i className="fa-solid fa-arrow-trend-up text-4xl text-[#743DE7]"></i>
                </div>
                <p className="text-gray-500 text-sm lg:text-lg pt-2">Explore All popular Books on the Market</p>
            </div>

            <Suspense fallback={<span className="loading loading-spinner text-primary"></span>}>
                <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {BooksData.map((BookData) => (
                        <BookCard key={BookData.id} BookData={BookData}/>
                    ))}
                </div>
            </Suspense>

            <Link
                to="/all-books"
                className="btn mt-10 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold px-10 py-2 rounded-lg"
            >
                Show All Books
            </Link>
        </div>
    );
};

export default FeaturedBook;