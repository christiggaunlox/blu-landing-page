import React from 'react';

const Contact: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#00040A] from-[25%] via-[#040c20] via-[50%] to-[#00040A] to-[75%] text-white font-sans p-8 md:p-16 flex flex-col items-center justify-center">

            {/* Header */}
            <header className="text-center mb-12">
                <h1 className="text-4xl md:text-6xl font-medium bg-gradient-to-l from-[#FFFFFF] from-20% to-[#0066FF] to-150% bg-clip-text text-transparent">
                    Unlox Your <br /> Journey With Blu!
                </h1>
            </header>

            {/* Two Separate Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">

                {/* LEFT: Image Card */}
                <div className="bg-[#050a15] rounded-3xl overflow-hidden">
                    <img
                        src="/images/Contact/img1.png"
                        alt="Blu Journey"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* RIGHT: Form Card */}
                <div className="bg-[#050a15] border border-[#A0A4AB80] rounded-3xl p-8 md:p-12">
                    <form className="space-y-6">

                        {/* Name */}
                        <div>
                            <label className="block text-sm text-gray-300 mb-2">Name</label>
                            <input
                                className="w-full bg-[#0a0f1c] border border-[#A0A4AB80] rounded-lg px-4 py-3 text-gray-200"
                                placeholder="Enter Your Name"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm text-gray-300 mb-2">Email</label>
                            <input
                                type="email"
                                className="w-full bg-[#0a0f1c] border border-[#A0A4AB80] rounded-lg px-4 py-3 text-gray-200"
                                placeholder="Enter Your Email"
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="block text-sm text-gray-300 mb-2">Phone Number</label>
                            <div className="flex bg-[#0a0f1c] border border-[#A0A4AB80] rounded-lg overflow-hidden">
                                <select className="bg-transparent text-gray-300 px-3">
                                    <option>+91</option>
                                    <option>+1</option>
                                    <option>+44</option>
                                </select>
                                <input
                                    className="flex-grow bg-transparent px-4 py-3 text-gray-200 focus:outline-none"
                                    placeholder="Enter phone number"
                                />
                            </div>
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block text-sm text-gray-300 mb-2">Message</label>
                            <textarea
                                rows={4}
                                className="w-full bg-[#0a0f1c] border border-[#A0A4AB80] rounded-lg px-4 py-3 text-gray-200 resize-none"
                            />
                        </div>

                        {/* Submit */}
                        <button className="w-full bg-[#0066FF] hover:bg-blue-700 py-3 rounded-2xl transition">
                            Submit
                        </button>

                    </form>
                </div>

            </div>
        </div>
    );
};

export default Contact;
