import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import GlitchText from './GlitchText';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'HOME', href: '/' },
        { name: 'EVENTS', href: '/events' },
        { name: 'WORKSHOPS', href: '/workshops' },
        { name: 'GALLERY', href: '/gallery' },
        { name: 'ABOUT US', href: '/about-us' },
        { name: 'CONTACT', href: '/contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-athma-black/90 border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0 flex items-center cursor-pointer group hover:scale-105 transition-transform">
                        <img src="/assets/logo.png" alt="Athma Logo" className="h-10 w-auto mr-3 group-hover:drop-shadow-[0_0_8px_rgba(242,78,30,0.8)] transition-all" />
                        <div className="flex flex-col">
                            <span className="text-xl font-black font-glitch tracking-widest text-white">ATHMA</span>
                            <span className="text-[10px] font-mono tracking-[0.3em] text-athma-orange">2026</span>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className="text-gray-400 hover:text-athma-orange transition-all duration-300 px-3 py-2 text-sm font-bold font-mono tracking-wider hover:drop-shadow-[0_0_8px_rgba(242,78,30,0.8)] hover:-translate-y-1 block"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white hover:text-athma-orange p-2 transition-colors"
                        >
                            {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-athma-black border-b border-athma-orange/30 overflow-hidden"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className="text-gray-300 hover:text-athma-orange block px-3 py-4 rounded-md text-base font-bold font-mono border-l-2 border-transparent hover:border-athma-orange hover:bg-white/5 transition-all"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
