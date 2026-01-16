import React from 'react';
import { motion } from 'framer-motion';

const TeamVision = () => {
    return (
        <section id="team" className="min-h-screen flex flex-col justify-center py-20 bg-off-white text-charcoal">
            <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full flex flex-col md:flex-row gap-16 md:gap-32">

                {/* Visual Side - Press Review Wall Idea */}
                <div className="w-full md:w-1/2 relative min-h-[500px]">
                    <div className="absolute top-0 left-0 w-3/4 h-3/4 bg-gray-200 overflow-hidden grayscale contrast-125">
                        {/* Placeholder for Press Review Image */}
                        <div className="w-full h-full flex items-center justify-center bg-gray-300">
                            <span className="font-display text-4xl opacity-10">PRESS_REVIEW_IMG</span>
                        </div>
                    </div>
                    {/* Overlay Text Box */}
                    <div className="absolute bottom-8 right-8 bg-charcoal text-white p-8 md:p-12 max-w-sm shadow-2xl">
                        <h3 className="font-display text-3xl mb-4">"Une révolution silencieuse."</h3>
                        <p className="font-mono text-xs text-gray-400 uppercase tracking-widest">— Revue de Presse 2025</p>
                    </div>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                    <span className="font-mono text-xs uppercase tracking-[0.3em] text-gray-500 mb-8 block">The Collective</span>

                    <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-8">
                        30 ANS D'OBSERVATION.<br />
                        <span className="text-gray-400">5 ANS DE TRANSFORMATION.</span>
                    </h2>

                    <p className="text-lg font-light leading-relaxed text-gray-800 mb-8">
                        Nous ne sommes pas des créateurs de mode. Nous sommes des ingénieurs de la montagne.
                        Notre équipe a compilé trois décennies de retours terrain pour bâtir <strong>Tricolor</strong>.
                    </p>

                    <div className="grid grid-cols-2 gap-8 border-t border-charcoal/10 pt-8 mt-4">
                        <div>
                            <span className="block text-4xl font-display font-bold mb-2">15+</span>
                            <span className="font-mono text-[10px] uppercase tracking-wider text-gray-500">Stations Partenaires</span>
                        </div>
                        <div>
                            <span className="block text-4xl font-display font-bold mb-2">100%</span>
                            <span className="font-mono text-[10px] uppercase tracking-wider text-gray-500">Indépendance</span>
                        </div>
                    </div>

                    <div className="mt-12 flex gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Partner Logos Placeholders inferred from docs */}
                        <div className="h-8 border border-charcoal/30 px-4 flex items-center text-xs font-bold">PEFTRUST</div>
                        <div className="h-8 border border-charcoal/30 px-4 flex items-center text-xs font-bold">UTOPIES</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamVision;
