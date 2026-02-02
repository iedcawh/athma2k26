import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onComplete }) => {
    const [lines, setLines] = useState([]);
    const [progress, setProgress] = useState(0);

    const bootLines = [
        "INITIALIZING CORE SYSTEMS...",
        "LOADING_ASSETS_V2.0...",
        "ESTABLISHING_SECURE_CONNECTION...",
        "DECRYPTING_ARCHIVES...",
        "SYSTEM_READY."
    ];

    useEffect(() => {
        // Text lines sequence
        let lineIndex = 0;
        const lineInterval = setInterval(() => {
            if (lineIndex < bootLines.length) {
                setLines(prev => [...prev, bootLines[lineIndex]]);
                lineIndex++;
            } else {
                clearInterval(lineInterval);
            }
        }, 400);

        // Progress bar sequence
        const progressInterval = setInterval(() => {
            setProgress(prev => {
                const next = prev + Math.floor(Math.random() * 10) + 1;
                if (next >= 100) {
                    clearInterval(progressInterval);
                    return 100;
                }
                return next;
            });
        }, 150);

        // Completion delay
        const timeout = setTimeout(() => {
            onComplete();
        }, 3500);

        return () => {
            clearInterval(lineInterval);
            clearInterval(progressInterval);
            clearTimeout(timeout);
        };
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center font-mono text-athma-orange overflow-hidden"
            exit={{ y: "-100%", transition: { duration: 0.8, ease: "easeInOut" } }}
        >
            <div className="w-full max-w-md px-6">
                <div className="h-32 mb-8 font-bold text-sm md:text-base tracking-wider">
                    {lines.map((line, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="mb-1"
                        >
                            <span className="text-white mr-2">&gt;</span>
                            {line}
                        </motion.div>
                    ))}
                    {lines.length < bootLines.length && (
                        <motion.span
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ repeat: Infinity, duration: 0.5 }}
                            className="inline-block w-3 h-4 bg-athma-orange ml-2 align-middle"
                        />
                    )}
                </div>

                {/* Progress Bar */}
                <div className="relative w-full h-1 bg-white/10 mb-2">
                    <motion.div
                        className="absolute top-0 left-0 h-full bg-athma-orange shadow-[0_0_10px_rgba(242,78,30,0.8)]"
                        style={{ width: `${progress}%` }}
                    />
                </div>
                <div className="flex justify-between text-xs text-gray-500 font-bold tracking-[0.2em]">
                    <span>LOADING</span>
                    <span>{progress}%</span>
                </div>
            </div>

            {/* Background Noise */}
            <div className="absolute inset-0 z-[-1] opacity-10 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </motion.div>
    );
};

export default Preloader;
