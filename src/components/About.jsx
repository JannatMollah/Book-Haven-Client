import React from 'react';
import { Link } from 'react-router';

const About = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-12">
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                        About <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Book Haven</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Welcome to the world's largest digital library, where stories come alive and knowledge knows no bounds
                    </p>
                </div>

                {/* Main Content */}
                <div className="max-w-6xl mx-auto">
                    {/* Hero Section */}
                    <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-16">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                    Your Gateway to Infinite Stories
                                </h2>
                                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                    Book Haven is the world's largest and most famous digital library, storing all kinds of books for readers to discover and enjoy. Our platform connects book lovers with amazing stories and talented authors from around the globe.
                                </p>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    From classic literature to contemporary bestsellers, Book Haven offers an extensive collection that caters to every reading preference. Join our community of millions and embark on endless literary adventures.
                                </p>
                            </div>
                            <div className="flex justify-center">
                                <div className="relative">
                                    <div className="w-80 h-80 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl transform rotate-6"></div>
                                    <div className="absolute top-4 left-4 w-80 h-80 bg-white rounded-2xl shadow-2xl flex items-center justify-center">
                                        <i className="fa-solid fa-book-open-reader text-6xl text-purple-600"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <i className="fa-solid fa-infinity text-3xl text-purple-600"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Infinite Collection</h3>
                            <p className="text-gray-600">
                                Access millions of books across all genres, from timeless classics to the latest releases
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <i className="fa-solid fa-globe text-3xl text-blue-600"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Community</h3>
                            <p className="text-gray-600">
                                Connect with readers and authors worldwide, share reviews, and discover new perspectives
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <i className="fa-solid fa-rocket text-3xl text-green-600"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Always Evolving</h3>
                            <p className="text-gray-600">
                                Our library grows daily with new titles and features to enhance your reading experience
                            </p>
                        </div>
                    </div>

                    {/* Mission & Vision */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                        <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl p-8 text-white">
                            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mb-6">
                                <i className="fa-solid fa-bullseye text-2xl"></i>
                            </div>
                            <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
                            <p className="text-lg leading-relaxed opacity-90">
                                To make knowledge and literature accessible to everyone, everywhere. We believe that stories have the power to transform lives and connect humanity across boundaries.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-gray-900 to-gray-700 rounded-3xl p-8 text-white">
                            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mb-6">
                                <i className="fa-solid fa-eye text-2xl"></i>
                            </div>
                            <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
                            <p className="text-lg leading-relaxed opacity-90">
                                To create a world where every person has instant access to the books they love, and every author has a platform to share their voice with the world.
                            </p>
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-16">
                        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
                            By The Numbers
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">29.6M+</div>
                                <div className="text-gray-600 font-semibold">Active Readers</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">906K+</div>
                                <div className="text-gray-600 font-semibold">Book Reviews</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">132K+</div>
                                <div className="text-gray-600 font-semibold">Books Available</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">50+</div>
                                <div className="text-gray-600 font-semibold">Genres</div>
                            </div>
                        </div>
                    </div>

                    {/* Team Values */}
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 mb-16">
                        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
                            Why Choose Book Haven?
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    icon: 'fa-solid fa-shield-alt',
                                    title: 'Trusted Platform',
                                    desc: 'Secure and reliable digital library trusted by millions'
                                },
                                {
                                    icon: 'fa-solid fa-clock',
                                    title: 'Always Available',
                                    desc: 'Access your books anytime, anywhere on any device'
                                },
                                {
                                    icon: 'fa-solid fa-users',
                                    title: 'Community Driven',
                                    desc: 'Connect with fellow book lovers and authors'
                                },
                                {
                                    icon: 'fa-solid fa-star',
                                    title: 'Curated Quality',
                                    desc: 'Handpicked selections and quality recommendations'
                                }
                            ].map((item, index) => (
                                <div key={index} className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
                                    <i className={`${item.icon} text-3xl text-purple-600 mb-4`}></i>
                                    <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                                    <p className="text-gray-600 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="text-center">
                        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-white">
                            <h2 className="text-4xl font-bold mb-4">Ready to Start Your Reading Journey?</h2>
                            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                                Join millions of readers who have already discovered their next favorite book on Book Haven
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link 
                                    to="/all-books" 
                                    className="btn btn-lg bg-white text-purple-600 hover:bg-gray-100 border-0 font-bold px-8"
                                >
                                    <i className="fa-solid fa-book-open mr-2"></i>
                                    Explore Books
                                </Link>
                                <Link 
                                    to="/register" 
                                    className="btn btn-lg btn-outline text-white hover:bg-white hover:text-purple-600 border-white font-bold px-8"
                                >
                                    <i className="fa-solid fa-user-plus mr-2"></i>
                                    Join Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;