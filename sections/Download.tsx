import React from "react";

const Download: React.FC = () => {
    return (
        /* Changed h-[80vh] to min-h-[80vh] and added flex flex-col to stack on mobile */
        <div className="relative min-h-[80vh] lg:h-[80vh] bg-gradient-to-br from-[#00040A] from-50% to-[#0066FF] text-white font-sans overflow-hidden flex flex-col">

            {/* CONTENT SECTION */}
            {/* Removed absolute positioning for mobile, centered text, and kept lg desktop alignment */}
            <div className="relative z-30 flex-1 flex items-center justify-center lg:justify-start px-8 md:px-16 w-full pt-16 lg:pt-0">
                <div className="w-full lg:ml-15 space-y-8 text-center lg:text-left">
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
                            className="h-16 w-auto mx-auto lg:mx-0"
                        />
                    </a>
                </div>
            </div>

            {/* PHONE SECTION */}
            {/* Mobile: Relative position to flow after text | Desktop: Absolute as per original design */}
            <div className="relative lg:absolute right-[-70] sm:right-[-180] md:right-[-270] bottom-[0] lg:right-[-50] lg:bottom-0 h-[50vh] lg:h-full pointer-events-none mt-auto flex justify-center lg:block">

                {/* Glow Effect */}
                <div className="absolute inset-0 -z-10 bg-blue-900/30 blur-3xl rounded-full translate-x-1/3 translate-y-1/4" />

                <img
                    src="/images/Download/phone.png"
                    alt="Blu App on Smartphone"
                    className="relative z-10 h-full w-auto object-contain object-bottom lg:object-right-bottom"
                />
            </div>
        </div>
    );
};

export default Download;