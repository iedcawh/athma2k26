import React from 'react';
import { Music, Mic2 } from 'lucide-react';
import Tilt from './Tilt';

const ProShows = () => {
    return (
        <section className="py-20 bg-athma-black relative border-b border-white/5">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-7xl font-black font-glitch text-white mb-4">
                        AFTER <span className="text-athma-orange">HRS</span>
                    </h2>
                    <p className="text-gray-500 font-mono tracking-[0.3em] text-xs">
                        // SONIC EXPERIENCES DETECTED
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 [perspective:1000px]">
                    {/* DJ Night Card */}
                    <Tilt className="group relative h-96 overflow-hidden border border-white/10 transition-all duration-500 rounded-xl hover:border-athma-orange hover:shadow-[0_0_30px_rgba(242,78,30,0.4)]">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1571266028243-371695063a76?auto=format&fit=crop&q=80')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100" style={{ transform: "translateZ(-50px)" }} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />

                        {/* Scanline Flash */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out skew-x-12" />

                        <div className="absolute bottom-0 left-0 p-8 transform translate-z-20" style={{ transform: "translateZ(40px)" }}>
                            <div className="flex items-center space-x-2 text-white mb-2">
                                <span className="px-2 py-0.5 bg-athma-orange text-black font-bold font-mono text-xs">DAY 01</span>
                            </div>
                            <h3 className="text-4xl font-glitch font-bold text-white mb-2 shadow-black drop-shadow-lg group-hover:text-athma-orange transition-colors">SUNBURN</h3>
                            <p className="text-gray-300 font-mono text-sm">FEATURING DJ T-NUKE</p>
                        </div>
                    </Tilt>

                    {/* Band Night Card */}
                    <Tilt className="group relative h-96 overflow-hidden border border-white/10 transition-all duration-500 rounded-xl hover:border-athma-orange hover:shadow-[0_0_30px_rgba(242,78,30,0.4)]">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501612780327-45045538702b?auto=format&fit=crop&q=80')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100" style={{ transform: "translateZ(-50px)" }} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />

                        {/* Scanline Flash */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out skew-x-12" />

                        <div className="absolute bottom-0 left-0 p-8 transform translate-z-20" style={{ transform: "translateZ(40px)" }}>
                            <div className="flex items-center space-x-2 text-white mb-2">
                                <span className="px-2 py-0.5 bg-white text-black font-bold font-mono text-xs">DAY 02</span>
                            </div>
                            <h3 className="text-4xl font-glitch font-bold text-white mb-2 shadow-black drop-shadow-lg group-hover:text-athma-orange transition-colors">AVIAL LIVE</h3>
                            <p className="text-gray-300 font-mono text-sm">ALTERNATIVE ROCK</p>
                        </div>
                    </Tilt>
                </div>
            </div>
        </section>
    );
};

export default ProShows;
