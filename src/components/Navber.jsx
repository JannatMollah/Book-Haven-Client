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
                {user?.email ? (
                    <>
                        <button onClick={handleLogOut} className="btn btn-sm bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white">Logout</button>
                        <div className="avatar">
                            <div className="ring-primary ring-offset-base-100 w-14 rounded-full ring-2 ring-offset-2">
                                <img src={user.photoURL || "https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"} />
                            </div>
                        </div>

                    </>
                ) : (
                    <>
                        <Link to="/login" className="btn btn-sm lg:btn-md bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white">Sign In</Link>
                        <Link to="/register" className="btn btn-sm lg:btn-md bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white">Sign Up</Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navber;