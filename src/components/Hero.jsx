import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import '../glitch.css';
import MagneticButton from './MagneticButton';
import TextScramble from './TextScramble';

const Hero = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Parallax transform values
    const moveX = useTransform(x, [0, window.innerWidth], [-20, 20]);
    const moveY = useTransform(y, [0, window.innerHeight], [-20, 20]);

    const moveXReverse = useTransform(x, [0, window.innerWidth], [20, -20]);
    const moveYReverse = useTransform(y, [0, window.innerHeight], [20, -20]);

    const handleMouseMove = (e) => {
        x.set(e.clientX);
        y.set(e.clientY);
        setMousePosition({ x: e.clientX, y: e.clientY }); // Update state for spotlight
    };

    return (
        <div
            className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-athma-black"
            onMouseMove={handleMouseMove}
        >
            {/* Dynamic Background Image - Changed to a cool Cyberpunk City */}
            {/* Dynamic Background Image - New Generated Asset */}
            <motion.div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-60 pointer-events-none"
                style={{
                    backgroundImage: "url('/hero-new.png')",
                    x: isMobile ? 0 : moveXReverse,
                    y: isMobile ? 0 : moveYReverse,
                    scale: 1.1
                }}
            />

            {/* Flashlight Reveal Effect */}
            <motion.div
                className="hidden md:block absolute inset-0 z-1 pointer-events-none bg-black"
                style={{
                    scale: 1.1,
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, transparent 10%, rgba(0,0,0,0.95) 90%)`
                }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-athma-black via-athma-black/60 to-transparent pointer-events-none" />
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-athma-black/40 via-transparent to-athma-black/90 pointer-events-none" />

            {/* Decorative Grid */}
            <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />

            {/* Hero Content */}
            <motion.div
                className="relative z-10 text-center px-4 max-w-6xl mx-auto mt-0 md:mt-16"
                style={{ x: isMobile ? 0 : moveX, y: isMobile ? 0 : moveY }}
            >
                <div className="mb-4 md:mb-6">
                    <span className="inline-block px-3 py-1 md:px-4 border border-athma-orange/70 text-athma-orange font-mono text-xs md:text-sm tracking-[0.3em] md:tracking-[0.5em] backdrop-blur-md bg-black/50 shadow-[0_0_15px_rgba(242,78,30,0.3)]">
                        EST. 2002 // SYSTEM_READY
                    </span>
                </div>

                {/* ... content ... */}
                {/* (I am targeting the wrapping divs, so I will replace the start block) */}


                {/* Main Title - Clean & Bold */}
                <div className="relative mb-6 md:mb-8">
                    <h1 className="text-6xl sm:text-7xl md:text-9xl lg:text-[12rem] font-glitch font-black leading-none text-white tracking-tighter drop-shadow-2xl relative z-10">
                        ATHMA
                    </h1>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, type: "spring" }}
                        className="text-4xl sm:text-5xl md:text-7xl lg:text-[8rem] font-mono font-bold text-athma-orange tracking-widest -mt-2 md:-mt-8 lg:-mt-12 relative z-20"
                    >
                        20<span className="text-white">26</span>
                    </motion.div>
                </div>

                <h2 className="text-sm sm:text-lg md:text-xl font-bold font-mono text-gray-300 tracking-[0.1em] md:tracking-[0.2em] mt-4 md:mt-8 mb-8 md:mb-12 uppercase flex justify-center items-center gap-2 md:gap-4 text-center">
                    <span className="w-8 md:w-12 h-[1px] bg-athma-orange hidden sm:block"></span>
                    <span className="block">AWH Engineering College</span>
                    <span className="w-8 md:w-12 h-[1px] bg-athma-orange hidden sm:block"></span>
                </h2>

                {/* Interactive Button */}
                <motion.button
                    onClick={() => window.location.href = '/events'}
                    whileHover={isMobile ? {} : {
                        scale: 1.05,
                        letterSpacing: "0.2em",
                        x: [0, -2, 2, -2, 2, 0], // Vibration / Shake effect
                        transition: { duration: 0.4 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative inline-flex items-center justify-center px-8 py-3 md:px-12 md:py-5 font-bold text-black transition-all duration-300 bg-athma-orange font-glitch clip-path-polygon overflow-hidden"
                    style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)' }}
                >
                    {/* Button Shine Effect */}
                    <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12 group-hover:left-[100%] transition-all duration-500 ease-in-out" />

                    <span className="relative flex items-center tracking-widest text-sm md:text-lg">
                        INITIATE LAUNCH
                    </span>
                </motion.button>
            </motion.div>

            {/* Floating Elements / Debris */}
            <motion.div
                className="absolute top-1/4 left-4 md:left-10 w-16 h-16 md:w-24 md:h-24 border border-athma-orange/20 rounded-full"
                style={{ x: isMobile ? 0 : moveXReverse, y: isMobile ? 0 : moveY }}
            />
            <motion.div
                className="absolute bottom-1/4 right-4 md:right-10 w-20 h-20 md:w-32 md:h-32 border-2 border-dashed border-white/10 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />

        </div>
    );
};

export default Hero;
