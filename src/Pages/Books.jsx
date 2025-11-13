import React from 'react';
import { useLoaderData } from 'react-router';

const Books = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            <h2>All Book</h2>
        </div>
    );
};

export default Books;