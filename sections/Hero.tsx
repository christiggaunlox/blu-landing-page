import React from 'react';

const LandingPage: React.FC = () => {
    return (
        // Main Container: Deep blue background, full height, flex column
        <div className="min-h-screen w-full bg-linear-to-t from-[#00040A] from-50% to-[#0066FF] to-200% text-white flex flex-col font-sans">

            {/* Header Section */}
            <header className="flex justify-between items-center px-6 py-5 md:px-12 md:py-6">

                {/* Logo Area */}
                <div className="flex items-center gap-2 font-bold text-lg tracking-wide">
                    {/* Logo Icon */}
                    <div className="">
                        <img src="/images/Hero/logo.svg" alt="" className='w-20 h-20' />
                    </div>
                </div>

                {/* Navigation Links - Hidden on small mobile screens, visible on md+ */}
                <nav className="hidden md:flex gap-8 text-sm text-gray-400 font-medium">
                    <a href="#about" className="hover:text-white transition-colors">About Us</a>
                    <a href="#upskilling" className="hover:text-white transition-colors">Upskilling program</a>
                    <a href="#internship" className="hover:text-white transition-colors">Global Internship</a>
                    <a href="#research" className="hover:text-white transition-colors">Research paper</a>
                    <a href="#contact" className="hover:text-white transition-colors">Contact Us</a>
                </nav>

                {/* Auth Buttons */}
                <div className="flex items-center gap-6 text-sm font-medium">
                    <a href="#signup" className="text-gray-400 hover:text-white transition-colors hidden sm:block">
                        Sign Up
                    </a>
                    <button className="bg-[#0066FF] hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-colors">
                        Log In
                    </button>
                </div>
            </header>

            {/* Main Content Area */}
            <main className="flex-1 flex justify-center items-center p-6">
                {/* 1. Ensure the parent container is 'relative' so the text can be positioned inside it */}
                <div className="relative w-full max-w-lg flex justify-center items-center">

                    {/* The Badge Image */}
                    <img
                        src="/images/Hero/BluIcon.png" // Replace with your actual image variable
                        alt="BLU V2.0 Badge"
                        className="w-full h-auto object-contain drop-shadow-2xl"
                    />

                    {/* 2. The Text Overlay */}
                    {/* 'absolute inset-0' makes this div cover the exact same space as the image */}
                    {/* 'flex justify-center items-center' puts the content perfectly in the middle */}
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10">

                        {/* Title: Matches the bright blue color in your design */}
                        <h1 className="text-3xl md:text-7xl font-medium bg-gradient-to-r from-[#0066FF] to-[#0095FF] bg-clip-text text-transparent tracking-tight mb-2">
                            BLU V2.0
                        </h1>

                        {/* Subtitle: White text with line break */}
                        <p className="bg-gradient-to-tl from-[#FFFFFF] from-10% to-[#0066FF] to-150% bg-clip-text text-transparent text-lg sm:text-2xl font-medium leading-snug">
                            Built Just For Learning,<br />
                            Only at Unlox
                        </p>
                    </div>

                </div>
            </main>

        </div>
    );
};

export default LandingPage;