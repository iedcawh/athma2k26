import React, { useState, useEffect } from 'react';

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/.-_';

const GlitchText = ({ text, interval = 50, className = '' }) => {
    const [displayText, setDisplayText] = useState(text);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        let timer;
        if (isHovering) {
            let iteration = 0;
            timer = setInterval(() => {
                setDisplayText(
                    text
                        .split('')
                        .map((char, index) => {
                            if (index < iteration) {
                                return text[index];
                            }
                            return characters[Math.floor(Math.random() * characters.length)];
                        })
                        .join('')
                );

                if (iteration >= text.length) {
                    clearInterval(timer);
                }

                iteration += 1 / 3;
            }, interval);
        } else {
            setDisplayText(text);
        }

        return () => clearInterval(timer);
    }, [isHovering, text, interval]);

    return (
        <span
            className={`font-mono cursor-default ${className}`}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            {displayText}
        </span>
    );
};

export default GlitchText;
