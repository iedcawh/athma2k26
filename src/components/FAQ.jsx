import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Terminal } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

const FAQItem = ({ question, answer, index }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-white/10 last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
            >
                <div className="flex items-center">
                    <span className="font-mono text-athma-orange mr-4 text-xs opacity-50 group-hover:opacity-100">
                        {String(index + 1).padStart(2, '0')} //
                    </span>
                    <span className="text-lg md:text-xl font-bold font-mono text-white group-hover:text-athma-orange transition-colors">
                        {question}
                    </span>
                </div>
                <div className={`p-2 rounded-full border border-white/20 transition-all ${isOpen ? 'bg-athma-orange border-athma-orange text-black' : 'text-gray-400 group-hover:border-athma-orange group-hover:text-white'}`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="pb-6 pl-10 pr-4">
                            <div className="p-4 bg-white/5 border-l-2 border-athma-orange font-mono text-gray-300 text-sm leading-relaxed">
                                <span className="block text-athma-orange text-xs mb-2 opacity-70">&gt; RESPONCE_PACKET:</span>
                                {answer}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = () => {
    const faqs = [
        {
            question: "WHO CAN PARTICIPATE?",
            answer: "The event is open to all engineering and tech enthusiasts from registered colleges. Valid ID cards are mandatory for entry."
        },
        {
            question: "IS ACCOMMODATION PROVIDED?",
            answer: "Yes, accommodation is active for 3 days. Registration for accommodation must be done separately via the portal."
        },
        {
            question: "HOW DO I REGISTER?",
            answer: "Click the 'INITIATE LAUNCH' button or navigate to specific events to register directly through our secure gateway."
        },
        {
            question: "CASH PRIZES & CERTIFICATES?",
            answer: "Winners will receive instant cash prizes. All participants will receive industry-recognized participation certificates."
        }
    ];

    return (
        <section className="py-24 bg-athma-black relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <RevealOnScroll>
                    <div className="flex items-end gap-3 mb-10">
                        <Terminal className="text-athma-orange w-8 h-8 md:w-10 md:h-10" />
                        <h2 className="text-4xl md:text-5xl font-black font-tech text-white leading-none">
                            SYSTEM <span className="text-athma-orange">QUERY</span>
                        </h2>
                    </div>
                </RevealOnScroll>

                <div className="border-t border-white/20">
                    {faqs.map((faq, index) => (
                        <RevealOnScroll key={index} width="100%">
                            <FAQItem index={index} {...faq} />
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
