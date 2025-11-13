import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import useDocumentTitle from "../components/useDocumentTitle";

const Register = () => {
    const { createUser, updateUser, signInWithGoogle } = useContext(AuthContext);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    useDocumentTitle('Create Account');

    const handleRegister = (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        const uppercase = /[A-Z]/.test(password);
        const lowercase = /[a-z]/.test(password);
        if (!uppercase || !lowercase || password.length < 6) {
            setError("Password must have uppercase, lowercase and be at least 6 characters.");
            setLoading(false);
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log("User created:", user);
                return updateUser({ displayName: name, photoURL: photo });
            })
            .then(() => {
                navigate("/");
            })
            .catch(err => {
                console.error("Registration error:", err);
                setError(err.message);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const handleGoogleLogin = () => {
        setLoading(true);
        setError("");
        
        signInWithGoogle()
            .then(result => {
                console.log("Google sign in successful:", result.user);
                navigate("/");
            })
            .catch(err => {
                console.error("Google sign in error:", err);
                setError(err.message);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4 py-8">
            <div className="w-full max-w-md bg-white p-6 sm:p-8 rounded-xl shadow-sm">
                <h2 className="text-center text-2xl font-bold text-gray-900 mb-5">
                    Sign Up Now
                </h2>
                
                {error && (
                    <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md text-sm">
                        {error}
                    </div>
                )}

                <form onSubmit={handleRegister} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            placeholder="Enter your full name"
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>

                    <div>
                        <label htmlFor="photo" className="block text-sm font-medium text-gray-700">
                            Photo URL
                        </label>
                        <input
                            id="photo"
                            name="photo"
                            type="url"
                            required
                            placeholder="https://example.com/photo.jpg"
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email address
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="Enter your email"
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            placeholder="Enter your password"
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                        />
                        <p className="mt-1 text-xs text-gray-500">
                            Must contain uppercase, lowercase, and be at least 6 characters
                        </p>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? "Creating Account..." : "Sign Up"}
                    </button>
                </form>

                <div className="mt-6 flex items-center">
                    <div className="grow border-t border-gray-300"></div>
                    <span className="mx-3 text-gray-500 text-sm">Or continue with</span>
                    <div className="grow border-t border-gray-300"></div>
                </div>

                <div className="mt-6">
                    <button 
                        onClick={handleGoogleLogin}
                        disabled={loading}
                        className="w-full flex justify-center items-center gap-3 bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 transition-colors duration-200 py-2.5 px-4 rounded-md text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <svg aria-label="Google logo" width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <g>
                                <path d="m0 0H512V512H0" fill="#fff"></path>
                                <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                                <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                                <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                                <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
                            </g>
                        </svg>
                        {loading ? "Signing in..." : "Sign up with Google"}
                    </button>
                </div>

                <p className="mt-6 text-center text-sm text-gray-500">
                    Already a member?{' '}
                    <Link 
                        to="/login" 
                        className="font-medium text-indigo-600 hover:text-indigo-500 underline transition-colors duration-200"
                    >
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;