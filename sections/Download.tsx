import React from "react";

const Download: React.FC = () => {
    return (
        <div className="relative h-[80vh] bg-gradient-to-br from-[#00040A] from-50% to-[#0066FF] text-white font-sans overflow-hidden">

            {/* LEFT CONTENT – FULL WIDTH */}
            <div className="relative z-10 h-full flex items-center px-8 md:px-16 w-full">
                <div className="w-full ml-15 space-y-8">

                    <header className="space-y-2">
                        <h1 className="text-4xl md:text-5xl font-medium bg-gradient-to-l from-[#FFFFFF] from-50% to-[#0066FF] to-150% bg-clip-text text-transparent">
                            Experience Blu! <br />
                            Talk to the future of learning.
                        </h1>
                    </header>

                    <a href="#" className="inline-block transition-transform hover:scale-105">
                        <img
                            src="/images/Download/playstore.svg"
                            alt="Get it on Google Play"
                            className="h-16 w-auto"
                        />
                    </a>

                </div>
            </div>

            {/* PHONE – ABSOLUTE, FLOATING */}
            <div className="absolute right-0 bottom-0 h-full pointer-events-none">

                {/* Glow (BEHIND phone) */}
                <div className="absolute inset-0 -z-10 bg-blue-900/30 blur-3xl rounded-full translate-x-1/3 translate-y-1/4" />

                <img
                    src="/images/Download/phone.png"
                    alt="Blu App on Smartphone"
                    className="relative z-10 h-full w-auto object-contain"
                />
            </div>
        </div>
    );
};

export default Download;
