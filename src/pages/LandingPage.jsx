import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import StatsBar from '../components/StatsBar';
import About from '../components/About';
import ProShows from '../components/ProShows';
import Events from '../components/Events';
import Footer from '../components/Footer';

import Countdown from '../components/Countdown';
import CyberWaves from '../components/CyberWaves';
import Timeline from '../components/Timeline';
import GalleryStrips from '../components/GalleryStrips';
import { RevealOnScroll } from '../components/RevealOnScroll';
import FAQ from '../components/FAQ';
import CircuitMap from '../components/CircuitMap';
import HolographicTicket from '../components/HolographicTicket';

function LandingPage() {
    return (
        <div className="bg-athma-black min-h-screen text-chrome selection:bg-athma-orange selection:text-black">
            <Navbar />
            <Hero />
            <RevealOnScroll width="100%">
                <Countdown />
            </RevealOnScroll>
            <StatsBar />
            <About />
            <CyberWaves />
            <GalleryStrips />
            <ProShows />
            <CircuitMap />
            <HolographicTicket />
            <Timeline />
            <Events />
            <FAQ />
            <CyberWaves />
            <Footer />
        </div>
    );
}

export default LandingPage;
