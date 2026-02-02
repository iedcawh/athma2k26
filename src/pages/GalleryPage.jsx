import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { FadeInUp } from '../components/FadeInUp';
import { ScaleIn } from '../components/ScaleIn';
import { StaggerReveal, StaggerItem } from '../components/StaggerReveal';
import GalleryStrips from '../components/GalleryStrips';

const GalleryPage = () => {
    const galleryItems = [
        { id: 1, type: 'video', src: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80', size: 'large' },
        { id: 2, type: 'image', src: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80', size: 'small' },
        { id: 3, type: 'image', src: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&q=80', size: 'small' },
        { id: 4, type: 'image', src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80', size: 'medium' },
        { id: 5, type: 'image', src: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80', size: 'medium' },
        { id: 6, type: 'image', src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80', size: 'large' },
        { id: 7, type: 'image', src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80', size: 'small' },
        { id: 8, type: 'image', src: 'https://images.unsplash.com/photo-1504384308090-c54be3855091?auto=format&fit=crop&q=80', size: 'medium' }
    ];

    return (
        <div className="bg-athma-black min-h-screen text-white">
            <Navbar />

            <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <FadeInUp className="text-center mb-16 relative z-10">
                    <h1 className="text-5xl md:text-8xl font-glitch font-black mb-6">
                        VISUAL <span className="text-athma-orange">LOGS</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-gray-500 font-mono text-sm tracking-widest">
                        // ACCESSING ARCHIVED FOOTAGE FROM PREVIOUS ITERATIONS
                    </p>
                </FadeInUp>

                {/* Main Marquee Section */}
                <div className="mb-20">
                    <GalleryStrips />
                </div>

                {/* Masonry-style Grid */}
                <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
                    {galleryItems.map((item, i) => (
                        <StaggerItem
                            key={item.id}
                            className={`relative group overflow-hidden border border-white/10 bg-white/5 ${item.size === 'large' ? 'md:col-span-2 md:row-span-2' :
                                    item.size === 'medium' ? 'md:col-span-1 md:row-span-2' :
                                        'md:col-span-1 md:row-span-1'
                                }`}
                        >
                            <ScaleIn delay={i * 0.1} className="w-full h-full">
                                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                    style={{ backgroundImage: `url(${item.src})` }}
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />

                                <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
                                    <p className="text-athma-orange font-mono text-xs tracking-widest">IMG_id_{item.id}</p>
                                </div>
                            </ScaleIn>
                        </StaggerItem>
                    ))}
                </StaggerReveal>
            </div>

            <Footer />
        </div>
    );
};

export default GalleryPage;
