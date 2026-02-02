import React from 'react';
import { Terminal, Shield, Cpu, Zap, Code, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { RevealOnScroll } from './RevealOnScroll';

const AboutFeature = ({ icon: Icon, title, desc }) => (
    <motion.div
        whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
        className="p-6 border border-white/10 bg-black/40 backdrop-blur-sm transition-all duration-300 group"
    >
        <div className="w-12 h-12 bg-white/5 rounded-none flex items-center justify-center mb-4 group-hover:bg-athma-orange group-hover:text-black transition-colors">
            <Icon className="w-6 h-6 text-athma-orange group-hover:text-black" />
        </div>
        <h3 className="text-xl font-glitch font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 font-mono text-xs leading-relaxed">{desc}</p>
    </motion.div>
);

const About = () => {
    return (
        <section id="about" className="py-24 bg-athma-black relative overflow-hidden">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <div>
                        <RevealOnScroll>
                            <h2 className="text-5xl font-black font-glitch text-white mb-6 leading-tight">
                                IGNITING THE <br />
                                <span className="text-athma-orange">CYBER FUTURE</span>
                            </h2>
                        </RevealOnScroll>

                        <RevealOnScroll>
                            <p className="text-gray-300 font-mono mb-8 leading-relaxed border-l-2 border-athma-orange pl-6">
                                ATHMA '26 is not just a tech fest; it is a convergence of digital minds and mechanical souls.
                                We bring together the brightest innovators to redefine the boundaries of engineering.
                            </p>
                        </RevealOnScroll>

                        <RevealOnScroll>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 border border-athma-orange/30 bg-athma-orange/5">
                                    <div className="text-2xl font-bold text-white mb-1">3 DAYS</div>
                                    <div className="text-[10px] font-mono text-athma-orange tracking-widest">NON-STOP ACTION</div>
                                </div>
                                <div className="p-4 border border-athma-orange/30 bg-athma-orange/5">
                                    <div className="text-2xl font-bold text-white mb-1">₹50K+</div>
                                    <div className="text-[10px] font-mono text-athma-orange tracking-widest">PRIZE POOL</div>
                                </div>
                            </div>
                        </RevealOnScroll>
                    </div>

                    {/* Feature Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <AboutFeature
                            icon={Terminal}
                            title="HACKATHONS"
                            desc="24-hour coding sprint to solve real-world problems."
                        />
                        <AboutFeature
                            icon={Cpu}
                            title="ROBOTICS"
                            desc="High-octane battles and precision engineering challenges."
                        />
                        <AboutFeature
                            icon={Zap}
                            title="IDEATHON"
                            desc="Pitch your revolutionary ideas to industry experts."
                        />
                        <AboutFeature
                            icon={Shield}
                            title="CYBER SEC"
                            desc="CTF challenges to test your penetration testing skills."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
