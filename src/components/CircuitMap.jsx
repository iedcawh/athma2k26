import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Zap, Cpu, Wifi, Music } from 'lucide-react';

const locations = [
    { id: 'main_stage', x: 50, y: 40, label: 'MAIN STAGE', icon: Music, color: '#f24e1e' },
    { id: 'hackathon', x: 20, y: 25, label: 'HACKATHON ZONE', icon: Cpu, color: '#00ff9d' },
    { id: 'workshops', x: 80, y: 30, label: 'WORKSHOP HUB', icon: Zap, color: '#ff00ff' },
    { id: 'food', x: 30, y: 70, label: 'RECHARGE STATION', icon: Wifi, color: '#ffff00' },
    { id: 'entry', x: 50, y: 90, label: 'SYSTEM ENTRY', icon: MapPin, color: '#ffffff' },
];

const CircuitMap = () => {
    const [activeNode, setActiveNode] = useState(null);

    return (
        <section className="py-24 bg-athma-black relative overflow-hidden border-t border-white/5">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />

            {/* Cyber Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4 relative z-10 text-center mb-16">
                <h2 className="text-4xl md:text-7xl font-black font-glitch text-white mb-6">
                    VENUE <span className="text-athma-orange">SCHEMATIC</span>
                </h2>
                <p className="text-gray-400 font-mono tracking-[0.3em] text-sm uppercase">
                    // Interactive Event Topography
                </p>
            </div>

            <div className="relative w-full max-w-5xl mx-auto aspect-video bg-black/80 border border-white/5 rounded-2xl overflow-hidden shadow-[0_0_100px_rgba(242,78,30,0.2)] backdrop-blur-2xl group selection:bg-athma-orange/30">

                {/* Tech Pattern Overlay */}
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none mix-blend-overlay" />

                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-athma-orange/50 rounded-tl-xl pointer-events-none" />
                <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-athma-orange/50 rounded-tr-xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-athma-orange/50 rounded-bl-xl pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-athma-orange/50 rounded-br-xl pointer-events-none" />

                {/* Radar Scan Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-athma-orange/5 to-transparent h-[40%] w-full animate-scan pointer-events-none opacity-10" />

                {/* SVG Traces Container */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                        <filter id="glow">
                            <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                        <linearGradient id="traceGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#f24e1e" stopOpacity="0" />
                            <stop offset="50%" stopColor="#f24e1e" stopOpacity="1" />
                            <stop offset="100%" stopColor="#f24e1e" stopOpacity="0" />
                        </linearGradient>
                    </defs>

                    {/* Base Lines (Darker) */}
                    <path d="M 50 90 L 50 40 L 20 25 M 50 40 L 80 30 M 50 70 L 30 70" fill="none" stroke="#1a1a1a" strokeWidth="3" strokeLinecap="round" />
                    <path d="M 50 90 L 50 40 L 20 25 M 50 40 L 80 30 M 50 70 L 30 70" fill="none" stroke="#333" strokeWidth="1" strokeLinecap="round" strokeDasharray="1 3" />

                    {/* Active Animated Lines */}
                    {/* Trunk */}
                    <motion.path
                        d="M 50 90 L 50 40"
                        fill="none"
                        stroke={activeNode ? '#f24e1e' : '#333'}
                        strokeWidth={activeNode ? "2" : "1"}
                        filter={activeNode ? "url(#glow)" : ""}
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, ease: "linear" }}
                    />
                    {/* Hackathon Branch */}
                    <motion.path
                        d="M 50 40 L 20 25"
                        fill="none"
                        stroke={activeNode === 'hackathon' || activeNode === 'main_stage' ? '#00ff9d' : '#333'}
                        strokeWidth={activeNode === 'hackathon' || activeNode === 'main_stage' ? "2" : "1"}
                        filter={activeNode === 'hackathon' || activeNode === 'main_stage' ? "url(#glow)" : ""}
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 0.2, ease: "linear" }}
                    />
                    {/* Workshop Branch */}
                    <motion.path
                        d="M 50 40 L 80 30"
                        fill="none"
                        stroke={activeNode === 'workshops' || activeNode === 'main_stage' ? '#ff00ff' : '#333'}
                        strokeWidth={activeNode === 'workshops' || activeNode === 'main_stage' ? "2" : "1"}
                        filter={activeNode === 'workshops' || activeNode === 'main_stage' ? "url(#glow)" : ""}
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 0.2, ease: "linear" }}
                    />
                    {/* Food Branch */}
                    <motion.path
                        d="M 50 90 L 50 70 L 30 70"
                        fill="none"
                        stroke={activeNode === 'food' || activeNode === 'entry' ? '#ffff00' : '#333'}
                        strokeWidth={activeNode === 'food' || activeNode === 'entry' ? "2" : "1"}
                        filter={activeNode === 'food' || activeNode === 'entry' ? "url(#glow)" : ""}
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.8, ease: "linear" }}
                    />
                </svg>

                {/* Nodes */}
                {locations.map((loc) => (
                    <div
                        key={loc.id}
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20"
                        style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                        onMouseEnter={() => setActiveNode(loc.id)}
                        onMouseLeave={() => setActiveNode(null)}
                        onClick={() => setActiveNode(activeNode === loc.id ? null : loc.id)}
                    >
                        <div className="relative group">
                            {/* Pulse Core */}
                            <div className={`absolute inset-0 bg-${loc.color} rounded-full blur-md opacity-20 group-hover:opacity-60 transition-opacity duration-300`} />

                            {/* Hexagon Shape */}
                            <motion.div
                                animate={{
                                    scale: activeNode === loc.id ? 1.2 : 1,
                                    borderColor: activeNode === loc.id ? loc.color : 'rgba(255,255,255,0.1)',
                                    backgroundColor: activeNode === loc.id ? 'rgba(0,0,0,0.9)' : 'rgba(0,0,0,0.6)'
                                }}
                                className={`w-12 h-12 md:w-16 md:h-16 backdrop-blur-md border border-white/10 flex items-center justify-center relative z-20 transition-all duration-300`}
                                style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                            >
                                <loc.icon className="w-5 h-5 md:w-6 md:h-6" color={activeNode === loc.id ? loc.color : 'rgba(255,255,255,0.5)'} />
                            </motion.div>

                            {/* Rotating Ring */}
                            {activeNode === loc.id && (
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                    className="absolute -inset-3 border border-dotted border-white/20 rounded-full z-10 w-[140%] h-[140%] left-[-20%] top-[-20%]"
                                />
                            )}

                            {/* Label */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{
                                    opacity: activeNode === loc.id ? 1 : 0.5,
                                    x: activeNode === loc.id ? 30 : 25,
                                    scale: activeNode === loc.id ? 1 : 0.9,
                                    display: activeNode === loc.id ? 'block' : 'none'
                                }}
                                className={`absolute left-full top-1/2 -translate-y-1/2 ml-2 whitespace-nowrap z-30`}
                            >
                                <div className={`flex items-center space-x-2`}>
                                    <div className={`h-[1px] w-4 ${activeNode === loc.id ? 'bg-athma-orange' : 'bg-white/20'}`} />
                                    <div className={`text-xs md:text-sm font-bold tracking-widest font-mono ${activeNode === loc.id ? 'text-white shadow-glow' : 'text-gray-500'}`}>
                                        {loc.label}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                ))}

                {/* HUD Elements */}
                <div className="absolute top-6 left-6 font-mono text-xs text-athma-orange/60 border-l-2 border-athma-orange/40 pl-3">
                    <div className="font-bold text-white">SYSTEM_VIEW_V.3.1</div>
                    <div className="mt-1">GRID: ACTIVE</div>
                    <div>SECURE: TRUE</div>
                </div>

                <div className="absolute bottom-6 right-6 font-mono text-xs text-right">
                    <div className="flex items-center justify-end gap-2 text-gray-400">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        LIVE FEEDS
                    </div>
                    <div className="text-athma-orange/40 mt-1 tracking-widest">COORDS: 45.21.99</div>
                </div>

            </div>
        </section>
    );
};

export default CircuitMap;
