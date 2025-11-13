import React from 'react';
import Navber from '../components/Navber';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className='bg-[#E9E9E9]'>
            <Navber/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;