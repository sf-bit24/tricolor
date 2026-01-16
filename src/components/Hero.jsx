import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroBg from '../assets/images/optimized/manteaurougeflou.webp';
import { ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { MANIFESTO_CONTENT } from '../data/manifesto';

const Hero = () => {
    const navigate = useNavigate();
    const { scrollY } = useScroll();
    const fillOpacity = useTransform(scrollY, [0, 300], [0, 1]);

    const { hero } = MANIFESTO_CONTENT;

    return (
        <section className="relative h-screen w-full overflow-hidden bg-charcoal">
            {/* Background w/ Noir Overlay per Guidelines */}
            <div className="absolute inset-0 z-0 select-none">
                <img
                    src={heroBg}
                    alt="Ski Pro Background - Flou Artistique"
                    className="w-full h-full object-cover scale-105"
                />
                {/* Overlay Black/30 per Guidelines */}
                <div className="absolute inset-0 bg-black/30 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-black/40"></div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 w-full h-full flex flex-col justify-center items-center text-center px-4 md:px-0">

                {/* Top Label - Mono / Technical */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="flex items-center gap-4 mb-8 md:mb-12"
                >
                    <div className="h-[1px] w-8 bg-white/50"></div>
                    <span className="font-mono text-[10px] md:text-xs text-white uppercase tracking-[0.3em]">
                        {hero.overtitle}
                    </span>
                    <div className="h-[1px] w-8 bg-white/50"></div>
                </motion.div>

                {/* Brutalist Typography - Inter Display - Scroll Reveal */}
                <div className="mb-10 max-w-6xl relative h-[120px] md:h-[200px] flex items-center justify-center">
                    {/* Outline Layer (Base) */}
                    <h1 className="absolute text-6xl md:text-8xl lg:text-9xl font-display font-black text-transparent tracking-tighter leading-[0.85] select-none z-10 interact-none uppercase"
                        style={{ WebkitTextStroke: "1px rgba(255,255,255,0.5)" }}>
                        {hero.title}
                    </h1>

                    {/* Fill Layer (Reveal) */}
                    <motion.h1
                        style={{ opacity: fillOpacity }}
                        className="absolute text-6xl md:text-8xl lg:text-9xl font-display font-black text-white tracking-tighter leading-[0.85] select-none z-20 uppercase"
                    >
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50">
                            {hero.title}
                        </span>
                    </motion.h1>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="text-xs md:text-sm font-mono text-gray-300 max-w-md mx-auto mb-16 uppercase tracking-widest leading-relaxed"
                >
                    {hero.description}
                </motion.p>

                {/* Buttons - Interaction Layer */}
                <div className="flex flex-col md:flex-row gap-4 justify-center items-center w-full">
                    <motion.button
                        whileHover={{ scale: 1.02, backgroundColor: "#F5F5F7", color: "#000" }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => navigate('/impact')}
                        className="bg-white/90 backdrop-blur-sm text-charcoal px-10 py-5 text-[10px] font-bold tracking-[0.2em] uppercase w-64 border border-transparent hover:border-white transition-all duration-300"
                    >
                        {hero.primaryCTA}
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)", borderColor: "#fff" }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => document.getElementById('solutions').scrollIntoView({ behavior: 'smooth' })}
                        className="bg-transparent text-white px-10 py-5 text-[10px] font-bold tracking-[0.2em] uppercase w-64 border border-white/20 transition-all duration-300"
                    >
                        {hero.secondaryCTA}
                    </motion.button>
                </div>

            </div>

            {/* Tech Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 2 }}
                className="absolute bottom-12 right-12 text-right hidden md:block"
            >
                <p className="font-mono text-[9px] text-white/40 mb-2">SCROLL_Y</p>
                <ChevronDown className="text-white/60 w-4 h-4 ml-auto animate-bounce" />
            </motion.div>
        </section>
    );
};

export default Hero;
