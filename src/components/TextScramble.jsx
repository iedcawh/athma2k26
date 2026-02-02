import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;':,./<>?";

const TextScramble = ({ text, className = "", hover = false }) => {
    const [display, setDisplay] = useState(text);
    const [isScrambling, setIsScrambling] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const scramble = () => {
        if (isScrambling) return;
        setIsScrambling(true);

        let iterations = 0;
        const interval = setInterval(() => {
            setDisplay(
                text
                    .split("")
                    .map((char, index) => {
                        if (index < iterations) {
                            return text[index];
                        }
                        return characters[Math.floor(Math.random() * characters.length)];
                    })
                    .join("")
            );

            if (iterations >= text.length) {
                clearInterval(interval);
                setIsScrambling(false);
            }

            iterations += 1 / 2; // Speed of decoding
        }, 30);
    };

    useEffect(() => {
        if (isInView && !hover) {
            scramble();
        }
    }, [isInView, hover]);

    return (
        <span
            ref={ref}
            className={className}
            onMouseEnter={hover ? scramble : undefined}
        >
            {display}
        </span>
    );
};

export default TextScramble;
