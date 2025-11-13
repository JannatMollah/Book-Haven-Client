import React, { use, useEffect, useState } from 'react';
import { MdReviews } from "react-icons/md";
import NotFound from './NotFound';
import { Link, useLoaderData, useNavigate, useParams } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';

const BookDetails = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [book, setBook] = useState({})
    const [loading, setLoading] = useState(true)
    const {user} = use(AuthContext)

    useEffect(() => {
        fetch(`http://localhost:3000/books/${id}`,{
          headers: {
            authorization: `Bearer ${user.accessToken}`
          }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setBook(data.result)
            setLoading(false)
        })
    },[])


    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:3000/books/${book._id}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json"
                    },
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    navigate('/all-books')

                    Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
                })
                .catch(err => {
                    console.log(err);
                }) 
            }
        });
    }


    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <div className='bg-[#E9E9E9] py-6 sm:py-8 lg:py-10 px-4 sm:px-8 lg:px-17'>
            <h2 className='text-3xl font-bold text-center mb-8'>Book Details</h2>
            <div className='flex gap-5 bg-white py-5 px-5 rounded-xl'>
                <img src={book.coverImage} className='rounded-xl' />
                <div>
                    <div>
                        <h3 className='text-2xl font-semibold'>Book Title: {book.title}</h3>
                        <p className='text-xl text-gray-700'>Author: {book.author}</p>
                        <p>Rating: {book.rating}</p>
                        <p>Summary: {book.summary}</p>
                        <p>User Email: {book.userEmail}</p>
                    </div>
                    <div>
                        <button className='btn my-3 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold px-10 py-2 rounded-lg mr-2'>Read Now</button>
                        <Link
                            to={`/update-book/${book._id}`}
                            className="btn my-3 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold px-10 py-2 rounded-lg mr-2"
                        >
                            Update Details
                        </Link>
                        <button
                            onClick={handleDelete}
                            className="btn my-3 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold px-10 py-2 rounded-lg">
                            Delete Book
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;