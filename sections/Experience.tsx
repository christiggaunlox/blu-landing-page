import React from 'react';

const BluExperienceSection: React.FC = () => {
    return (
        <div className="min-h-screen bg-black text-white font-sans p-8 md:p-16 flex flex-col items-center justify-center">
            {/* Header Section */}
            <header className="text-center mb-12 bg-gradient-to-l from-[#FFFFFF] from-20% to-[#0066FF] to-150% bg-clip-text">
                <h1 className="text-4xl md:text-6xl font-medium mb-4 text-transparent">
                    Experience Blu!
                </h1>
                <p className="text-transparent text-lg md:text-xl">
                    Learning has no language barrier anymore.
                </p>
            </header>

            {/* Chat Interface Card */}
            <div className="w-full max-w-4xl bg-[#050a15] border border-blue-900/50 rounded-3xl p-6 md:p-10 flex flex-col">

                {/* Messages Container */}
                <div className="flex-grow space-y-8 mb-8">

                    {/* AI Message 1 */}
                    <div className="flex flex-col items-start">
                        <img
                            src="/images/Experience/blu_logo.svg"
                            alt="Blu AI Logo"
                            className="w-10 h-10 mb-3 object-contain drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                        />
                        <p className="text-gray-300 leading-relaxed mb-3">
                            Hey! I'm Blu, Your AI Coach. Ready To Explore The Fundamentals Of Design? Let's Chat And Learn How To Create Amazing Experiences Together!
                        </p>
                        {/* Message Action Icons */}
                        <div className="flex space-x-4">
                            <img src="/images/Experience/copy.svg" alt="Copy" className="w-5 h-5 opacity-60 hover:opacity-100 cursor-pointer" />
                            <img src="/images/Experience/like.svg" alt="Like" className="w-5 h-5 opacity-60 hover:opacity-100 cursor-pointer" />
                            <img src="/images/Experience/dislike.svg" alt="Dislike" className="w-5 h-5 opacity-60 hover:opacity-100 cursor-pointer" />
                            <img src="/images/Experience/volume.svg" alt="Volume" className="w-5 h-5 opacity-60 hover:opacity-100 cursor-pointer" />
                        </div>
                    </div>

                    {/* User Message */}
                    <div className="flex justify-end">
                        <div className="bg-blue-900/50 text-blue-100 p-4 rounded-2xl rounded-br-none max-w-xl">
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
                            className="w-10 h-10 mb-3 object-contain drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                        />
                        <p className="text-gray-300 leading-relaxed mb-3">
                            Hey! I'm Blu, Your AI Coach. Ready To Explore The Fundamentals Of Design? Let's Chat And Learn How To Create Amazing Experiences Together!
                        </p>
                        {/* Message Action Icons */}
                        <div className="flex space-x-4">
                            <img src="/images/Experience/copy.svg" alt="Copy" className="w-5 h-5 opacity-60 hover:opacity-100 cursor-pointer" />
                            <img src="/images/Experience/like.svg" alt="Like" className="w-5 h-5 opacity-60 hover:opacity-100 cursor-pointer" />
                            <img src="/images/Experience/dislike.svg" alt="Dislike" className="w-5 h-5 opacity-60 hover:opacity-100 cursor-pointer" />
                            <img src="/images/Experience/volume.svg" alt="Volume" className="w-5 h-5 opacity-60 hover:opacity-100 cursor-pointer" />
                        </div>
                    </div>

                </div>

                {/* Input Area */}
                <div className="mt-auto relative">
                    <div className="bg-[#0a0f1c] border border-blue-900/30 rounded-full p-2 flex items-center">
                        <button className="p-2 ml-2 text-gray-500 hover:text-blue-400 transition-colors">
                            <img src="/images/Experience/mic.svg" alt="Voice Input" className="w-6 h-6" />
                        </button>
                        <input
                            type="text"
                            placeholder="Ask Anything I Am Here To Help....."
                            className="flex-grow bg-transparent border-none focus:ring-0 focus:outline-none text-gray-300 placeholder-gray-500 px-4 py-2"
                        />
                        <button className="bg-blue-500 hover:bg-blue-600 transition-colors text-white p-3 rounded-full flex items-center justify-center">
                            <img src="/images/Experience/send.svg" alt="Send" className="w-5 h-5" />
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BluExperienceSection;