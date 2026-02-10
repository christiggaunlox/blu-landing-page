import React from 'react';

const BluLandingPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#00040A] from-[25%] via-[#040c20] via-[50%] to-[#00040A] to-[75%] text-white font-sans p-8 md:p-16 flex flex-col items-center">
            {/* Header Section */}
            <header className="text-center mb-16 bg-gradient-to-l from-[#FFFFFF] from-10% to-[#0066FF] to-150% bg-clip-text">
                <h1 className="text-4xl md:text-6xl font-medium mb-4 text-transparent">
                    The Power Behind Blu!
                </h1>
                <p className="text-lg md:text-xl text-transparent">
                    Learning has no language barrier anymore.
                </p>
            </header>

            {/* Cards Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl">

                {/* Intelligence Test Card */}
                <div className="bg-[#050a15] border border-blue-900/50 rounded-3xl p-8 flex flex-col items-start hover:border-blue-500/50 transition-colors">
                    {/* Image Container */}
                    <img
                        src="/images/Features/img1.png"
                        alt="Intelligence Test Visual"
                        className="w-full h-full object-contain"
                    />

                    <h2 className="text-2xl font-medium my-3 text-transparent bg-gradient-to-b from-[#C3DBFF] to-[#6EA8FF] bg-clip-text">Intelligence Test</h2>
                    <p className="text-[#D3E3F7] leading-relaxed">
                        Analyze your learning level, track progress, and redesign lessons to match your growth.
                    </p>
                </div>

                {/* Evaluate with Blu Score Card */}
                <div className="bg-[#050a15] border border-blue-900/50 rounded-3xl p-8 flex flex-col items-start hover:border-blue-500/50 transition-colors">
                    {/* Image Container */}
                    <img
                        src="/images/Features/img2.png"
                        alt="Blu Score Gauge Visual"
                        className="w-full h-full object-contain"
                    />

                    <h2 className="text-2xl font-medium my-3 text-transparent bg-gradient-to-b from-[#C3DBFF] to-[#6EA8FF] bg-clip-text">Evaluate with Blu Score:</h2>
                    <p className="text-[#D3E3F7] leading-relaxed">
                        Test your knowledge with blu score, by clearing weekly tests, module tests (60% to progress), and a final exam (70% for certification).
                    </p>
                </div>
            </div>

            {/* --- Middle Section: Availability, Logo, & Curriculum --- */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl my-8">

                {/* 1. Left Card: 24/7 Availability */}
                <div className="bg-[#050a15] border border-blue-900/50 rounded-3xl p-8 flex flex-col items-start hover:border-blue-500/50 transition-colors">
                    <img
                        src="/images/Features/img3.png"
                        alt="24/7 Availability Visual"
                        className="w-full mb-8 object-contain"
                    />
                    <h2 className="text-2xl font-medium my-3 text-transparent bg-gradient-to-b from-[#C3DBFF] to-[#6EA8FF] bg-clip-text">24/7 Availability</h2>
                    <p className="text-[#D3E3F7] leading-relaxed">
                        Advanced LLaMA-based AI that understands your learning style and adapts accordingly.
                    </p>
                </div>

                {/* 2. Middle Card: Center Logo (Vertically Centered) */}
                <div className="flex items-center justify-center">
                    <div className="w-40 h-40 md:w-56 md:h-56 relative flex items-center justify-center">
                        <img
                            src="/images/Features/img4.png"
                            alt="Center Logo"
                            className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(59,130,246,0.6)]"
                        />
                    </div>
                </div>

                {/* 3. Right Card: Personalized Curriculum */}
                <div className="bg-[#050a15] border border-blue-900/50 rounded-3xl p-8 flex flex-col items-start hover:border-blue-500/50 transition-colors">
                    <img
                        src="/images/Features/img5.png"
                        alt="Personalized Curriculum Visual"
                        className="w-full mb-8 object-contain"
                    />
                    <h2 className="text-2xl font-medium my-3 text-transparent bg-gradient-to-b from-[#C3DBFF] to-[#6EA8FF] bg-clip-text">Personalized Curriculum</h2>
                    <p className="text-[#D3E3F7] leading-relaxed">
                        Clear milestones: weekly tests, module tests (60% to progress), and a final exam (70% for certification).
                    </p>
                </div>

            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl">

                {/* Intelligence Test Card */}
                <div className="bg-[#050a15] border border-blue-900/50 rounded-3xl p-8 flex flex-col items-start hover:border-blue-500/50 transition-colors">
                    {/* Image Container */}
                    <img
                        src="/images/Features/img6.png"
                        alt="Intelligence Test Visual"
                        className="w-full h-full object-contain"
                    />


                    <h2 className="text-2xl font-medium my-3 text-transparent bg-gradient-to-b from-[#C3DBFF] to-[#6EA8FF] bg-clip-text">Conversational & Adaptive</h2>
                    <p className="text-[#D3E3F7] leading-relaxed">
                        Blu talks naturally, understands context, and adapts to your pace.
                    </p>
                </div>

                {/* Evaluate with Blu Score Card */}
                <div className="bg-[#050a15] border border-blue-900/50 rounded-3xl p-8 flex flex-col items-start hover:border-blue-500/50 transition-colors">
                    {/* Image Container */}
                    <img
                        src="/images/Features/img7.png"
                        alt="Blu Score Gauge Visual"
                        className="w-full h-full object-contain"
                    />


                    <h2 className="text-2xl font-medium my-3 text-transparent bg-gradient-to-b from-[#C3DBFF] to-[#6EA8FF] bg-clip-text">Learning Intelligence</h2>
                    <p className="text-[#D3E3F7] leading-relaxed">
                        Stay on track with a learning tracker built for seamless progress.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default BluLandingPage;