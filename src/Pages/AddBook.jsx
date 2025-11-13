import React from 'react';

const AddBook = () => {
    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = {
            title: e.target.title.value,
            author: e.target.author.value,
            genre: e.target.genre.value,
            rating: e.target.rating.value,
            summary: e.target.summary.value,
            coverImage: e.target.coverImageURL.value,
            userEmail: e.target.userEmail.value
        }

        fetch('http://localhost:3000/books', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4">
            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-sm">
                <h2 className="text-center text-2xl font-bold text-gray-900 mb-5">
                    Add Your Book
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                            Title
                        </label>
                        <input
                            id="title"
                            name="title"
                            type="text"
                            required
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                            placeholder="Enter Book Title"
                        />
                        <label htmlFor="author" className="block text-sm font-medium text-gray-700">
                            Author
                        </label>
                        <input
                            id="author"
                            name="author"
                            type="text"
                            required
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                            placeholder="Enter Book Author"
                        />
                        <label htmlFor="genre" className="block text-sm font-medium text-gray-700">
                            Genre
                        </label>
                        <input
                            id="genre"
                            name="genre"
                            type="text"
                            required
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                            placeholder="Enter Book Genre"
                        />
                        <label htmlFor="rating" className="block text-sm font-medium text-gray-700">
                            Rating
                        </label>
                        <input
                            id="rating"
                            name="rating"
                            type="text"
                            required
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                            placeholder="Enter Book Rating"
                        />
                        <label htmlFor="summary" className="block text-sm font-medium text-gray-700">
                            Summary
                        </label>
                        <input
                            id="summary"
                            name="summary"
                            type="text"
                            required
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                            placeholder="Enter Book Summary"
                        />
                        <label htmlFor="coverImageURL" className="block text-sm font-medium text-gray-700">
                            Cover Image
                        </label>
                        <input
                            id="coverImageURL"
                            name="coverImageURL"
                            type="url"
                            required
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                            placeholder="Enter Book Cover Image URL"
                        />
                        <label htmlFor="userEmail" className="block text-sm font-medium text-gray-700">
                            User Email
                        </label>
                        <input
                            id="userEmail"
                            name="userEmail"
                            type="email"
                            required
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                            placeholder="Enter User Email"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-200"
                    >
                        Add Book
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddBook;