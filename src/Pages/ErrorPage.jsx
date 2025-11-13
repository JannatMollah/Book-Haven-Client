import React from 'react';
import ErrorImage from '../assets/error-404.png';
import Navber from '../components/Navber';
import Footer from '../components/Footer';
import { Link, NavLink } from 'react-router';

const ErrorPage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-[#E9E9E9]">
            <div className="flex flex-col grow items-center justify-center text-center px-4 py-10">
                <img
                    src={ErrorImage}
                    alt="404 Error"
                    className="w-64 sm:w-80 md:w-[400px] lg:w-[480px] mb-8 object-contain"
                />

                <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-gray-800">
                    Oops, page not found!
                </h2>

                <p className="text-gray-500 text-sm sm:text-base md:text-lg py-5 max-w-md">
                    The page you are looking for is not available.
                </p>

                <Link
                    to="/"
                    className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg hover:opacity-90 transition-all duration-300">
                    Go Back Home
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;