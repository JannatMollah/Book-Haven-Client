import React from 'react';
import Banner from '../components/Banner';
import SwiperBanner from '../components/SwiperBanner';
import { useLoaderData } from 'react-router';
import FeaturedBook from '../components/FeaturedBook';
import About from '../components/About';
import Newsletter from '../components/Newsletter';

const Home = () => {
    const BooksData = useLoaderData();
    return (
        <div>
            <Banner/>
            <SwiperBanner BooksData={BooksData}/>
            <FeaturedBook BooksData={BooksData}/>
            <About/>
            <Newsletter/>
        </div>
    );
};

export default Home;