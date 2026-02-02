import React, { useEffect, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

const StatsBar = () => {
    const stats = [
        { label: "PRIZE POOL", value: 50, suffix: "K+" },
        { label: "PARTICIPANTS", value: 500, suffix: "+" },
        { label: "EVENTS", value: 20, suffix: "+" },
        { label: "WORKSHOPS", value: 5, suffix: "+" },
    ];

    return (
        <div className="bg-athma-black border-y border-white/10 py-10 relative overflow-hidden">
            {/* Background noise */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <Counter key={index} {...stat} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const Counter = ({ label, value, suffix }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = parseInt(value.toString().replace(/,/g, ''));
        if (start === end) return;

        let totalDuration = 2000;
        let incrementTime = (totalDuration / end) * 0.5; // rudimentary easing

        let timer = setInterval(() => {
            start += Math.ceil(end / 100);
            if (start > end) start = end;
            setCount(start);
            if (start === end) clearInterval(timer);
        }, 20);

        return () => clearInterval(timer);
    }, [value]);

    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            className="text-center group cursor-default"
        >
            <div className="text-4xl md:text-5xl font-black font-glitch text-white group-hover:text-athma-orange transition-colors duration-300">
                {count}{suffix}
            </div>
            <div className="text-xs font-mono text-gray-500 mt-2 tracking-[0.2em] group-hover:text-white transition-colors">
                {label}
            </div>
        </motion.div>
    );
};

export default StatsBar;
