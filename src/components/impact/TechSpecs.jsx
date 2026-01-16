import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Thermometer, Wind } from 'lucide-react'; // Using Lucide placeholders for now

const TechSpecs = () => {
    return (
        <section id="technology" className="min-h-screen flex flex-col justify-center py-20 bg-pearl text-charcoal">
            <div className="max-w-7xl mx-auto px-6 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 border-b border-charcoal/10 pb-8"
                >
                    <span className="font-mono text-xs uppercase tracking-[0.3em] text-gray-500 mb-2 block">The Object</span>
                    <h2 className="text-5xl md:text-7xl font-display font-medium tracking-tighter uppercase sm:leading-[0.9]">
                        LABEL NESXT<span className="align-super text-lg md:text-2xl ml-2">©</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Visual / Schematic Placeholder */}
                    <div className="relative aspect-[4/5] bg-white border border-charcoal/5 p-8 flex items-center justify-center">
                        {/* This would be the SVG/Image of the Jacket Schematic */}
                        <div className="text-center opacity-30">
                            <Layers size={120} strokeWidth={0.5} className="mx-auto mb-4" />
                            <p className="font-mono text-xs uppercase tracking-widest">Schematic_View: Veste_Ski_v3</p>
                        </div>

                        {/* Hotspots overlay */}
                        <div className="absolute top-1/4 left-1/4 w-32 pb-2 border-b border-charcoal/20 text-right">
                            <span className="font-mono text-[9px] uppercase block">Recycled Fibre</span>
                            <span className="font-bold text-lg">68%</span>
                        </div>
                        <div className="absolute bottom-1/3 right-1/4 w-32 pb-2 border-b border-charcoal/20 text-left">
                            <span className="font-mono text-[9px] uppercase block">Thermal Shield</span>
                            <span className="font-bold text-lg">EN342</span>
                        </div>
                    </div>

                    {/* Specs List */}
                    <div className="space-y-12">
                        <div>
                            <h3 className="font-mono text-xs uppercase tracking-widest text-secondary mb-4">[Carbon_Footprint_Analysis]</h3>
                            <p className="text-2xl font-display font-light leading-snug">
                                "Une réduction drastique de l'impact sans compromis sur la protection thermique."
                            </p>
                            <p className="mt-4 text-sm text-gray-500 font-mono">Verified by Peftrust (European Product Environmental Footprint)</p>
                        </div>

                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <h4 className="font-bold text-4xl mb-2">3 Ans</h4>
                                <p className="text-xs font-mono uppercase tracking-wider text-gray-500">Durabilité Moyenne <br />(vs 2 ans standard)</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-4xl mb-2">-40%</h4>
                                <p className="text-xs font-mono uppercase tracking-wider text-gray-500">Empreinte CO2 <br />(Cycle de vie complet)</p>
                            </div>
                        </div>

                        <ul className="space-y-4 pt-8 border-t border-charcoal/10">
                            <li className="flex items-center justify-between text-sm">
                                <span className="font-medium">Membrane</span>
                                <span className="font-mono text-gray-500">Bio-sourced 20K/20K</span>
                            </li>
                            <li className="flex items-center justify-between text-sm">
                                <span className="font-medium">Assembly</span>
                                <span className="font-mono text-gray-500">Laser Cut / Heat Sealed</span>
                            </li>
                            <li className="flex items-center justify-between text-sm">
                                <span className="font-medium">Origin</span>
                                <span className="font-mono text-gray-500">Made in Portugal (ISO 14001)</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechSpecs;
