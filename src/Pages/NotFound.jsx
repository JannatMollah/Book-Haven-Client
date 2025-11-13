import React from 'react';
import NotFoundImage from '../assets/App-Error.png'
import Navber from '../components/Navber';
import Footer from '../components/Footer';
import { Link } from 'react-router';

const NotFound = () => {
    return (
        <div>
            <div className='flex flex-col items-center bg-[#E9E9E9] h-screen'>
                <img src={NotFoundImage} className='py-10' />
                <h2 className='text-5xl font-semibold'>Oops, Game not found!</h2>
                <p className='text-gray-500 py-5'>The Game you are looking for is not available.</p>
                <Link
                    to="/"
                    className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg hover:opacity-90 transition-all duration-300">
                    Go Back Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;