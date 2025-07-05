import React from 'react';

const ContactCTA = () => {
    return (
        <section id="contact" className="bg-black text-white px-6 py-20 text-center">
            <h2 className="text-4xl font-bold mb-6 animate-fadeInUp">Ready to scale trust with AI?</h2>
            <p className="text-lg text-gray-300 mb-8 animate-fadeInUp delay-200">
                Let's bring your land sales to the next level.
            </p>
            <button
                className="inline-block bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl animate-fadeInUp delay-400"
                onClick={() => {
                    // TODO: Implement contact form or email functionality
                    console.log('Get Early Access clicked');
                }}
            >
                Get Early Access
            </button>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto animate-fadeInUp delay-600">
                <div className="text-center">
                    <div className="text-3xl mb-2">🚀</div>
                    <h3 className="font-semibold mb-1">Instant Setup</h3>
                    <p className="text-sm text-gray-400">Get started in minutes, not months</p>
                </div>
                <div className="text-center">
                    <div className="text-3xl mb-2">🔒</div>
                    <h3 className="font-semibold mb-1">Enterprise Security</h3>
                    <p className="text-sm text-gray-400">Bank-level encryption & compliance</p>
                </div>
                <div className="text-center">
                    <div className="text-3xl mb-2">📈</div>
                    <h3 className="font-semibold mb-1">Proven Results</h3>
                    <p className="text-sm text-gray-400">3x faster deal closures</p>
                </div>
            </div>
        </section>
    );
};

export default ContactCTA; 