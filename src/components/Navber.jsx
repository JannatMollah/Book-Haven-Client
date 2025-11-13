import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import LogoImage from '../assets/logo.png'
import { AuthContext } from '../Provider/AuthProvider';


const Navber = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error));
    };
    const links = <>
        <li>
            <NavLink to="/" className="text-base lg:text-xl text-gray-500 font-semibold">
                <i className="fa-regular fa-house"></i> Home
            </NavLink>
        </li>
        <li>
            <NavLink to="/all-books" className="text-base lg:text-xl text-gray-500 font-semibold">
                <i className="fa-brands fa-app-store"></i> All Books
            </NavLink>
        </li>
        {user?.email ? (<>
            <li>
                <NavLink to="/my-books" className="text-base lg:text-xl text-gray-500 font-semibold">
                    <i className="fa-regular fa-user"></i> My Books
                </NavLink>
            </li>
            <li>
                <NavLink to="/add-book" className="text-base lg:text-xl text-gray-500 font-semibold">
                    <i className="fa-regular fa-pen-to-square"></i> Add Book
                </NavLink>
            </li>
        </>) : (<></>)}
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm px-4 sm:px-8 lg:px-17 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link className="flex items-center cursor-pointer text-lg lg:text-xl">
                    <img className='w-10 h-10 lg:w-12 lg:h-12' src={LogoImage} />
                    <span className='font-bold bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Book Haven</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                {user ? (
                    <div className="flex items-center gap-3">
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img 
                                        src={user.photoURL || "https://i.ibb.co.com/4RgYZ1Q/default-avatar.png"} 
                                        alt={user.displayName || "User"} 
                                    />
                                </div>
                            </div>
                            <ul tabIndex={0} className="mt-3 z-50 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <li className="p-2 border-b">
                                    <span className="text-sm font-semibold">{user.displayName || 'User'}</span>
                                    <span className="text-xs text-gray-500">{user.email}</span>
                                </li>
                                <li>
                                    <button onClick={handleLogOut} className="text-red-600">
                                        <i className="fa-solid fa-right-from-bracket"></i> Logout
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                ) : (
                    <div className="flex gap-2">
                        <Link to="/login" className="btn btn-outline btn-sm">
                            Sign In
                        </Link>
                        <Link to="/register" className="btn btn-primary btn-sm text-white">
                            Sign Up
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navber;