import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { RevealOnScroll } from '../components/RevealOnScroll';
import { FadeInUp } from '../components/FadeInUp';
import { ScaleIn } from '../components/ScaleIn';

const ContactPage = () => {
    return (
        <div className="bg-athma-black min-h-screen flex flex-col">
            <Navbar />

            <div className="flex-grow flex items-center justify-center p-4 relative z-10 pt-32">
                <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Info Side */}
                    <div className="flex flex-col justify-center">
                        <FadeInUp>
                            <h1 className="text-5xl font-glitch font-black text-white mb-6">
                                ESTABLISH <br />
                                <span className="text-athma-orange">CONNECTION</span>
                            </h1>
                            <p className="text-gray-400 mb-8 leading-relaxed font-mono text-sm">
                                Have a query regarding the protocols? Need assistance with the registration mainframe?
                                Our operators are online 24/7.
                            </p>

                            <div className="space-y-6">
                                <FadeInUp delay={0.2} className="border-l-4 border-athma-orange pl-4">
                                    <h3 className="text-white font-bold font-mono">GENERAL ENQUIRY</h3>
                                    <p className="text-athma-orange font-mono">athma@awh.ac.in</p>
                                </FadeInUp>
                                <FadeInUp delay={0.3} className="border-l-4 border-white pl-4">
                                    <h3 className="text-white font-bold font-mono">TECHNICAL HEAD</h3>
                                    <p className="text-athma-orange font-mono">+91 9846 000 000</p>
                                </FadeInUp>
                            </div>
                        </FadeInUp>
                    </div>

                    {/* Form Side */}
                    <ScaleIn delay={0.2} className="bg-white/5 border border-white/10 p-8 relative">
                        {/* Industrial Corner */}
                        <div className="absolute top-0 right-0 p-1">
                            <div className="w-4 h-4 bg-athma-orange" />
                        </div>
                        <form className="space-y-6">
                            <div>
                                <label className="block text-xs font-mono text-gray-500 mb-2 uppercase tracking-widest">User ID</label>
                                <input type="text" className="w-full bg-black/40 border border-white/20 p-3 text-white focus:border-athma-orange focus:outline-none transition-colors font-mono" />
                            </div>
                            <div>
                                <label className="block text-xs font-mono text-gray-500 mb-2 uppercase tracking-widest">Comm Channel</label>
                                <input type="email" className="w-full bg-black/40 border border-white/20 p-3 text-white focus:border-athma-orange focus:outline-none transition-colors font-mono" />
                            </div>
                            <div>
                                <label className="block text-xs font-mono text-gray-500 mb-2 uppercase tracking-widest">Data Packet</label>
                                <textarea rows="4" className="w-full bg-black/40 border border-white/20 p-3 text-white focus:border-athma-orange focus:outline-none transition-colors font-mono"></textarea>
                            </div>
                            <button className="w-full py-4 bg-athma-orange text-black font-bold font-mono uppercase tracking-widest hover:bg-white transition-all">
                                Transmit Data
                            </button>
                        </form>
                    </ScaleIn>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ContactPage;
