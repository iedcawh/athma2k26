import React from 'react';
import { motion } from 'framer-motion';

const Marquee = ({ children, direction = 1 }) => (
    <div className="flex overflow-hidden relative z-10 border-y border-white/5 bg-black/20 backdrop-blur-sm py-8">
        <motion.div
            className="flex flex-nowrap gap-8"
            animate={{ x: direction === 1 ? ["0%", "-50%"] : ["-50%", "0%"] }}
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
            style={{ minWidth: "max-content" }}
        >
            {children}
            {children} {/* Duplicate for infinite loop */}
        </motion.div>
    </div>
);

const GalleryStrips = () => {
    const images = [
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&q=80"
    ];

    return (
        <section className="py-0 bg-athma-black overflow-hidden relative">
            <h2 className="sr-only">Visual Database</h2>

            {/* Strip 1 */}
            <div className="transform -rotate-2 scale-105 origin-center">
                <Marquee direction={1}>
                    {images.map((src, i) => (
                        <div key={i} className="flex-shrink-0 w-80 h-48 border border-white/10 p-1 bg-white/5 grayscale hover:grayscale-0 transition-all duration-500">
                            <img src={src} alt={`Gallery ${i}`} className="w-full h-full object-cover" />
                        </div>
                    ))}
                </Marquee>
            </div>

            {/* Strip 2 */}
            <div className="transform rotate-2 scale-105 origin-center mt-[-40px] opacity-70">
                <Marquee direction={-1}>
                    {images.reverse().map((src, i) => (
                        <div key={i} className="flex-shrink-0 w-80 h-48 border border-athma-orange/20 p-1 bg-black grayscale hover:grayscale-0 transition-all duration-500">
                            <img src={src} alt={`Gallery ${i}`} className="w-full h-full object-cover" />
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    );
};

export default GalleryStrips;
