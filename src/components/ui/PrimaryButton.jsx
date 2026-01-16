import React from 'react';
import { motion } from 'framer-motion';

const PrimaryButton = ({ children, onClick, width }) => {
    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`
        bg-secondary text-white font-display font-bold uppercase tracking-widest text-xs
        py-4 px-10 rounded-full shadow-lg hover:shadow-secondary/30
        transition-all duration-300 ease-out
        flex items-center justify-center gap-2
      `}
            style={{ width: width || 'auto' }}
            onClick={onClick}
        >
            {children}
        </motion.button>
    );
};

export default PrimaryButton;
