import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import BentoGridExperience from '../components/home/BentoGridExperience';
import LayeringShowcase from '../components/home/LayeringShowcase';
import SafetyInteractive from '../components/home/SafetyInteractive';
import EcoSection from '../components/home/EcoSection';
import CSRSection from '../components/CSRSection';
import ArchiveGallery from '../components/home/ArchiveGallery';
import ContactForm from '../components/ContactForm';

// Page transition variants
const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.4 } }
};

const Home = () => {
    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <Navbar />
            <main>
                <Hero />
                <BentoGridExperience />
                <LayeringShowcase />
                <EcoSection />
                <CSRSection />
                <ArchiveGallery />
                <ContactForm />
            </main>
            <Footer />
        </motion.div>
    );
};

export default Home;
