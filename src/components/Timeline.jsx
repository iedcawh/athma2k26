import React from 'react';
import { motion } from 'framer-motion';
import { RevealOnScroll } from './RevealOnScroll';

const TimelineItem = ({ time, title, desc, side }) => (
    <div className={`flex w-full ${side === 'left' ? 'flex-row-reverse' : ''} mb-8`}>
        {/* Content Box */}
        <div className={`w-5/12 ${side === 'left' ? 'text-right' : 'text-left'}`}>
            <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-zinc-900/50 border border-white/10 p-4 relative group hover:border-athma-orange transition-colors"
            >
                <div className="text-athma-orange font-mono text-xs mb-1 font-bold">{time}</div>
                <h3 className="text-xl font-glitch font-bold text-white mb-2">{title}</h3>
                <p className="text-gray-500 font-mono text-xs">{desc}</p>

                {/* Connector Line */}
                <div className={`absolute top-1/2 w-4 h-[1px] bg-athma-orange ${side === 'left' ? '-right-4' : '-left-4'}`} />
            </motion.div>
        </div>

        {/* Center Line Area */}
        <div className="w-2/12 flex justify-center relative">
            <div className="h-full w-[1px] bg-white/10 absolute top-0" />
            <div className="w-4 h-4 bg-black border border-athma-orange transform rotate-45 z-10 mt-6" />
        </div>

        {/* Empty Space */}
        <div className="w-5/12" />
    </div>
);

const Timeline = () => {
    return (
        <section className="py-20 bg-athma-black relative overflow-hidden">
            <div className="max-w-5xl mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <RevealOnScroll>
                        <h2 className="text-5xl md:text-7xl font-black font-tech text-white mb-4 uppercase tracking-tighter">
                            EXECUTION <span className="text-athma-orange">PLAN</span>
                        </h2>
                        <div className="flex items-center justify-center gap-4 text-athma-orange/60 font-mono text-xs tracking-[0.5em]">
                            <span>//</span>
                            <span>MAPPING_SEQUENCE</span>
                            <span>//</span>
                        </div>
                    </RevealOnScroll>
                </div>

                <div className="flex flex-col">
                    <TimelineItem
                        time="FEB 07 // 09:00"
                        title="INAUGURATION"
                        desc="System Initialization at Main Auditorium."
                        side="right"
                    />
                    <TimelineItem
                        time="FEB 07 // 10:30"
                        title="HACKATHON BEGINS"
                        desc="24-Hour coding marathon commences."
                        side="left"
                    />
                    <TimelineItem
                        time="FEB 07 // 11:30"
                        title="ROBO WARS"
                        desc="Combat robotics arena opens."
                        side="right"
                    />
                    <TimelineItem
                        time="FEB 07 // 14:00"
                        title="WORKSHOPS"
                        desc="AI & ML hands-on sessions."
                        side="left"
                    />
                    <TimelineItem
                        time="FEB 07 // 18:00"
                        title="PRO SHOW"
                        desc="Cultural extravaganza night."
                        side="right"
                    />
                </div>
            </div>
        </section>
    );
};

export default Timeline;
