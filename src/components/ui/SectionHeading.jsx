import React from 'react';
import { motion } from 'framer-motion';

const SectionHeading = ({ children, subtitle, dark = false }) => {
    return (
        <div className="mb-12 text-center">
            {subtitle && (
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="block text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-4"
                >
                    {subtitle}
                </motion.span>
            )}
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`text-4xl md:text-5xl font-display font-black tracking-tight ${dark ? 'text-white' : 'text-primary'}`}
            >
                {children}
            </motion.h2>
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '80px' }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-1 bg-secondary mx-auto mt-6"
            />
        </div>
    );
};

export default SectionHeading;
