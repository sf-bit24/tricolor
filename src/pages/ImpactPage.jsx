import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollytellingHero from '../components/impact/ScrollytellingHero';
import TechSpecs from '../components/impact/TechSpecs';
import CircularChart from '../components/impact/CircularChart';
import TeamVision from '../components/impact/TeamVision';
import { useLocation } from 'react-router-dom';

// Page transition variants
const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.4 } }
};

const ImpactPage = () => {
    const { hash } = useLocation();

    // Handle anchor scrolling on mount/update
    useEffect(() => {
        if (hash) {
            // Wait for page transition animation to complete (0.6s) plus buffer
            const timer = setTimeout(() => {
                const element = document.getElementById(hash.replace('#', ''));
                if (element) {
                    const navbarHeight = 80; // Approximate navbar height
                    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                    window.scrollTo({
                        top: elementPosition - navbarHeight,
                        behavior: 'smooth'
                    });
                }
            }, 700); // Wait for page animation to finish

            return () => clearTimeout(timer);
        }
    }, [hash]);

    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <Navbar />
            <main className="bg-white">
                <ScrollytellingHero />
                <TechSpecs />
                <CircularChart />
                <TeamVision />
            </main>
            <Footer />
        </motion.div>
    );
};

export default ImpactPage;
