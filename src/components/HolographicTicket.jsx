import React from 'react';
import { motion } from 'framer-motion';
import { QrCode, Ticket } from 'lucide-react';
import Tilt from './Tilt';

const HolographicTicket = () => {
    return (
        <section className="py-24 bg-athma-black relative overflow-hidden flex items-center justify-center">
            {/* Background Atmosphere */}
            <div className="absolute inset-0 bg-gradient-to-t from-athma-black via-athma-black/90 to-athma-orange/5 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-athma-orange/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 w-full max-w-2xl px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-6xl font-black font-glitch text-white mb-4">
                        SECURE YOUR <span className="text-athma-orange">ACCESS</span>
                    </h2>
                    <p className="text-gray-400 font-mono tracking-[0.3em] text-xs">
                        // LIMITED SLOTS AVAILABLE
                    </p>
                </div>

                <Tilt className="relative mx-auto w-full max-w-md aspect-[1.8/1] rounded-2xl group cursor-pointer perspective-1000">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-white/10 shadow-2xl overflow-hidden backdrop-blur-xl">

                        {/* Holographic Sheen */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20"
                            style={{ mixBlendMode: 'overlay' }} />

                        {/* Ticket Content */}
                        <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                            {/* Header */}
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-2xl font-bold text-white font-glitch">ATHMA 26</h3>
                                    <p className="text-athma-orange text-xs font-mono tracking-widest">ALL ACCESS PASS</p>
                                </div>
                                <div className="text-right">
                                    <div className="text-white/50 text-[10px] font-mono">ID: #8392-AX</div>
                                    <div className="text-white/50 text-[10px] font-mono">LEVEL 99</div>
                                </div>
                            </div>

                            {/* Middle Details */}
                            <div className="flex items-center space-x-4 my-2">
                                <div className="h-12 w-12 bg-white p-1 rounded">
                                    <QrCode className="w-full h-full text-black" />
                                </div>
                                <div className="space-y-1">
                                    <div className="text-xs text-gray-400">DATE</div>
                                    <div className="text-sm text-white font-bold">MARCH 14-15, 2026</div>
                                    <div className="text-xs text-gray-400 mt-1">VENUE</div>
                                    <div className="text-sm text-white font-bold">AWH ENGINEERING COLLEGE</div>
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="flex justify-between items-end border-t border-white/10 pt-4">
                                <div>
                                    <div className="text-[10px] text-athma-orange mb-1">STATUS</div>
                                    <div className="text-sm text-white font-bold animate-pulse">RESERVATION OPEN</div>
                                </div>
                                <button className="bg-athma-orange text-black px-6 py-2 rounded-full font-bold text-sm hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(242,78,30,0.4)] flex items-center gap-2">
                                    <Ticket size={16} />
                                    GET PASS
                                </button>
                            </div>
                        </div>

                        {/* Decorative Background Patterns */}
                        <div className="absolute right-0 top-0 w-32 h-32 bg-athma-orange/10 rounded-bl-full transform translate-x-8 -translate-y-8 blur-xl" />
                        <div className="absolute left-0 bottom-0 w-24 h-24 bg-blue-500/10 rounded-tr-full transform -translate-x-8 translate-y-8 blur-xl" />
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light" />

                    </div>
                </Tilt>

            </div>
        </section>
    );
};

export default HolographicTicket;
