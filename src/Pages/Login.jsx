import React, { useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import useDocumentTitle from "../components/useDocumentTitle";

const Login = () => {
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    useDocumentTitle('Sign In');

    const handleLogin = (e) => {
        e.preventDefault();
        setError("");
        const formData = new FormData(e.target);
        const email = formData.get('email');
        const password = formData.get('password');

        signIn(email, password)
            .then(result => {
                navigate(from, { replace: true });
            })
            .catch(err => {
                setError(err.message);
            });
    };

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                navigate(from, { replace: true });
            })
            .catch(err => {
                setError(err.message);
            });
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4">
            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-sm">
                <h2 className="text-center text-2xl font-bold text-gray-900 mb-5">
                    Sign in to your account
                </h2>
                
                {error && (
                    <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md text-sm">
                        {error}
                    </div>
                )}

                <form onSubmit={handleLogin} className="space-y-5">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email address
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div>
                        <div className="flex justify-between items-center">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <Link 
                                to="/reset" 
                                state={{ email: email }}
                                className="text-sm text-indigo-600 hover:text-indigo-500"
                            >
                                Forgot password?
                            </Link>
                        </div>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                            placeholder="Enter your password"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-200"
                    >
                        Sign in
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
                        className="w-full flex justify-center items-center gap-3 bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 transition-colors duration-200 py-2.5 px-4 rounded-md text-sm font-medium"
                    >
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <g>
                                <path d="m0 0H512V512H0" fill="#fff"></path>
                                <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                                <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                                <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                                <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
                            </g>
                        </svg>
                        Login with Google
                    </button>
                </div>

                <p className="mt-8 text-center text-sm text-gray-500">
                    Not a member?{' '}
                    <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500 underline">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;