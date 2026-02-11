import React from 'react';

const BluExperienceSection: React.FC = () => {
    return (
        <div className="min-h-screen bg-black text-white font-sans p-4 md:p-16 flex flex-col items-center justify-center">
            {/* Header Section */}
            <header className="text-center mb-8 md:mb-12 bg-gradient-to-l from-[#FFFFFF] from-20% to-[#0066FF] to-150% bg-clip-text">
                <h1 className="text-3xl md:text-6xl font-medium mb-2 md:mb-4 text-transparent">
                    Experience Blu!
                </h1>
                <p className="text-transparent text-base md:text-xl">
                    Learning has no language barrier anymore.
                </p>
            </header>

            {/* Chat Interface Card */}
            <div className="w-full max-w-4xl bg-[#050a15] border border-blue-900/50 rounded-[2rem] p-4 md:p-10 flex flex-col shadow-2xl">

                {/* Messages Container */}
                <div className="flex-grow space-y-6 md:space-y-8 mb-6 overflow-y-auto">

                    {/* AI Message 1 */}
                    <div className="flex flex-col items-start">
                        <img
                            src="/images/Experience/blu_logo.svg"
                            alt="Blu AI Logo"
                            className="w-8 h-8 md:w-10 md:h-10 mb-3 object-contain drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                        />
                        <div className="text-gray-300 text-sm md:text-base leading-relaxed mb-3">
                            Hey! I'm Blu, Your AI Coach. Ready To Explore The Fundamentals Of Design? Let's Chat And Learn How To Create Amazing Experiences Together!
                        </div>
                        {/* Message Action Icons - Made responsive with smaller size and gap on mobile */}
                        <div className="flex space-x-3 md:space-x-4">
                            <img src="/images/Experience/copy.svg" alt="Copy" className="w-4 h-4 md:w-5 md:h-5 opacity-60 hover:opacity-100 cursor-pointer" />
                            <img src="/images/Experience/like.svg" alt="Like" className="w-4 h-4 md:w-5 md:h-5 opacity-60 hover:opacity-100 cursor-pointer" />
                            <img src="/images/Experience/dislike.svg" alt="Dislike" className="w-4 h-4 md:w-5 md:h-5 opacity-60 hover:opacity-100 cursor-pointer" />
                            <img src="/images/Experience/volume.svg" alt="Volume" className="w-4 h-4 md:w-5 md:h-5 opacity-60 hover:opacity-100 cursor-pointer" />
                        </div>
                    </div>

                    {/* User Message */}
                    <div className="flex justify-end">
                        <div className="bg-blue-900/40 border border-blue-800/30 text-blue-100 p-3 md:p-4 rounded-2xl rounded-br-none max-w-[85%] md:max-w-xl text-sm md:text-base">
                            <p className="leading-relaxed">
                                Can You Explain Me The Principles Of Design Principles And Fundamentals Of Design With An Example
                            </p>
                        </div>
                    </div>

                    {/* AI Message 2 */}
                    <div className="flex flex-col items-start">
                        <img
                            src="/images/Experience/blu_logo.svg"
                            alt="Blu AI Logo"
                            className="w-8 h-8 md:w-10 md:h-10 mb-3 object-contain"
                        />
                        <div className="text-gray-300 text-sm md:text-base leading-relaxed mb-3">
                            Absolutely! Design principles are the rules a designer must follow to create an effective and attractive composition...
                        </div>
                        <div className="flex space-x-3 md:space-x-4">
                            <img src="/images/Experience/copy.svg" alt="Copy" className="w-4 h-4 md:w-5 md:h-5 opacity-60 hover:opacity-100 cursor-pointer" />
                            <img src="/images/Experience/like.svg" alt="Like" className="w-4 h-4 md:w-5 md:h-5 opacity-60 hover:opacity-100 cursor-pointer" />
                            <img src="/images/Experience/dislike.svg" alt="Dislike" className="w-4 h-4 md:w-5 md:h-5 opacity-60 hover:opacity-100 cursor-pointer" />
                            <img src="/images/Experience/volume.svg" alt="Volume" className="w-4 h-4 md:w-5 md:h-5 opacity-60 hover:opacity-100 cursor-pointer" />
                        </div>
                    </div>
                </div>

                {/* Input Area - Adjusted padding and icon sizing */}
                <div className="mt-auto">
                    <div className="bg-[#0a0f1c] border border-blue-900/30 rounded-full p-1.5 md:p-2 flex items-center shadow-inner">
                        <button className="p-2 md:ml-2 text-gray-500 hover:text-blue-400 transition-colors">
                            <img src="/images/Experience/mic.svg" alt="Voice Input" className="w-5 h-5 md:w-6 md:h-6" />
                        </button>
                        <input
                            type="text"
                            placeholder="Ask Anything..."
                            className="flex-grow bg-transparent border-none focus:ring-0 focus:outline-none text-gray-300 placeholder-gray-500 px-2 md:px-4 py-2 text-sm md:text-base"
                        />
                        <button className="bg-blue-600 hover:bg-blue-500 transition-colors text-white p-2 md:p-3 rounded-full flex items-center justify-center shrink-0">
                            <img src="/images/Experience/send.svg" alt="Send" className="w-4 h-4 md:w-5 md:h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BluExperienceSection;