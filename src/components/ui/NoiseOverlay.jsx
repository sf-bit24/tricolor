import React from 'react';

const NoiseOverlay = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.04] mix-blend-overlay">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <filter id="noiseFilter">
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.65"
                        numOctaves="3"
                        stitchTiles="stitch"
                    />
                </filter>
                <rect width="100%" height="100%" filter="url(#noiseFilter)" />
            </svg>
        </div>
    );
};

/* CSS for full coverage if specific SVG fails to tile, but usually SVG pattern is better. 
   Actually, utilizing a simpler base64 noise or CSS url(data:...) is more reliable for 'fixed inset-0'.
   Let's use a robust CSS approach within the component style.
*/

const NoiseOverlayRobust = () => (
    <div
        className="fixed inset-0 z-[100] pointer-events-none opacity-[0.05] mix-blend-overlay"
        style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`
        }}
    />
);

export default NoiseOverlayRobust;
