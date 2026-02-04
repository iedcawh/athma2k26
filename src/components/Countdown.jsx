import React, { useState, useEffect } from 'react';

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const targetDate = new Date('2026-02-07T09:00:00').getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((difference % (1000 * 60)) / 1000),
                });
            } else {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const TimeUnit = ({ value, label }) => (
        <div className="flex flex-col items-center mx-2 md:mx-6 group cursor-default">
            <div className="relative overflow-hidden">
                <div className="text-4xl md:text-6xl font-black font-glitch text-white bg-white/5 border-l-4 border-athma-orange/50 p-4 min-w-[80px] md:min-w-[110px] text-center backdrop-blur-sm group-hover:border-athma-orange transition-colors">
                    {String(value).padStart(2, '0')}
                </div>
                {/* Scanline overlay */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none" />
            </div>
            <span className="mt-3 text-gray-500 font-mono text-xs md:text-sm tracking-[0.3em] group-hover:text-athma-orange transition-colors">{label}</span>
        </div>
    );

    return (
        <div className="w-full py-16 flex flex-col items-center justify-center relative z-20 bg-athma-black border-y border-white/5">
            <h3 className="text-athma-orange/80 font-mono text-xs mb-8 tracking-[0.5em] uppercase flex items-center">
                <span className="w-8 h-[1px] bg-athma-orange mr-4"></span>
                Mission Timer
                <span className="w-8 h-[1px] bg-athma-orange ml-4"></span>
            </h3>
            <div className="flex justify-center flex-wrap">
                <TimeUnit value={timeLeft.days} label="DAYS" />
                <TimeUnit value={timeLeft.hours} label="HOURS" />
                <TimeUnit value={timeLeft.minutes} label="MINS" />
                <TimeUnit value={timeLeft.seconds} label="SECS" />
            </div>
        </div>
    );
};

export default Countdown;
