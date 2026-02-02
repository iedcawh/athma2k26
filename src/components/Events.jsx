import React from 'react';
import { Calendar, MapPin, ChevronRight, CircuitBoard } from 'lucide-react';
import { motion } from 'framer-motion';
import CyberBorder from './CyberBorder';
import Tilt from './Tilt';

import { Link } from 'react-router-dom';

const EventCard = ({ title, category, date, image }) => {
    return (
        <Tilt options={{ max: 15, scale: 1.02, speed: 400, glitch: true }} className="h-full">
            <motion.div
                className="group relative w-full h-80 bg-gray-900 overflow-hidden transition-colors duration-300"
            >
                <CyberBorder className="w-full h-full">
                    {/* Background Image */}
                    <div className="absolute inset-0 bg-black">
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-between">
                        {/* Top Tag */}
                        <div className="flex justify-between items-start">
                            <span className="px-3 py-1 bg-white text-black text-xs font-mono font-bold uppercase tracking-wider">
                                {category}
                            </span>
                            <CircuitBoard className="text-white/20 w-6 h-6 group-hover:text-athma-orange group-hover:animate-spin transition-colors" />
                        </div>

                        {/* Bottom Info */}
                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className="text-3xl font-black text-white font-glitch mb-2 group-hover:text-athma-orange transition-colors uppercase">
                                {title}
                            </h3>

                            <div className="space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                                <div className="flex items-center text-sm text-gray-400 font-mono">
                                    <Calendar className="w-4 h-4 mr-2" />
                                    <span>{date}</span>
                                </div>

                                <Link to="/events" className="flex items-center text-white text-sm font-bold mt-4 hover:translate-x-2 transition-transform uppercase tracking-wider">
                                    <span className="text-athma-orange mr-2">&gt;</span> REGISTER
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Hover Line */}
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-athma-orange group-hover:w-full transition-all duration-500" />
                </CyberBorder>
            </motion.div>
        </Tilt>
    );
};

const Events = () => {
    const events = [
        { title: "ROBO WAR", category: "COMBAT", date: "FEB 07 // 1000 HRS" },
        { title: "HACKATHON", category: "CODE", date: "FEB 07 // 0900 HRS" },
        { title: "AI WORKSHOP", category: "INTEL", date: "FEB 07 // 1400 HRS" },
        { title: "TREASURE HUNT", category: "QUEST", date: "FEB 07 // 1130 HRS" },
    ];

    return (
        <section id="events" className="py-20 bg-athma-black relative border-b border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-black font-glitch text-white mb-2">
                            SECTOR <span className="text-athma-orange">EVENTS</span>
                        </h2>
                        <p className="text-gray-500 font-mono text-xs tracking-widest">
                            DEPLOYING COMPETITIVE MODULES...
                        </p>
                    </div>
                    <Link to="/events" className="hidden md:flex items-center px-6 py-3 border border-white/20 hover:bg-white hover:text-black transition-all font-mono text-xs font-bold uppercase tracking-widest group">
                        VIEW ALL MODULES <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {events.map((event, index) => (
                        <EventCard key={index} {...event} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Events;
