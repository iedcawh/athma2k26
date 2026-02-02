import React from 'react';
import { Github, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="relative bg-black border-t border-white/10 pt-16 pb-8 overflow-hidden">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    {/* Brand Column */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <img src="/assets/logo.png" alt="Athma Logo" className="h-12 w-auto" />
                            <div>
                                <h3 className="text-2xl font-glitch font-bold text-white leading-none">
                                    ATHMA
                                </h3>
                                <p className="text-[10px] text-gray-500 font-mono tracking-widest">
                                    AWH ENGINEERING COLLEGE
                                </p>
                            </div>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed font-mono">
                            The national level techno-cultural extravaganza.
                        </p>
                        <div className="flex space-x-4">
                            {/* Social Icons with Glow Effect */}
                            <a href="#" className="p-2 border border-white/10 hover:border-athma-orange hover:text-athma-orange hover:shadow-[0_0_10px_rgba(242,78,30,0.5)] transition-all duration-300">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 border border-white/10 hover:border-athma-orange hover:text-athma-orange hover:shadow-[0_0_10px_rgba(242,78,30,0.5)] transition-all duration-300">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 border border-white/10 hover:border-athma-orange hover:text-athma-orange hover:shadow-[0_0_10px_rgba(242,78,30,0.5)] transition-all duration-300">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-mono font-bold mb-6 tracking-wider text-xs">// NAVIGATION</h4>
                        <ul className="space-y-2">
                            {[
                                { name: 'HOME', path: '/' },
                                { name: 'EVENTS', path: '/events' },
                                { name: 'WORKSHOPS', path: '/workshops' },
                                { name: 'GALLERY', path: '/gallery' },
                                { name: 'ABOUT US', path: '/about-us' },
                                { name: 'CONTACT', path: '/contact' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link to={item.path} className="text-gray-500 hover:text-athma-orange text-sm transition-colors flex items-center group font-mono uppercase">
                                        <span className="w-0 group-hover:w-2 h-[1px] bg-athma-orange mr-0 group-hover:mr-2 transition-all" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-mono font-bold mb-6 tracking-wider text-xs">// TRANSMISSION</h4>
                        <ul className="space-y-4 text-sm text-gray-500 font-mono">
                            <li className="flex items-start">
                                <MapPin className="w-4 h-4 mr-2 mt-1 text-athma-orange" />
                                <span>AWH Engineering College,<br />Kuttikkattoor, Calicut</span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="w-4 h-4 mr-2 text-athma-orange" />
                                <span>+91 9846 123 456</span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="w-4 h-4 mr-2 text-athma-orange" />
                                <span>info@athma26.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter / Updates */}
                    <div>
                        <h4 className="text-white font-mono font-bold mb-6 tracking-wider text-xs">// SYSTEM UPDATES</h4>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="ENTER EMAIL"
                                className="bg-white/5 border border-white/10 text-white px-4 py-2 text-sm w-full focus:outline-none focus:border-athma-orange font-mono uppercase"
                            />
                            <button className="bg-athma-orange text-black px-4 font-bold hover:bg-white transition-colors">
                                &gt;
                            </button>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-mono uppercase">
                    <p>© 2026 ATHMA. ALL SYSTEMS OPERATIONAL.</p>
                    <p className="mt-2 md:mt-0">DESIGNED BY AWH_WEB_TEAM</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
