import React from 'react';

const ChatDemo = () => {
    return (
        <section id="chat" className="min-h-screen bg-white text-black px-6 py-20 flex flex-col items-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-100 via-pink-50 to-white opacity-20 pointer-events-none"></div>

            <h2 className="text-4xl font-bold mb-4 animate-fadeInUp">Talk to LEA.</h2>
            <p className="text-lg text-gray-600 max-w-xl text-center mb-10 animate-fadeInUp delay-200">
                LEA understands zoning laws, land access, and buyer questions — and it responds instantly like a supercharged teammate.
            </p>

            <div className="w-full max-w-3xl bg-gradient-to-r from-white via-gray-50 to-white p-8 rounded-2xl shadow-2xl space-y-6 animate-fadeInUp delay-400">
                <div className="bg-white border border-gray-200 rounded-xl p-5 max-w-lg mx-auto shadow-sm hover:shadow-md transition-shadow duration-300">
                    <p className="text-base text-gray-800 font-medium">🧑‍💼 You: What's the flood risk on Lot 127?</p>
                </div>

                <div className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-xl p-5 max-w-lg mx-auto shadow-md hover:shadow-lg transition-shadow duration-300">
                    <p className="text-base">🤖 LEA: Safe. Zone X – No flood hazard reported in past 50 years.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-5 max-w-lg mx-auto shadow-sm hover:shadow-md transition-shadow duration-300">
                    <p className="text-base text-gray-800 font-medium">🧑‍💼 You: Can someone build a cabin on this parcel?</p>
                </div>

                <div className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-xl p-5 max-w-lg mx-auto shadow-md hover:shadow-lg transition-shadow duration-300">
                    <p className="text-base">🤖 LEA: Yes! Zoning A-R (Agricultural-Residential) permits off-grid living and tiny home builds.</p>
                </div>
            </div>

            <div className="mt-10 text-center animate-fadeInUp delay-600">
                <p className="text-md text-gray-500">Built with AI. Enhanced by Maps. Synced to CRM.</p>
            </div>
        </section>
    );
};

export default ChatDemo; 