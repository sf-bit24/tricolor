import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Simulate loading progress
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                // Accelerate towards the end
                const increment = prev < 80 ? 8 : 4;
                return Math.min(prev + increment, 100);
            });
        }, 100);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (progress === 100) {
            // Wait a moment, then fade out
            const timeout = setTimeout(() => {
                setIsVisible(false);
                setTimeout(() => onComplete?.(), 600); // After exit animation
            }, 400);
            return () => clearTimeout(timeout);
        }
    }, [progress, onComplete]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="fixed inset-0 z-[9999] bg-charcoal flex flex-col items-center justify-center"
                >
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="mb-12"
                    >
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-white tracking-[0.3em] uppercase">
                            Tricolor
                        </h1>
                        <div className="flex items-center justify-center gap-2 mt-2">
                            <div className="h-[1px] w-8 bg-white/30"></div>
                            <span className="font-mono text-[9px] text-white/50 uppercase tracking-widest">
                                Mountain Change Makers
                            </span>
                            <div className="h-[1px] w-8 bg-white/30"></div>
                        </div>
                    </motion.div>

                    {/* Progress Bar */}
                    <div className="w-48 h-[2px] bg-white/10 overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.1 }}
                            className="h-full bg-white"
                        />
                    </div>

                    {/* Progress Text */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="mt-6 font-mono text-[10px] text-white/40 uppercase tracking-widest"
                    >
                        Loading Experience
                    </motion.p>

                    {/* Decorative Elements */}
                    <div className="absolute bottom-12 left-12 hidden md:block">
                        <p className="font-mono text-[8px] text-white/20 uppercase tracking-widest">
                            System_Init_v2.0
                        </p>
                    </div>
                    <div className="absolute bottom-12 right-12 hidden md:block">
                        <p className="font-mono text-[8px] text-white/20 uppercase tracking-widest">
                            {progress}%
                        </p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Loader;
