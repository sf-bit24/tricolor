import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

// Images (Optimized WebP)
import imgEurope from '../../assets/images/optimized/clusazmanteau.webp';
import imgRecycle from '../../assets/images/feature_ecodown.jfif'; // Small file, no WebP available
import imgNesxt from '../../assets/images/optimized/pantalongrisbeau.webp';
import imgSocial from '../../assets/images/optimized/dosrougefloumanteau.webp';

const BentoCard = ({ title, subtitle, size, image, id, tag }) => {
    return (
        <motion.div
            className={`${size} relative group overflow-hidden bg-charcoal h-[400px] md:h-[500px] cursor-pointer`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
        >
            {/* Background Image / Zoom Effect */}
            < motion.div
                className="absolute inset-0 w-full h-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <img src={image} alt={title} className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
            </motion.div>

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>

            {/* Floating UI - Top Right ID */}
            <div className="absolute top-6 right-6 z-10 font-mono text-[9px] text-white/50 tracking-widest uppercase backdrop-blur-sm bg-black/10 px-2 py-1 rounded-full border border-white/5 group-hover:border-white/20 transition-colors">
                ({id})
            </div>

            {/* Floating UI - Bottom Left Label */}
            <div className="absolute bottom-8 left-8 z-10 max-w-[80%]">
                <div className="overflow-hidden mb-2">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <span className="block font-mono text-[9px] text-secondary uppercase tracking-[0.2em] mb-2">{tag}</span>
                        <h3 className="text-2xl md:text-3xl font-display font-medium text-white uppercase tracking-tight leading-none mb-1">{title}</h3>
                    </motion.div>
                </div>
                <p className="text-xs text-gray-300 font-light leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 hidden md:block">
                    {subtitle}
                </p>
            </div>

            {/* Interaction Icon */}
            <div className="absolute bottom-8 right-8 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white backdrop-blur-md">
                    <ArrowUpRight size={16} />
                </div>
            </div>
        </motion.div>
    );
};

const BentoGridExperience = () => {
    return (
        <section className="bg-white py-0 md:py-20 px-0 md:px-12" id="solutions">
            <div className="max-w-[1600px] mx-auto">
                {/* Header Editorial */}
                <div className="mb-16 ptr-12 px-6 md:px-0 flex flex-col md:flex-row md:items-end justify-between">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-display font-medium text-charcoal tracking-tighter uppercase">
                            The System
                        </h2>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4">
                    <BentoCard
                        size="md:col-span-2"
                        title="Manufacturing"
                        subtitle="Production relocalisée au Portugal. Unité certifiée ISO 14001."
                        tag="Europe_V.2"
                        image={imgEurope}
                        id="01"
                    />
                    <BentoCard
                        size="md:col-span-1"
                        title="Recyclé"
                        subtitle="Fibres bi-composants végétales."
                        tag="Eco_Tech"
                        image={imgRecycle}
                        id="02"
                    />
                    <BentoCard
                        size="md:col-span-1"
                        title="NESXT"
                        subtitle="Minimalisme chirurgical."
                        tag="Innovation"
                        image={imgNesxt}
                        id="03"
                    />
                    <BentoCard
                        size="md:col-span-2"
                        title="Full Social"
                        subtitle="Gestion fin de vie via notre fondation."
                        tag="Circularity"
                        image={imgSocial}
                        id="04"
                    />
                </div>
            </div>
        </section>
    );
};

export default BentoGridExperience;
