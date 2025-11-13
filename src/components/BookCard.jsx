import React from 'react';
import { Link } from 'react-router';
import { FaStar } from "react-icons/fa";

const BookCard = ({ BookData }) => {
    const { id, coverImage, author, title, genre, rating } = BookData || {};

    return (
        <Link to={`/books/${id}`}>
            <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden">
                <div className="relative">
                    <img
                        src={coverImage}
                        alt={title}
                        className="w-full h-96 object-cover"
                    />
                </div>
                <div className="flex flex-col items-center">
                    <h2 className="font-semibold text-lg">{title}</h2>
                    <p className="font-semibold text-sm">{author}</p>
                    <p className="text-gray-500 text-sm">{genre}</p>
                    <div className="flex items-center gap-1 text-yellow-500 text-sm">
                        <FaStar className="text-yellow-500" />
                        <span className="text-gray-700">{rating}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default BookCard;