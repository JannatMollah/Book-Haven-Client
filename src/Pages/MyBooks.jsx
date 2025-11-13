import axios from 'axios';
import React from 'react';
import { useLoaderData, Link } from 'react-router';
import { toast } from 'react-toastify';

const MyBooks = () => {
    const myBooks = useLoaderData();

    const handleRemoveFromCollection = async (bookId) => {
        if (!window.confirm('Are you sure you want to remove this book from your collection?')) {
            return;
        }

        try {
            await axios.delete(`https://book-haven-server-omega.alpha.app/my-books/${bookId}`);
            toast.success('Book removed from your collection');
            window.location.reload();
        } catch (error) {
            console.error('Error removing book:', error);
            toast.error('Failed to remove book');
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto px-4">
                <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                    <h1 className="text-3xl font-bold text-center mb-8">My Book Collection</h1>
                    
                    {myBooks.length === 0 ? (
                        <div className="text-center py-12">
                            <i className="fa-solid fa-book-open text-6xl text-gray-300 mb-4"></i>
                            <h3 className="text-xl font-semibold text-gray-600 mb-4">
                                Your collection is empty
                            </h3>
                            <p className="text-gray-500 mb-6">
                                Start building your personal library by adding books you love
                            </p>
                            <Link to="/all-books" className="btn btn-primary text-white">
                                <i className="fa-solid fa-plus mr-2"></i>
                                Explore Books
                            </Link>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {myBooks.map((book) => (
                                <div key={book._id} className="card bg-base-100 shadow-xl">
                                    <figure className="px-4 pt-4">
                                        <img 
                                            src={book.coverImage} 
                                            alt={book.title}
                                            className="rounded-xl h-48 w-full object-cover"
                                        />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title text-lg">{book.title}</h2>
                                        <p className="text-gray-600">by {book.author}</p>
                                        <div className="flex justify-between items-center">
                                            <span className="badge badge-outline">{book.genre}</span>
                                            <div className="flex items-center gap-1">
                                                <i className="fa-solid fa-star text-yellow-500"></i>
                                                <span>{book.rating}</span>
                                            </div>
                                        </div>
                                        <div className="card-actions justify-between mt-4">
                                            <Link 
                                                to={`/book-details/${book.bookId || book._id}`}
                                                className="btn btn-primary btn-sm text-white"
                                            >
                                                View Details
                                            </Link>
                                            <button 
                                                onClick={() => handleRemoveFromCollection(book._id)}
                                                className="btn btn-outline btn-error btn-sm"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MyBooks;