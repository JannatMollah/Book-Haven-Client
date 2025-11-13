import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import axios from 'axios';

const AddBook = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = {
            title: e.target.title.value,
            author: e.target.author.value,
            genre: e.target.genre.value,
            rating: parseFloat(e.target.rating.value),
            summary: e.target.summary.value,
            coverImage: e.target.coverImage.value,
            userEmail: user.email,
            userName: user.displayName || 'Anonymous'
        };

        try {
            await axios.post('https://book-haven-server-alpha.vercel.app/books', formData);
            toast.success('Book added successfully!');
            navigate('/all-books');
        } catch (error) {
            console.error('Error adding book:', error);
            toast.error('Failed to add book');
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                        <h1 className="text-3xl font-bold text-center mb-8">Add New Book</h1>
                        
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Book Title</span>
                                </label>
                                <input
                                    type="text"
                                    name="title"
                                    placeholder="Enter book title"
                                    className="input input-bordered"
                                    required
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Author</span>
                                </label>
                                <input
                                    type="text"
                                    name="author"
                                    placeholder="Enter author name"
                                    className="input input-bordered"
                                    required
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Genre</span>
                                </label>
                                <select name="genre" className="select select-bordered" required>
                                    <option value="">Select Genre</option>
                                    <option value="Fiction">Fiction</option>
                                    <option value="Non-Fiction">Non-Fiction</option>
                                    <option value="Science Fiction">Science Fiction</option>
                                    <option value="Fantasy">Fantasy</option>
                                    <option value="Mystery">Mystery</option>
                                    <option value="Romance">Romance</option>
                                    <option value="Thriller">Thriller</option>
                                    <option value="Biography">Biography</option>
                                    <option value="History">History</option>
                                    <option value="Self-Help">Self-Help</option>
                                </select>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Rating (1-5)</span>
                                </label>
                                <select name="rating" className="select select-bordered" required>
                                    <option value="">Select Rating</option>
                                    <option value="1">1 Star</option>
                                    <option value="2">2 Stars</option>
                                    <option value="3">3 Stars</option>
                                    <option value="4">4 Stars</option>
                                    <option value="5">5 Stars</option>
                                </select>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Cover Image URL</span>
                                </label>
                                <input
                                    type="url"
                                    name="coverImage"
                                    placeholder="https://example.com/image.jpg"
                                    className="input input-bordered"
                                    required
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Summary</span>
                                </label>
                                <textarea
                                    name="summary"
                                    placeholder="Enter book summary"
                                    className="textarea textarea-bordered h-32"
                                    required
                                ></textarea>
                            </div>

                            <div className="form-control mt-8">
                                <button type="submit" className="btn btn-primary btn-lg text-white">
                                    <i className="fa-solid fa-plus mr-2"></i>
                                    Add Book
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddBook;