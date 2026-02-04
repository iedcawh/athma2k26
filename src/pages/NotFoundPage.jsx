import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NotFoundPage = () => {
    return (
        <div className="bg-athma-black min-h-screen flex flex-col text-white">
            <Navbar />
            <div className="flex-grow flex items-center justify-center relative overflow-hidden pt-20">
                {/* Background Glitch Elements */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                <div className="absolute top-1/4 left-0 w-full h-[1px] bg-athma-orange/50 animate-pulse" />
                <div className="absolute bottom-1/4 right-0 w-full h-[1px] bg-white/50 animate-pulse" />

                <div className="text-center z-10 p-4">
                    <h1 className="text-9xl font-black font-glitch text-athma-orange mb-4">
                        404
                    </h1>
                    <h2 className="text-2xl md:text-4xl font-mono text-white mb-8 tracking-widest uppercase">
                        System Failure // Signal Lost
                    </h2>
                    <p className="text-gray-400 mb-8 max-w-md mx-auto font-mono text-sm border-l-2 border-athma-orange pl-4 text-left">
                        {'>'} ERROR: The requested module could not be located.<br />
                        {'>'} DIAGNOSTIC: Path corrupted or protocol unimplemented.<br />
                        {'>'} SUGGESTION: Return to base coordinates.
                    </p>

                    <Link
                        to="/"
                        className="inline-block px-8 py-3 bg-white/10 border border-athma-orange text-athma-orange font-bold font-mono hover:bg-athma-orange hover:text-black transition-all uppercase tracking-widest"
                    >
                        Reboot System
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default NotFoundPage;
