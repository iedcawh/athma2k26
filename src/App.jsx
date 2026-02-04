import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import LandingPage from './pages/LandingPage';
import EventsPage from './pages/EventsPage';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/ScrollToTop';
import Preloader from './components/Preloader';

import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import NotFoundPage from './pages/NotFoundPage';

import SpotlightCursor from './components/SpotlightCursor';
import ScrollProgress from './components/ScrollProgress';
import Terminal from './components/Terminal';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <ScrollToTop />
          <SpotlightCursor />
          <ScrollProgress />
          <Terminal />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/workshops" element={<EventsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </>
      )}
    </Router>
  );
}

export default App;
