import React from 'react';

const CyberWaves = () => {
    return (
        <div className="w-full h-[1px] bg-white/10 my-4 relative overflow-hidden">
            <div className="absolute inset-0 w-1/3 h-full bg-gradient-to-r from-transparent via-athma-orange to-transparent animate-scan" style={{ animationDuration: '3s' }} />
        </div>
    );
};

export default CyberWaves;
