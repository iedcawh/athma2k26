import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Terminal as TerminalIcon, X, Minimize2, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Terminal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [output, setOutput] = useState([
        "ATHMA_OS [Version 26.0.1]",
        "(c) 2026 AWH Engineering College. All rights reserved.",
        "Type '/help' for a list of commands."
    ]);
    const navigate = useNavigate();
    const bottomRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        if (isOpen && bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: 'smooth' });
            inputRef.current?.focus();
        }
    }, [output, isOpen]);

    // Keyboard shortcut to toggle terminal (Ctrl + `)
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.ctrlKey && e.key === '`') {
                setIsOpen(prev => !prev);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const handleCommand = (cmd) => {
        const cleanCmd = cmd.trim().toLowerCase();
        let response = [];

        switch (cleanCmd.split(' ')[0]) {
            case '/help':
                response = [
                    "AVAILABLE COMMANDS:",
                    "------------------",
                    "/goto [page]   - Navigate to a page (home, events, workshops, contact)",
                    "/about         - Display system info",
                    "/hack          - Initiate override sequence",
                    "/clear         - Clear terminal screen",
                    "/close         - Minimize terminal"
                ];
                break;
            case '/clear':
                setOutput([]);
                return;
            case '/close':
                setIsOpen(false);
                return;
            case '/goto':
                const page = cleanCmd.split(' ')[1];
                if (!page) {
                    response = ["ERROR: Destination required. Usage: /goto <page>"];
                } else {
                    const routes = {
                        'home': '/',
                        'events': '/events',
                        'workshops': '/workshops',
                        'gallery': '/gallery',
                        'contact': '/contact',
                        'about': '/about-us'
                    };
                    if (routes[page]) {
                        response = [`INITIATING JUMP TO: ${page.toUpperCase()}...`];
                        setTimeout(() => navigate(routes[page]), 1000);
                    } else {
                        response = [`ERROR: Sector '${page}' not found.`];
                    }
                }
                break;
            case '/hack':
                response = [
                    "ACCESSING MAINFRAME...",
                    "BYPASSING FIREWALLS...",
                    "...",
                    "ACCESS DENIED. NICE TRY, HACKER."
                ];
                break;
            case '/about':
                response = [
                    "SYSTEM: ATHMA 26 WEBSITE",
                    "DEVELOPER: AWH ENGINEERING COLLEGE",
                    "STATUS: OPERATIONAL",
                    "VERSION: v1.0.0-beta"
                ];
                break;
            default:
                response = [`ERROR: Command '${cleanCmd}' not recognized. Type '/help' for assistance.`];
        }

        setOutput(prev => [...prev, `> ${cmd}`, ...response]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        handleCommand(input);
        setInput('');
    };

    return (
        <>
            {/* Toggle Button (Hidden if open) */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        onClick={() => setIsOpen(true)}
                        className="fixed bottom-6 left-6 z-50 p-3 bg-black/80 border border-athma-orange/50 text-athma-orange rounded-full hover:bg-athma-orange hover:text-black transition-all duration-300 backdrop-blur-sm shadow-[0_0_15px_rgba(242,78,30,0.3)]"
                        title="Open Terminal (Ctrl + `)"
                    >
                        <TerminalIcon size={24} />
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Terminal Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 50 }}
                        className="fixed bottom-6 left-6 z-50 w-full max-w-lg h-96 bg-black/95 border border-athma-orange/30 rounded-lg shadow-2xl flex flex-col overflow-hidden font-mono text-sm"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/10">
                            <div className="flex items-center gap-2 text-gray-400">
                                <TerminalIcon size={14} />
                                <span className="text-xs uppercase tracking-widest">Administrator: Athma_Console</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                                    <X size={14} />
                                </button>
                            </div>
                        </div>

                        {/* Output Area */}
                        <div className="flex-1 p-4 overflow-y-auto custom-scrollbar space-y-1">
                            {output.map((line, i) => (
                                <div key={i} className={`${line.startsWith('>') ? 'text-gray-400 mt-2' : 'text-athma-orange'}`}>
                                    {line}
                                </div>
                            ))}
                            <div ref={bottomRef} />
                        </div>

                        {/* Input Area */}
                        <form onSubmit={handleSubmit} className="p-2 bg-white/5 border-t border-white/10 flex items-center gap-2">
                            <span className="text-athma-orange font-bold">{'>'}</span>
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                className="flex-1 bg-transparent border-none outline-none text-white placeholder-gray-600 font-mono"
                                placeholder="Enter command..."
                                autoFocus
                            />
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Terminal;
