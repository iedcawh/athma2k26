import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Target, Users, Zap, Award } from 'lucide-react';
import { RevealOnScroll } from '../components/RevealOnScroll';
import { FadeInUp } from '../components/FadeInUp';
import { ScaleIn } from '../components/ScaleIn';
import { StaggerReveal, StaggerItem } from '../components/StaggerReveal';

const AboutPage = () => {
    return (
        <div className="bg-athma-black min-h-screen text-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 overflow-hidden border-b border-white/5 flex justify-center">
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <RevealOnScroll>
                        <h1 className="text-5xl md:text-7xl font-glitch font-black mb-6">
                            WHO WE <span className="text-athma-orange">ARE</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed font-mono">
                            ATHMA is the annual techno-cultural phenomenon of AWH Engineering College.
                            For over two decades, we have been the bridge between imagination and reality.
                        </p>
                    </RevealOnScroll>
                </div>
            </section>

            {/* Vision/Mission Grid */}
            <section className="py-16 bg-white/5">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-12">
                        <FadeInUp delay={0.2} className="flex flex-col items-center text-center">
                            <div className="p-3 bg-athma-orange/10 rounded-none mb-4">
                                <Target className="w-8 h-8 text-athma-orange" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold font-glitch mb-2">OUR VISION</h3>
                                <p className="text-gray-400 text-sm leading-relaxed font-mono">
                                    To create a unified platform where technology meets culture, empowering
                                    students to showcase their talents and explore the frontiers of innovation.
                                </p>
                            </div>
                        </FadeInUp>

                        <FadeInUp delay={0.4} className="flex flex-col items-center text-center">
                            <div className="p-3 bg-white/10 rounded-none mb-4">
                                <Users className="w-8 h-8 text-white" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold font-glitch mb-2">OUR COMMUNITY</h3>
                                <p className="text-gray-400 text-sm leading-relaxed font-mono">
                                    A diverse collective of 3500+ students, faculty, and industry leaders.
                                    Athma is built by the students, for the students.
                                </p>
                            </div>
                        </FadeInUp>
                    </div>

                    <ScaleIn delay={0.3} className="relative h-64 md:h-auto overflow-hidden border border-white/10 group grayscale hover:grayscale-0 transition-all">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80')] bg-cover bg-center transition-all duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                        <div className="absolute bottom-4 left-4">
                            <p className="font-mono text-athma-orange text-xs uppercase tracking-widest">ARCHIVE_IMG // 2024</p>
                        </div>
                    </ScaleIn>
                </div>
            </section>

            {/* College Section */}
            <section className="py-20 bg-black relative border-y border-white/5">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <ScaleIn className="relative">
                        <div className="absolute -inset-4 bg-athma-orange/20 blur-xl rounded-full opacity-20" />
                        <img
                            src="/assets/college_campus.jpg"
                            alt="AWH Campus"
                            className="relative z-10 w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 border border-white/10"
                        />
                        <div className="absolute bottom-0 right-0 bg-athma-black border-l border-t border-white/20 p-4 z-20">
                            <p className="font-mono text-athma-orange text-xs tracking-widest">LOC: KUTTIKKATTOOR</p>
                        </div>
                    </ScaleIn>

                    <div className="space-y-8">
                        <FadeInUp>
                            <h2 className="text-4xl font-glitch font-bold mb-4">
                                BASE OF <span className="text-athma-orange">OPERATIONS</span>
                            </h2>
                            <h3 className="text-xl font-mono text-white/80 tracking-wide mb-6">
                                // AWH ENGINEERING COLLEGE
                            </h3>
                            <div className="space-y-4 text-gray-400 font-mono text-sm leading-relaxed border-l-2 border-white/10 pl-6">
                                <p>
                                    Established in 2001, AWH Engineering College stands as a beacon of technical excellence in Calicut.
                                    Affiliated with APJ Abdul Kalam Technological University, we are dedicated to molding the next generation of engineers and innovators.
                                </p>
                                <p>
                                    Our campus is a hub of technological advancement, providing state-of-the-art infrastructure
                                    and a vibrant ecosystem for academic and cultural growth.
                                </p>
                            </div>
                        </FadeInUp>

                        <div className="grid grid-cols-2 gap-4">
                            <FadeInUp delay={0.2} className="p-4 bg-white/5 border border-white/10 hover:border-athma-orange transition-colors">
                                <h4 className="text-athma-orange font-bold text-xl mb-1">2001</h4>
                                <p className="text-[10px] text-gray-500 font-mono tracking-widest">ESTABLISHED</p>
                            </FadeInUp>
                            <FadeInUp delay={0.3} className="p-4 bg-white/5 border border-white/10 hover:border-athma-orange transition-colors">
                                <h4 className="text-athma-orange font-bold text-xl mb-1">ISO</h4>
                                <p className="text-[10px] text-gray-500 font-mono tracking-widest">CERTIFIED 9001:2015</p>
                            </FadeInUp>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team/Committee Section */}
            <section className="py-20 flex justify-center">
                <div className="max-w-7xl mx-auto px-4 w-full">
                    <FadeInUp className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-glitch font-bold mb-4">
                            SYSTEM <span className="text-athma-orange">ARCHITECTS</span>
                        </h2>
                        <p className="text-gray-500 font-mono text-sm tracking-widest">// MEET THE CORE TEAM</p>
                    </FadeInUp>

                    {/* Committee */}
                    <div className="mb-20 text-center">
                        <FadeInUp className="inline-block mb-12">
                            <h3 className="text-2xl font-bold text-white mb-2">EXEC_COMMITTEE</h3>
                            <div className="h-1 w-full bg-athma-orange"></div>
                        </FadeInUp>
                        <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[1, 2, 3, 4].map((i) => (
                                <StaggerItem key={i} className="group relative bg-white/5 border border-white/10 p-6 hover:border-athma-orange transition-all duration-300 text-center">
                                    <div className="aspect-square mb-4 bg-black overflow-hidden relative mx-auto">
                                        <div className="absolute inset-0 bg-athma-orange/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <img src="https://ui-avatars.com/api/?name=Member+Name&background=0D8ABC&color=fff" alt="Member" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-grayscale" />
                                    </div>
                                    <h4 className="text-lg font-bold text-white mb-1">MEMBER_NAME</h4>
                                    <p className="text-athma-orange text-xs font-mono">CHAIRPERSON</p>
                                </StaggerItem>
                            ))}
                        </StaggerReveal>
                    </div>

                    {/* Media & Tech Team Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Media Team */}
                        <div className="text-center">
                            <FadeInUp className="inline-block mb-8">
                                <h3 className="text-2xl font-bold text-white mb-2">MEDIA_UNIT</h3>
                                <div className="h-1 w-full bg-blue-500"></div>
                            </FadeInUp>
                            <StaggerReveal className="grid grid-cols-2 gap-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <StaggerItem key={i} className="bg-white/5 border border-white/10 p-4 flex flex-col items-center text-center space-y-3">
                                        <div className="w-16 h-16 bg-gray-800 rounded-full overflow-hidden">
                                            <img src={`https://ui-avatars.com/api/?name=Media+${i}&background=random`} alt="Media" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white text-sm">MEDIA_LEAD</h4>
                                            <p className="text-gray-500 text-[10px] font-mono">CONTENT_CREATOR</p>
                                        </div>
                                    </StaggerItem>
                                ))}
                            </StaggerReveal>
                        </div>

                        {/* Tech Team */}
                        <div className="text-center">
                            <FadeInUp className="inline-block mb-8">
                                <h3 className="text-2xl font-bold text-white mb-2">TECH_SQUAD</h3>
                                <div className="h-1 w-full bg-green-500"></div>
                            </FadeInUp>
                            <StaggerReveal className="grid grid-cols-2 gap-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <StaggerItem key={i} className="bg-white/5 border border-white/10 p-4 flex flex-col items-center text-center space-y-3">
                                        <div className="w-16 h-16 bg-gray-800 rounded-full overflow-hidden">
                                            <img src={`https://ui-avatars.com/api/?name=Tech+${i}&background=random`} alt="Tech" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white text-sm">TECH_LEAD</h4>
                                            <p className="text-gray-500 text-[10px] font-mono">DEVELOPER</p>
                                        </div>
                                    </StaggerItem>
                                ))}
                            </StaggerReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats/Legacy */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <FadeInUp>
                        <h2 className="text-3xl font-glitch font-bold mb-12">THE LEGACY PROTOCOL</h2>
                    </FadeInUp>
                    <StaggerReveal className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { label: "YEARS ACTIVE", val: "22+", icon: Award },
                            { label: "TOTAL FOOTFALL", val: "50K+", icon: Users },
                            { label: "EVENTS HOSTED", val: "500+", icon: Zap },
                            { label: "PRIZE POOL", val: "₹15L+", icon: Target },
                        ].map((stat, i) => (
                            <StaggerItem
                                key={i}
                                className="p-6 bg-black/40 border border-white/5 hover:border-athma-orange transition-colors"
                            >
                                <stat.icon className="w-8 h-8 text-gray-500 mx-auto mb-4" />
                                <h3 className="text-4xl font-bold text-white mb-2">{stat.val}</h3>
                                <p className="text-athma-orange font-mono text-xs tracking-widest">{stat.label}</p>
                            </StaggerItem>
                        ))}
                    </StaggerReveal>
                </div>
            </section>

            {/* Location Map */}
            <section className="py-20 bg-white/5 border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4">
                    <FadeInUp className="text-center mb-12">
                        <h2 className="text-3xl font-glitch font-bold mb-4">LOCATE THE <span className="text-athma-orange">NEXUS</span></h2>
                        <p className="text-gray-500 font-mono text-sm tracking-widest">// NAVIGATION COORDINATES</p>
                    </FadeInUp>

                    <FadeInUp delay={0.2} className="relative h-[400px] border border-white/10 p-1 bg-black/40">
                        {/* Industrial Corners */}
                        <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-athma-orange z-10" />
                        <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-athma-orange z-10" />
                        <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-athma-orange z-10" />
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-athma-orange z-10" />

                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.0252870060717!2d75.8750189!3d11.259549999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65b53b70fed51%3A0x56083717be9c111a!2sAWH%20Engineering%20College!5e0!3m2!1sen!2sin!4v1769781719476!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: "grayscale(100%) invert(90%) contrast(85%)" }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-full opacity-70 hover:opacity-100 transition-opacity duration-500"
                        ></iframe>
                    </FadeInUp>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AboutPage;
