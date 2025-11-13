import React from 'react';
import { MdReviews } from "react-icons/md";
import NotFound from './NotFound';
import { Link, useLoaderData } from 'react-router';

const BookDetails = () => {
    const data = useLoaderData()
    const book = data.result



    return (
        <div className='bg-[#E9E9E9] py-6 sm:py-8 lg:py-10 px-4 sm:px-8 lg:px-17'>
            <h2 className='text-3xl font-bold text-center mb-8'>Book Details</h2>
            <div className='flex gap-5 bg-white py-5 px-5 rounded-xl'>
                <img src={book.coverImage} className='rounded-xl' />
                <div>
                    <div>
                        <h3 className='text-2xl font-semibold'>Book Title: {book.title}</h3>
                        <p className='text-xl text-gray-700'>Author: {book.author}</p>
                        <p>Rating: {book.rating}</p>
                        <p>Summary: {book.summary}</p>
                        <p>User Email: {book.userEmail}</p>
                    </div>
                    <div>
                        <button className='btn my-3 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold px-10 py-2 rounded-lg mr-2'>Read Now</button>
                        <Link
                            to={`/`}
                            className="btn my-3 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold px-10 py-2 rounded-lg mr-2"
                        >
                            Update Details
                        </Link>
                        <Link
                            to={`/`}
                            className="btn my-3 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold px-10 py-2 rounded-lg"
                        >
                            Delete Book
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;