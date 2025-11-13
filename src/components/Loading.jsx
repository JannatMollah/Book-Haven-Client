import React from 'react';

const Loading = () => {
    return (
        <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-[#4C1D95] via-[#6D28D9] to-[#A78BFA] relative overflow-hidden">
            <div className="absolute inset-0 backdrop-blur-xl bg-white/10"></div>
            <div className="absolute w-72 h-72 bg-purple-500/30 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
            <div className="absolute w-80 h-80 bg-indigo-500/30 rounded-full blur-3xl bottom-10 right-10 animate-ping"></div>
            <div className="relative z-10 flex flex-col items-center text-white">
                <span className="loading loading-ring loading-lg text-white scale-[3]"></span>
                <p className="mt-8 text-xl font-medium tracking-wide animate-pulse">
                    Loading, please wait...
                </p>
            </div>
        </div>
    );
};

export default Loading;