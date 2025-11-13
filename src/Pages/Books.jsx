import React, { Suspense, useState, useEffect } from 'react';
import { useLoaderData } from 'react-router';
import BookCard from '../components/BookCard';

const Books = () => {
    const BooksData = useLoaderData();
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredBooks, setFilteredBooks] = useState(BooksData);
    const [isSearching, setIsSearching] = useState(false);

    useEffect(() => {
        setIsSearching(true);
        const timeout = setTimeout(() => {
            const term = searchTerm.toLowerCase();
            const matched = BooksData.filter(book =>
                book.title.toLowerCase().includes(term)
            );
            setFilteredBooks(matched);
            setIsSearching(false);
        }, 500);

        return () => clearTimeout(timeout);
    }, [searchTerm, BooksData]);

    return (
        <div className="bg-[#E9E9E9] min-h-screen">
            <div className="flex flex-col items-center text-center py-10 px-4">
                <div className="flex  sm:flex-row gap-3 items-center">
                    <h2 className="text-3xl sm:text-4xl font-bold">All Books</h2>
                    <i className="fa-solid fa-layer-group text-3xl sm:text-4xl text-[#743DE7]"></i>
                </div>
                <p className="text-gray-500 pt-2 text-sm sm:text-base max-w-xl">
                    Explore all books — built for millions of Reader worldwide.
                </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 sm:px-12 lg:px-20">
                <p className="text-lg sm:text-xl font-semibold text-[#743DE7]">
                    <span>{filteredBooks.length}</span> Apps Found
                </p>

                <label className="flex items-center gap-2 bg-white border border-gray-300 px-3 py-2 rounded-md w-full sm:w-72 md:w-96">
                    <i className="fa-solid fa-magnifying-glass text-gray-500"></i>
                    <input
                        type="search"
                        placeholder="Search by name..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="outline-none w-full text-gray-700"
                    />
                </label>
            </div>

            <div className="border-t border-gray-300 mt-6 mx-6 sm:mx-12 lg:mx-20"></div>

            <Suspense>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 sm:px-12 lg:px-20 py-10">
                    {isSearching ? (
                        <div className="text-center py-10 col-span-full">
                            <span className="loading loading-dots text-primary"></span>
                            <p className="text-gray-500 mt-2">Searching apps...</p>
                        </div>
                    ) : filteredBooks.length === 0 ? (
                        <p className="text-center text-gray-500 text-lg sm:text-xl col-span-full">
                            No apps match your search.
                        </p>
                    ) : (
                        filteredBooks.map((BookData) => (
                            <BookCard key={BookData.id} BookData={BookData}/>
                        ))
                    )}
                </div>
            </Suspense>
        </div>
    );
};

export default Books;