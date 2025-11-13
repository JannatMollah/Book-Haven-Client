import React, { Suspense } from 'react';
import BookCard from './BookCard';

const Genres = ({ BooksData }) => {
    return (
        <div className='w-11/12 mx-auto bg-white rounded-2xl py-10'>
            <h2 className="text-4xl text-center font-bold mb-6">Top Generes</h2>
            <Suspense fallback={<span className="loading loading-spinner text-primary"></span>}>
                <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {BooksData.map((BookData) => (
                        <BookCard key={BookData.id} BookData={BookData} />
                    ))}
                </div>
            </Suspense>
        </div>
    );
};

export default Genres;