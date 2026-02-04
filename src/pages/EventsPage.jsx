import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Search, Filter, Cpu } from 'lucide-react';
import Tilt from '../components/Tilt';
import CyberBorder from '../components/CyberBorder';
import { RevealOnScroll } from '../components/RevealOnScroll';
import MagneticButton from '../components/MagneticButton';
import { FadeInUp } from '../components/FadeInUp';
import { StaggerReveal, StaggerItem } from '../components/StaggerReveal';

import { useLocation } from 'react-router-dom';

const EventsPage = () => {
    const location = useLocation();
    const isWorkshopPage = location.pathname === '/workshops';

    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState(isWorkshopPage ? "WORKSHOPS" : "ALL");

    React.useEffect(() => {
        setSelectedCategory(isWorkshopPage ? "WORKSHOPS" : "ALL");
        setSearchQuery(""); // clear search on page toggle
    }, [isWorkshopPage]);

    const allEvents = Array(12).fill(null).map((_, i) => {
        const category = i % 4 === 0 ? "TECHNICAL" : i % 4 === 1 ? "CULTURAL" : i % 4 === 2 ? "GAMING" : "WORKSHOPS";
        return {
            id: i,
            title: category === "WORKSHOPS" ? `WORKSHOP_${i + 1}` : `MODULE_${i + 1}`,
            category: category,
            prize: category === "WORKSHOPS" ? null : "₹10,000",
            fee: category === "WORKSHOPS" ? "₹500" : "₹200",
            date: "FEB 07",
            time: "10:00 AM",
            mode: "OFFLINE",
            image: "assets/event_placeholder.png"
        };
    });

    const filteredEvents = allEvents.filter(event => {
        const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === "ALL" || event.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const categories = ['ALL', 'TECHNICAL', 'CULTURAL', 'GAMING', 'WORKSHOPS'];

    return (
        <div className="bg-athma-black min-h-screen">
            <Navbar />

            <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <FadeInUp className="mb-12 border-b border-white/10 pb-8">
                    <h1 className="text-5xl md:text-7xl font-glitch font-bold text-white mb-4">
                        EVENTS <span className="text-athma-orange">//</span> DB
                    </h1>
                    <p className="text-gray-500 font-mono text-xs tracking-widest">ACCESSING COMPETITIVE PROTOCOLS...</p>
                </FadeInUp>

                {/* Controls */}
                <FadeInUp delay={0.2} className="flex flex-col md:flex-row justify-between mb-8 gap-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
                        <input
                            type="text"
                            placeholder="SEARCH_MODULE..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="bg-white/5 border border-white/10 pl-10 pr-4 py-3 text-white w-full md:w-64 focus:outline-none focus:border-athma-orange font-mono text-sm uppercase"
                        />
                    </div>

                    <div className="flex gap-2 overflow-x-auto pb-2">
                        {categories.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setSelectedCategory(filter)}
                                className={`px-4 py-2 border text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 ${selectedCategory === filter
                                    ? "bg-athma-orange text-black border-athma-orange shadow-[0_0_10px_rgba(242,78,30,0.5)]"
                                    : "bg-transparent border-white/20 text-gray-400 hover:border-athma-orange hover:text-white"
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </FadeInUp>

                {/* Grid */}
                <div className="min-h-[600px]">
                    {filteredEvents.length > 0 ? (
                        <StaggerReveal key={selectedCategory} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredEvents.map((event, index) => (
                                <StaggerItem key={event.id} className="h-full">
                                    <Tilt options={{ max: 5, scale: 1.02, speed: 400 }} className="h-full">
                                        <div className="h-full min-h-[400px] w-full">
                                            <CyberBorder className="h-full bg-athma-black border border-white/10 flex flex-col">
                                                {/* Image Section */}
                                                <div className="relative h-40 w-full overflow-hidden border-b border-white/10 group">
                                                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-60" style={{ backgroundImage: `url('/assets/event_placeholder.png')` }} />
                                                    <div className="absolute inset-0 bg-black/40" />

                                                    {/* Category Badge */}
                                                    <div className="absolute top-4 left-4">
                                                        <span className="bg-athma-orange text-black text-[10px] font-black font-mono px-2 py-1 uppercase tracking-widest">
                                                            {event.category}
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Content Section */}
                                                <div className="p-6 flex-1 flex flex-col relative bg-[#0f0f0f]">
                                                    <div className="absolute top-0 right-0 w-8 h-8 border-l border-b border-white/10" />

                                                    <h3 className="text-2xl font-black font-glitch text-white mb-6 uppercase tracking-wide leading-tight group-hover:text-athma-orange transition-colors">
                                                        {event.title}
                                                    </h3>

                                                    {/* Details Grid */}
                                                    <div className="grid grid-cols-2 gap-y-4 gap-x-2 mb-8 font-mono text-[10px] text-gray-400">
                                                        <div className="flex flex-col">
                                                            <span className="text-athma-orange/70 mb-1">DATE</span>
                                                            <span className="text-white text-xs">{event.date}</span>
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <span className="text-athma-orange/70 mb-1">REG FEE</span>
                                                            <span className="text-white text-xs">{event.fee}</span>
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <span className="text-athma-orange/70 mb-1">MODE</span>
                                                            <span className="text-white text-xs">{event.mode}</span>
                                                        </div>
                                                        {event.prize && (
                                                            <div className="flex flex-col">
                                                                <span className="text-athma-orange/70 mb-1">PRIZE POOL</span>
                                                                <span className="text-white text-xs font-bold">{event.prize}</span>
                                                            </div>
                                                        )}
                                                    </div>

                                                    {/* Footer Action */}
                                                    <div className="mt-auto">
                                                        <MagneticButton className="w-full relative overflow-hidden group/btn px-4 py-3 bg-white/5 border border-white/10 hover:border-athma-orange transition-all duration-300">
                                                            <div className="absolute inset-0 w-0 bg-athma-orange transition-all duration-[250ms] ease-out group-hover/btn:w-full opacity-10" />
                                                            <div className="relative flex items-center justify-between">
                                                                <span className="font-mono text-xs font-bold text-white tracking-[0.2em] group-hover/btn:text-athma-orange transition-colors">
                                                                    REGISTER NOW
                                                                </span>
                                                                <Cpu className="w-4 h-4 text-white/50 group-hover/btn:text-athma-orange group-hover/btn:animate-spin" />
                                                            </div>
                                                        </MagneticButton>
                                                    </div>
                                                </div>
                                            </CyberBorder>
                                        </div>
                                    </Tilt>
                                </StaggerItem>
                            ))}
                        </StaggerReveal>
                    ) : (
                        <div className="col-span-full text-center py-20 text-gray-500 font-mono">
                            // NO MODULES FOUND MATCHING QUERY
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default EventsPage;
