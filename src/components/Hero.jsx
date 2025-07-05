import React from 'react';


const Hero = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center px-6 text-center bg-gradient-to-b from-black to-gray-900">
            <div className="flex items-center justify-center mb-6 animate-fadeIn">
                <img
                    src="/lea-logo-transparent.png"
                    alt="LEA Logo"
                    className="w-16 h-16 md:w-20 md:h-20 mr-3 -mt-4 p-3 rounded-lg"
                    style={{ display: 'inline-block' }}
                />

                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 animate-fadeIn gradient-text">
                    Meet LEA.
                </h1>
            </div>
            <p className="text-lg md:text-2xl text-gray-300 max-w-xl animate-fadeIn delay-200">
                The smartest way to sell rural land. Instantly connected to maps, CRM, and AI insights.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fadeIn delay-400">
                <a
                    href="#chat"
                    className="px-6 py-3 rounded-full font-extrabold text-white bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                    Try LEA
                </a>
                <a
                    href="#contact"
                    className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300"
                >
                    Book a Call
                </a>
            </div>
        </section>
    );
};

export default Hero; 