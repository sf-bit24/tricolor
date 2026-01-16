import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowDown, Play, Pause } from 'lucide-react';

// Video import (Compressed for web - 23MB vs 164MB original)
import heroVideo from '../assets/videos/tricolor_boucle_web.mp4';

// Product Images (Optimized WebP)
import imgJacketRouge from '../assets/images/optimized/manteaurougeetpantalon.webp';
import imgPantGris from '../assets/images/optimized/pantalongrisbeau.webp';
import imgJacketNoir from '../assets/images/optimized/beaupantalonnooir.webp';
import imgDownLayer from '../assets/images/optimized/dosrougefloumanteau.webp';
import imgJacketMegeve from '../assets/images/optimized/manteaurougemegève.webp';
import imgPantRouge from '../assets/images/optimized/pantalonrouge.webp';

// Timecode-synced messages (in seconds)
const TIMECODE_MESSAGES = [
    { start: 0, end: 7, title: "COLLECTION", subtitle: "2025" },
    { start: 7, end: 15, title: "PERFORMANCE", subtitle: "Engineered for speed" },
    { start: 15, end: 25, title: "FREEDOM", subtitle: "Beyond limits" },
    { start: 25, end: 35, title: "PRECISION", subtitle: "Every detail matters" },
    { start: 35, end: 50, title: "HERITAGE", subtitle: "30 years of mountain expertise" },
    { start: 50, end: 60, title: "TRICOLOR", subtitle: "Mountain Change Makers" },
];

// Page transition variants
const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.8 } },
    exit: { opacity: 0, transition: { duration: 0.4 } }
};

const Collection2025 = () => {
    const videoRef = useRef(null);
    const [currentMessage, setCurrentMessage] = useState(TIMECODE_MESSAGES[0]);
    const [isPlaying, setIsPlaying] = useState(true);
    const [showControls, setShowControls] = useState(false);

    // Timecode sync effect
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handleTimeUpdate = () => {
            const currentTime = video.currentTime;
            const message = TIMECODE_MESSAGES.find(
                m => currentTime >= m.start && currentTime < m.end
            );
            if (message && message.title !== currentMessage.title) {
                setCurrentMessage(message);
            }
        };

        video.addEventListener('timeupdate', handleTimeUpdate);
        return () => video.removeEventListener('timeupdate', handleTimeUpdate);
    }, [currentMessage]);

    const togglePlay = () => {
        const video = videoRef.current;
        if (video.paused) {
            video.play();
            setIsPlaying(true);
        } else {
            video.pause();
            setIsPlaying(false);
        }
    };

    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <Navbar />

            {/* Hero Video Section - Moncler Style */}
            <section
                className="relative w-full h-screen overflow-hidden bg-black"
                onMouseEnter={() => setShowControls(true)}
                onMouseLeave={() => setShowControls(false)}
            >
                {/* Fullscreen Video */}
                <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover"
                >
                    <source src={heroVideo} type="video/mp4" />
                </video>

                {/* Dark Overlay for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-10" />

                {/* Timecode-Synced Content */}
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentMessage.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="max-w-4xl px-6"
                        >
                            <h1 className="text-7xl md:text-9xl font-display font-black tracking-tighter uppercase mb-4 leading-[0.9]">
                                {currentMessage.title}
                            </h1>
                            <p className="text-xl md:text-2xl font-mono uppercase tracking-[0.3em] text-white/70">
                                {currentMessage.subtitle}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Play/Pause Control */}
                <motion.button
                    onClick={togglePlay}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: showControls ? 1 : 0 }}
                    className="absolute bottom-8 right-8 z-30 w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                    {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                </motion.button>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 text-white text-center"
                >
                    <p className="font-mono text-[10px] uppercase tracking-widest mb-2 text-white/50">Scroll</p>
                    <ArrowDown className="w-4 h-4 mx-auto animate-bounce text-white/50" />
                </motion.div>
            </section>

            {/* Product Showcase Grid */}
            <section className="bg-white py-24 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between border-b border-charcoal/10 pb-8">
                        <div>
                            <span className="font-mono text-[10px] text-charcoal/60 uppercase tracking-[0.4em] block mb-2">The Collection</span>
                            <h2 className="text-5xl md:text-7xl font-display font-medium tracking-tighter text-charcoal leading-[0.9]">
                                WINTER<br /><span className="text-secondary">2025</span>
                            </h2>
                        </div>
                        <p className="mt-6 md:mt-0 max-w-sm text-sm text-gray-500 font-mono uppercase tracking-wider">
                            Performance. Style. Responsibility.
                        </p>
                    </div>

                    {/* Product Grid with real images */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                name: 'Jacket Pro Rouge',
                                ref: 'TRI_001_2025',
                                price: '890',
                                img: imgJacketRouge
                            },
                            {
                                name: 'Pant Elite Gris',
                                ref: 'TRI_002_2025',
                                price: '450',
                                img: imgPantGris
                            },
                            {
                                name: 'Jacket System Noir',
                                ref: 'TRI_003_2025',
                                price: '920',
                                img: imgJacketNoir
                            },
                            {
                                name: 'Down Layer',
                                ref: 'TRI_004_2025',
                                price: '680',
                                img: imgDownLayer
                            },
                            {
                                name: 'Jacket Pro Megève',
                                ref: 'TRI_005_2025',
                                price: '890',
                                img: imgJacketMegeve
                            },
                            {
                                name: 'Pant Tech Rouge',
                                ref: 'TRI_006_2025',
                                price: '420',
                                img: imgPantRouge
                            },
                        ].map((product, index) => (
                            <motion.div
                                key={product.ref}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group cursor-pointer"
                            >
                                <div className="aspect-[3/4] bg-pearl mb-4 relative overflow-hidden">
                                    <img
                                        src={product.img}
                                        alt={product.name}
                                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    />
                                    {/* Hover overlay */}
                                    <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors duration-300" />
                                    {/* Quick view label */}
                                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <span className="bg-white text-charcoal px-4 py-2 text-[10px] font-bold uppercase tracking-widest">
                                            Quick View
                                        </span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-display text-lg font-medium uppercase tracking-tight">{product.name}</h3>
                                        <p className="font-mono text-xs text-gray-500 uppercase">{product.ref}</p>
                                    </div>
                                    <span className="font-mono text-sm text-charcoal">€ {product.price}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </motion.div>
    );
};

export default Collection2025;
