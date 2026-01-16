import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Layer images - Beau series (Optimized WebP)
import outerLayer from '../../assets/images/optimized/doudounebeau.webp';
import midLayer from '../../assets/images/optimized/manteaubeau.webp';
import baseLayer from '../../assets/images/optimized/vestebeau.webp';

const layers = [
    {
        id: 'outer',
        label: 'Couches Externes',
        labelEn: 'Outer Layers',
        image: outerLayer,
        title: 'La Doudoune Pro',
        description: 'Conçue avec précision pour protéger des éléments dans les conditions les plus extrêmes. Isolation Ecodown® haute performance.',
    },
    {
        id: 'mid',
        label: 'Couches Intermédiaires',
        labelEn: 'Mid-Layers',
        image: midLayer,
        title: 'Le Manteau Technique',
        description: 'Pensé pour retenir la chaleur corporelle par temps froid. Membrane 20K/20K, coutures thermocollées.',
    },
    {
        id: 'base',
        label: 'Sous-Couches',
        labelEn: 'Base Layers',
        image: baseLayer,
        title: 'La Veste Softshell',
        description: 'Un vêtement respirant et polyvalent. Fibres bi-composants pour un confort optimal.',
    },
];

const LayeringShowcase = () => {
    const [activeLayer, setActiveLayer] = useState(0);

    return (
        <section className="bg-pearl py-32 px-6 md:px-12 overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <span className="font-mono text-[10px] text-charcoal/60 uppercase tracking-[0.4em] block mb-4">
                        System_Layering // Tech_Stack
                    </span>
                    <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tighter text-charcoal">
                        L'Art de la Superposition
                    </h2>
                </motion.div>

                {/* Main Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center min-h-[600px]">

                    {/* Left: Navigation */}
                    <div className="lg:col-span-3 order-2 lg:order-1">
                        <nav className="space-y-6">
                            {layers.map((layer, index) => (
                                <button
                                    key={layer.id}
                                    onClick={() => setActiveLayer(index)}
                                    className={`
                                        block w-full text-left transition-all duration-300
                                        ${activeLayer === index
                                            ? 'opacity-100'
                                            : 'opacity-40 hover:opacity-70'
                                        }
                                    `}
                                >
                                    <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest block mb-1">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <span className={`
                                        text-lg font-display font-medium text-charcoal block
                                        ${activeLayer === index ? 'border-b-2 border-charcoal pb-1' : ''}
                                    `}>
                                        {layer.label}
                                    </span>
                                </button>
                            ))}
                        </nav>
                    </div>

                    {/* Center: Image */}
                    <div className="lg:col-span-5 order-1 lg:order-2 relative h-[500px] md:h-[600px]">
                        <div className="relative w-full h-full flex items-center justify-center">
                            {/* Stacked images with opacity transition */}
                            {layers.map((layer, index) => (
                                <motion.div
                                    key={layer.id}
                                    initial={false}
                                    animate={{
                                        opacity: activeLayer === index ? 1 : 0,
                                        scale: activeLayer === index ? 1 : 0.95,
                                    }}
                                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                    className="absolute inset-0 flex items-center justify-center"
                                >
                                    <img
                                        src={layer.image}
                                        alt={layer.title}
                                        className="max-h-full max-w-full object-contain"
                                    />
                                </motion.div>
                            ))}
                        </div>

                        {/* Layer indicator dots */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                            {layers.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveLayer(index)}
                                    className={`
                                        w-2 h-2 rounded-full transition-all duration-300
                                        ${activeLayer === index
                                            ? 'bg-charcoal w-6'
                                            : 'bg-charcoal/20'
                                        }
                                    `}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right: Description */}
                    <div className="lg:col-span-4 order-3">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeLayer}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <span className="font-mono text-[9px] text-secondary uppercase tracking-widest block mb-4">
                                    {layers[activeLayer].labelEn}
                                </span>
                                <h3 className="text-2xl md:text-3xl font-display font-bold text-charcoal mb-4">
                                    {layers[activeLayer].title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-8">
                                    {layers[activeLayer].description}
                                </p>

                                {/* CTA Buttons */}
                                <div className="space-y-3">
                                    <button className="w-full bg-charcoal text-white py-4 px-6 text-[10px] font-bold uppercase tracking-widest hover:bg-secondary transition-colors">
                                        Découvrir la Collection Homme
                                    </button>
                                    <button className="w-full bg-transparent text-charcoal py-4 px-6 text-[10px] font-bold uppercase tracking-widest border border-charcoal/20 hover:border-charcoal transition-colors">
                                        Découvrir la Collection Femme
                                    </button>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default LayeringShowcase;
