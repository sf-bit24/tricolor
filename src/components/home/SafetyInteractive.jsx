import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import productImg from '../../assets/images/optimized/manteaurougeetpantalon.webp'; // Full silhouette view

const Hotspot = ({ x, y, title, text }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="absolute z-10"
            style={{ top: `${y}%`, left: `${x}%` }}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <motion.div
                className="relative w-8 h-8 flex items-center justify-center cursor-pointer"
                whileHover={{ scale: 1.2 }}
            >
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-secondary border-2 border-white"></span>
            </motion.div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="absolute left-1/2 -translate-x-1/2 mt-4 w-64 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-xl border border-white/20 z-50 text-center"
                    >
                        <h4 className="font-bold text-primary mb-1 text-sm uppercase tracking-wide">{title}</h4>
                        <p className="text-xs text-gray-600 leading-relaxed">{text}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const SafetyInteractive = () => {
    return (
        <section className="py-24 bg-white overflow-hidden" id="la-tech">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                <div className="relative flex justify-center lg:justify-end">
                    {/* Image Container */}
                    <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                        <img src={productImg} alt="Technical Coat" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/10"></div>

                        {/* Hotspots */}
                        <Hotspot x={30} y={25} title="Capuche 3D" text="Compatible casque avec vision périphérique préservée." />
                        <Hotspot x={55} y={45} title="Zip Étanche YKK" text="Double curseur & rabat tempête magnétique." />
                        <Hotspot x={40} y={70} title="Renforts Kevlar" text="Zones de frottement renforcées pour une durabilité x3." />
                    </div>
                </div>

                <div className="lg:pl-12">
                    <SectionHeading subtitle="Anatomie Pro" dark={false}>
                        PROTECTION<br />INTELLIGENTE.
                    </SectionHeading>
                    <p className="text-lg text-gray-500 mb-8 max-w-md">
                        Chaque détail a été pensé pour les 8h de service quotidien. Pas de superflu, juste de l'essentiel renforcé.
                    </p>
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-center gap-4">
                            <span className="w-12 h-1 bg-secondary"></span>
                            <span className="font-bold text-dark">Membrane 3 couches 20k/20k</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="w-12 h-1 bg-gray-300"></span>
                            <span className="font-bold text-dark">Doublure Ecodown® 100% Recyclée</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="w-12 h-1 bg-gray-300"></span>
                            <span className="font-bold text-dark">Coutures Thermocollées</span>
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    );
};

export default SafetyInteractive;
