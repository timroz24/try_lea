import React from 'react';
import Logo from '../components/Logo';
import Hero from '../components/Hero';
import ChatDemo from '../components/ChatDemo';
import ComingSoon from '../components/ComingSoon';
import ContactCTA from '../components/ContactCTA';

function App() {
    return (
        <div className="bg-black text-white font-sans antialiased">
            <Logo />
            <Hero />
            <ChatDemo />
            <ComingSoon />
            <ContactCTA />
        </div>
    );
}

export default App; 