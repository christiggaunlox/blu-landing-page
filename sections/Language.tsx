import React from 'react';

const Language = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#00040A] from-[25%] via-[#040c20] via-[50%] to-[#00040A] to-[75%] flex flex-col items-center justify-center relative overflow-hidden text-white font-sans selection:bg-blue-500 selection:text-white">
            {/* Top Fade Overlay */}
            <div className="pointer-events-none absolute top-0 left-0 w-full h-1/2 
  bg-gradient-to-b from-[#00040A] via-[#00040A]/80 to-transparent z-30" />

            {/* Background Radial Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />

            {/* Main Content Container */}
            <div className="relative flex flex-col items-center w-full max-w-6xl px-4">

                {/* Header Section */}
                <div className="relative z-30 text-center my-16 md:my-24 bg-gradient-to-l from-[#FFFFFF] from-20% to-[#0066FF] to-150% bg-clip-text text-transparent">
                    <h1 className="text-4xl md:text-6xl tracking-tight mb-4">
                        <span className="text-[#007AFF]">Blu V.2.0</span> Now Speaks
                        <br className="hidden md:block" /> Your Language
                    </h1>
                    <p className="text-lg md:text-xl font-light tracking-wide">
                        Learning has no language barrier anymore.
                    </p>
                </div>

                {/* Orbit System Container */}
                <div className="relative z-20 w-full h-[500px] flex items-center justify-center -translate-y-50">

                    {/* Orbital Rings (Background circles) */}
                    {/* Innermost Ring */}
                    <div className="absolute w-[520px] h-[520px] border border-[#A0A4AB80] rounded-full" />
                    {/* Middle Ring */}
                    <div className="absolute w-[870px] h-[870px] border border-[#A0A4AB80] rounded-full" />

                    {/* Alignment Container for Planets */}
                    <div className="flex items-center justify-center gap-15 md:gap-30">

                        {/* Far Left Satellite (Kannada) */}
                        <div className="hidden z-10 md:flex flex-col items-center justify-center w-12 h-12 rounded-full border border-blue-500/30 bg-[#00081C] shadow-[0_0_15px_rgba(0,122,255,0.2)]">
                            <span className="text-[6px]">Kannada</span>
                            <span className="text-sm">ಕ</span>
                        </div>

                        {/* Near Left Satellite (Kannada) */}
                        <div className="hidden z-10 sm:flex flex-col items-center justify-center w-16 h-16 rounded-full border border-blue-500/40 bg-[#00081C] shadow-[0_0_20px_rgba(0,122,255,0.3)]">
                            <span className="text-[8px]">Kannada</span>
                            <span className="text-lg">ಕ</span>
                        </div>

                        {/* Central Planet (Hindi - Main Focus) */}
                        <div className="relative flex flex-col items-center">
                            {/* The Glowing Circle */}
                            <div className="w-40 h-40 md:w-52 md:h-52 rounded-full bg-gradient-to-b from-[#0F1C35] to-[#000411] border border-blue-400/50 flex items-center justify-center shadow-[0_0_60px_rgba(0,122,255,0.4)] relative z-20">
                                {/* Inner Glow Ring */}
                                <div className="absolute inset-2 rounded-full border border-blue-400/20" />
                                <span className="text-5xl md:text-6xl text-white font-serif">हिन्दी</span>
                            </div>

                            {/* Label Pill below */}
                            <div className="absolute -bottom-15 bg-[#0055B3] hover:bg-[#004494] text-white text-sm px-6 py-1.5 rounded-full transition-colors cursor-default shadow-lg shadow-blue-900/50">
                                Hindi
                            </div>
                        </div>

                        {/* Near Right Satellite (Kannada) */}
                        <div className="hidden z-10 sm:flex flex-col items-center justify-center w-16 h-16 rounded-full border border-blue-500/40 bg-[#00081C] shadow-[0_0_20px_rgba(0,122,255,0.3)]">
                            <span className="text-[8px]">Kannada</span>
                            <span className="text-lg">ಕ</span>
                        </div>

                        {/* Far Right Satellite (Kannada) */}
                        <div className="hidden z-10 md:flex flex-col items-center justify-center w-12 h-12 rounded-full border border-blue-500/30 bg-[#00081C] shadow-[0_0_15px_rgba(0,122,255,0.2)]">
                            <span className="text-[6px]">Kannada</span>
                            <span className="text-sm">ಕ</span>
                        </div>

                    </div>
                </div>
            </div>
            <div className="pointer-events-none absolute bottom-0 left-0 w-full h-1/5 
  bg-gradient-to-t from-[#00040A] via-[#00040A]/80 to-transparent z-10" />
        </div>
    );
};

export default Language;