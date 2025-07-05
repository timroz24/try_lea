import React from 'react';

const ComingSoon = () => {
    return (
        <section className="min-h-screen bg-gray-100 text-black px-6 py-20 flex flex-col items-center">
            <h2 className="text-4xl font-bold mb-4 animate-fadeInUp">Coming Soon</h2>
            <p className="text-lg text-gray-600 max-w-xl text-center mb-10 animate-fadeInUp delay-200">
                Map intelligence, CRM insights, and scroll-driven visual storytelling.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl w-full animate-fadeInUp delay-400">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-white text-xl">🗺️</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Interactive Maps</h3>
                    <p className="text-gray-600">Real-time property visualization with zoning overlays and environmental data.</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-white text-xl">📊</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">CRM Integration</h3>
                    <p className="text-gray-600">Seamless Zoho CRM sync with automated lead scoring and follow-ups.</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-white text-xl">🤖</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Multi-Agent AI</h3>
                    <p className="text-gray-600">Specialized AI agents for zoning, environmental, and market analysis.</p>
                </div>
            </div>
        </section>
    );
};

export default ComingSoon; 