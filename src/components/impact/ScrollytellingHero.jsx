import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Video asset (Compressed for web - 2.75MB vs 295MB original)
import saintGervaisVideo from '../../assets/videos/saint_gervais_web.mp4';

// Narrative chapters with scroll-based triggers
const chapters = [
    { start: 0, end: 0.2, text: "La souveraineté textile au sommet.", subtext: "Alpes Françaises, 4000m" },
    { start: 0.2, end: 0.5, text: "Une armure éco-conçue pour les pros.", subtext: "STBMA Collection 2026" },
    { start: 0.5, end: 0.8, text: "100% bouteilles recyclées. 100% Performance.", subtext: "Isolant Ecodown by Thermore" },
    { start: 0.8, end: 1, text: "Tricolor : Relocaliser l'avenir.", subtext: "Fabrication Européenne" },
];

const ScrollytellingHero = () => {
    const containerRef = useRef(null);
    const videoRef = useRef(null);

    // Track scroll progress within this section (0 to 1)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Sync video currentTime with scroll progress
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const unsubscribe = scrollYProgress.on("change", (progress) => {
            if (video.duration) {
                video.currentTime = progress * video.duration;
            }
        });

        return () => unsubscribe();
    }, [scrollYProgress]);

    return (
        <section ref={containerRef} className="relative h-[400vh]"> {/* 4x viewport height for scroll room */}
            {/* Sticky Video Container */}
            <div className="sticky top-0 h-screen w-full overflow-hidden bg-charcoal">
                {/* Video Background */}
                <video
                    ref={videoRef}
                    src={saintGervaisVideo}
                    muted
                    playsInline
                    preload="auto"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Text Overlays */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                    {chapters.map((chapter, index) => (
                        <ChapterText
                            key={index}
                            chapter={chapter}
                            scrollProgress={scrollYProgress}
                        />
                    ))}
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center"
                >
                    <p className="font-mono text-[9px] text-white/50 uppercase tracking-widest mb-2">Scroll to Explore</p>
                    <div className="w-[1px] h-8 bg-white/30 mx-auto animate-pulse"></div>
                </motion.div>
            </div>
        </section>
    );
};

// Individual Chapter Text Component
const ChapterText = ({ chapter, scrollProgress }) => {
    // Map scroll progress to opacity: fade in at chapter.start, fade out at chapter.end
    const opacity = useTransform(
        scrollProgress,
        [
            chapter.start,
            chapter.start + 0.05, // Fade in duration
            chapter.end - 0.05,   // Start fade out
            chapter.end
        ],
        [0, 1, 1, 0]
    );

    // Slight vertical movement for parallax feel
    const y = useTransform(
        scrollProgress,
        [chapter.start, chapter.end],
        [30, -30]
    );

    return (
        <motion.div
            style={{ opacity, y }}
            className="absolute flex flex-col items-center"
        >
            <span className="font-mono text-[10px] text-secondary uppercase tracking-[0.3em] mb-4">
                {chapter.subtext}
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white tracking-tight leading-[1.1] max-w-4xl">
                {chapter.text}
            </h2>
        </motion.div>
    );
};

export default ScrollytellingHero;
