import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import axios from 'axios';


const BookDetails = () => {
    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchBookDetails = async () => {
            try {
                const response = await axios.get(`https://book-haven-server-alpha.vercel.app/books/${id}`);
                setBook(response.data.result);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching book details:', error);
                toast.error('Failed to load book details');
                setLoading(false);
            }
        };

        fetchBookDetails();
    }, [id]);

    const handleAddToMyBooks = async () => {
        if (!user) {
            toast.error('Please login to add books to your collection');
            return;
        }

        try {
            await axios.post('https://book-haven-server-alpha.vercel.app/my-books', {
                bookId: id,
                userEmail: user.email,
                ...book
                
            });
            toast.success('Book added to your collection!');
        } catch (error) {
            console.error('Error adding book to collection:', error);
            toast.error('Failed to add book to collection');
        }
    };

    const handleAddComment = async (e) => {
        e.preventDefault();
        if (!user) {
            toast.error('Please login to add comments');
            return;
        }

        if (!comment.trim()) {
            toast.error('Please enter a comment');
            return;
        }

        try {
            const newComment = {
                bookId: id,
                userEmail: user.email,
                userName: user.displayName || 'Anonymous',
                userPhoto: user.photoURL,
                comment: comment.trim(),
                timestamp: new Date().toISOString()
            };

            await axios.post('https://book-haven-server-alpha.vercel.app/comments', newComment);
            setComments([...comments, newComment]);
            setComment('');
            toast.success('Comment added successfully!');
        } catch (error) {
            console.error('Error adding comment:', error);
            toast.error('Failed to add comment');
        }
    };

    const handleDelete = async () => {
        if (!window.confirm('Are you sure you want to delete this book?')) {
            return;
        }

        try {
            await axios.delete(`https://book-haven-server-alpha.vercel.app/books/${id}`);
            toast.success('Book deleted successfully!');
            navigate('/all-books');
        } catch (error) {
            console.error('Error deleting book:', error);
            toast.error('Failed to delete book');
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="loading loading-spinner loading-lg text-primary"></div>
            </div>
        );
    }

    if (!book) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-600">Book not found</h2>
                    <Link to="/all-books" className="btn btn-primary mt-4">Back to Books</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto px-4">
                <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                    {/* Book Details */}
                    <div className="flex flex-col lg:flex-row gap-8 mb-12">
                        <div className="lg:w-1/3">
                            <img
                                src={book.coverImage}
                                alt={book.title}
                                className="w-full h-96 object-cover rounded-2xl shadow-md"
                            />
                        </div>
                        <div className="lg:w-2/3">
                            <h1 className="text-4xl font-bold text-gray-900 mb-4">{book.title}</h1>
                            <p className="text-2xl text-gray-600 mb-4">by {book.author}</p>

                            <div className="flex flex-wrap gap-4 mb-6">
                                <span className="badge badge-primary badge-lg">{book.genre}</span>
                                <div className="flex items-center gap-2">
                                    <i className="fa-solid fa-star text-yellow-500"></i>
                                    <span className="text-lg font-semibold">{book.rating}/5</span>
                                </div>
                            </div>

                            <div className="prose max-w-none mb-6">
                                <h3 className="text-xl font-semibold mb-3">Summary</h3>
                                <p className="text-gray-700 leading-relaxed">{book.summary}</p>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <button
                                    onClick={handleAddToMyBooks}
                                    className="btn btn-primary text-white"
                                >
                                    <i className="fa-solid fa-heart mr-2"></i>
                                    Add to My Books
                                </button>
                                <Link
                                    to={`/update-book/${book._id}`}
                                    className="btn btn-outline btn-warning"
                                >
                                    <i className="fa-solid fa-edit mr-2"></i>
                                    Edit Book
                                </Link>
                                <button
                                    onClick={handleDelete}
                                    className="btn btn-outline btn-error"
                                >
                                    <i className="fa-solid fa-trash mr-2"></i>
                                    Delete Book
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Comments Section */}
                    <div className="border-t pt-8">
                        <h3 className="text-2xl font-bold mb-6">Comments & Reviews</h3>

                        {/* Add Comment Form */}
                        {user ? (
                            <form onSubmit={handleAddComment} className="mb-8">
                                <div className="flex gap-4">
                                    <textarea
                                        value={comment}
                                        onChange={(e) => setComment(e.target.value)}
                                        placeholder="Share your thoughts about this book..."
                                        className="textarea textarea-bordered flex-1 resize-none"
                                        rows="3"
                                    ></textarea>
                                    <button type="submit" className="btn btn-primary self-end">
                                        Post
                                    </button>
                                </div>
                            </form>
                        ) : (
                            <div className="alert alert-info mb-8">
                                <i className="fa-solid fa-info-circle"></i>
                                Please <Link to="/login" className="link link-primary">login</Link> to add comments
                            </div>
                        )}

                        {/* Comments List */}
                        <div className="space-y-4">
                            {comments.length === 0 ? (
                                <p className="text-gray-500 text-center py-8">
                                    No comments yet. Be the first to share your thoughts!
                                </p>
                            ) : (
                                comments.map((comment, index) => (
                                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                                        <div className="flex items-center gap-3 mb-2">
                                            <img
                                                src={comment.userPhoto || 'https://i.ibb.co.com/4RgYZ1Q/default-avatar.png'}
                                                alt={comment.userName}
                                                className="w-8 h-8 rounded-full"
                                            />
                                            <div>
                                                <p className="font-semibold">{comment.userName}</p>
                                                <p className="text-sm text-gray-500">
                                                    {new Date(comment.timestamp).toLocaleDateString()}
                                                </p>
                                            </div>
                                        </div>
                                        <p className="text-gray-700">{comment.comment}</p>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;