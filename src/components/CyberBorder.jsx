import React from 'react';

const CyberBorder = ({ children, className = "" }) => {
    return (
        <div className={`relative group ${className}`}>
            {/* Top Left Corner */}
            <div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-l-2 border-t-2 border-white/30 group-hover:border-athma-orange group-hover:w-full group-hover:h-full transition-all duration-500 z-20 pointer-events-none" />

            {/* Bottom Right Corner */}
            <div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-r-2 border-b-2 border-white/30 group-hover:border-athma-orange group-hover:w-full group-hover:h-full transition-all duration-500 z-20 pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 h-full">
                {children}
            </div>
        </div>
    );
};

export default CyberBorder;
