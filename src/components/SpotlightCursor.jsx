import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const SpotlightCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Use springs for smooth movement
    const springConfig = { damping: 25, stiffness: 120 };
    const cursorX = useSpring(0, springConfig);
    const cursorY = useSpring(0, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX - 300); // Center the 600px light
            cursorY.set(e.clientY - 300);
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', moveCursor);
        return () => {
            window.removeEventListener('mousemove', moveCursor);
        };
    }, [cursorX, cursorY]);

    // Only render on non-touch devices
    if (typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches) {
        return null;
    }

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden mix-blend-soft-light">
            <motion.div
                className="absolute rounded-full bg-[radial-gradient(circle,rgba(242,78,30,0.15)_0%,rgba(0,0,0,0)_70%)]"
                style={{
                    x: cursorX,
                    y: cursorY,
                    width: 600,
                    height: 600,
                }}
            />
        </div>
    );
};

export default SpotlightCursor;
