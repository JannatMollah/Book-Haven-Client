import axios from 'axios';
import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { toast } from 'react-toastify';


const UpdateBook = () => {
    const book = useLoaderData().result;
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = {
            title: e.target.title.value,
            author: e.target.author.value,
            genre: e.target.genre.value,
            rating: parseFloat(e.target.rating.value),
            summary: e.target.summary.value,
            coverImage: e.target.coverImage.value
        };

        try {
            await axios.put(`https://book-haven-server-alpha.vercel.app/books/${book._id}`, formData);
            toast.success('Book updated successfully!');
            navigate(`/book-details/${book._id}`);
        } catch (error) {
            console.error('Error updating book:', error);
            toast.error('Failed to update book');
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                        <h1 className="text-3xl font-bold text-center mb-8">Update Book</h1>
                        
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Book Title</span>
                                </label>
                                <input
                                    type="text"
                                    name="title"
                                    defaultValue={book.title}
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
                                    defaultValue={book.author}
                                    className="input input-bordered"
                                    required
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Genre</span>
                                </label>
                                <select name="genre" className="select select-bordered" defaultValue={book.genre} required>
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
                                <select name="rating" className="select select-bordered" defaultValue={book.rating} required>
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
                                    defaultValue={book.coverImage}
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
                                    defaultValue={book.summary}
                                    className="textarea textarea-bordered h-32"
                                    required
                                ></textarea>
                            </div>

                            <div className="form-control mt-8">
                                <button type="submit" className="btn btn-primary btn-lg text-white">
                                    <i className="fa-solid fa-save mr-2"></i>
                                    Update Book
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateBook;