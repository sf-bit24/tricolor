import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Leaf, Users, Factory, Zap, CheckCircle2 } from 'lucide-react';

/* Reusable Tech Card Component */
const MatrixCard = ({ icon, title, value, label, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.6 }}
        className="bg-white p-8 border-l-2 border-transparent hover:border-secondary transition-all duration-300 group"
    >
        <div className="flex items-start justify-between mb-6">
            <div className="p-3 bg-pearl rounded-full text-charcoal group-hover:bg-charcoal group-hover:text-white transition-colors">
                {icon}
            </div>
            <span className="font-mono text-[9px] text-gray-400 uppercase tracking-widest">{label}</span>
        </div>
        <div>
            <h4 className="font-display text-xl font-bold uppercase tracking-tight text-charcoal mb-2">{title}</h4>
            <p className="font-mono text-xs text-secondary font-bold uppercase tracking-wider">{value}</p>
        </div>
    </motion.div>
);

const EcoSection = () => {
    return (
        <motion.section
            className="bg-pearl py-32 px-6 md:px-12"
            id="eco"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
        >
            <div className="max-w-7xl mx-auto">

                {/* 1. ADN MANIFESTO */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
                    <div>
                        <span className="font-mono text-[10px] text-charcoal/60 uppercase tracking-[0.4em] block mb-6">
                            Brand_DNA // Core_Values
                        </span>
                        <h2 className="text-5xl md:text-6xl font-display font-medium tracking-tighter text-charcoal leading-[0.95] mb-8">
                            PERFORMANCE <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-charcoal to-gray-400">IS RESPONSIBILITY.</span>
                        </h2>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 leading-relaxed text-justify font-light mb-6">
                            <strong className="text-charcoal block mb-2 text-xs uppercase tracking-widest">The Tricolor Standard</strong>
                            Au-delà de l'équipement, nous offrons une stratégie. Notre production locale certifiée ISO 14001 et notre design "Minimalisme Chirurgical" (Label NESXT) ne sont pas des options. De la conception ergonomique à la gestion de fin de vie (Full Social Jacket), chaque fil compte.
                        </p>
                        <div className="flex gap-4">
                            <span className="px-3 py-1 border border-charcoal/20 rounded-full text-[10px] font-mono uppercase">ISO 14001</span>
                            <span className="px-3 py-1 border border-charcoal/20 rounded-full text-[10px] font-mono uppercase">EU Production</span>
                        </div>
                    </div>
                </div>

                {/* 2. THE MATRIX (Production Europe Replacement) */}
                <div className="mb-24">
                    <div className="border-b border-charcoal/10 pb-4 mb-8 flex justify-between items-end">
                        <h3 className="font-display text-3xl font-bold uppercase tracking-tight text-charcoal">Supply Chain Matrix</h3>
                        <span className="font-mono text-[10px] text-gray-400 hidden md:block">DATA_STREAM_04</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
                        <MatrixCard
                            icon={<Factory strokeWidth={1} />}
                            title="Haute Technologie"
                            value="Produits Haute Qualité"
                            label="INPUT"
                            delay={0.1}
                        />
                        <MatrixCard
                            icon={<Shield strokeWidth={1} />}
                            title="Fiabilité"
                            value="Sécurité / Protection"
                            label="OUTPUT"
                            delay={0.2}
                        />
                        <MatrixCard
                            icon={<Clock strokeWidth={1} />}
                            title="Durabilité"
                            value="3 Ans (vs 2 Ans avg)"
                            label="LIFECYCLE"
                            delay={0.3}
                        />
                        <MatrixCard
                            icon={<Leaf strokeWidth={1} />}
                            title="Normes Envir."
                            value="Trajectoire Carbone CDA"
                            label="COMPLIANCE"
                            delay={0.4}
                        />
                    </div>
                </div>

                {/* 3. NESXT LABEL COMPARISON (Green/Blue Frames Replacement) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-charcoal/10">

                    {/* Design Side (Green equivalent) */}
                    <div className="bg-white p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-charcoal/10">
                        <div className="flex items-center gap-4 mb-8">
                            <Zap strokeWidth={1} size={32} className="text-secondary" />
                            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-charcoal">Design Phase</h3>
                        </div>
                        <ul className="space-y-6">
                            <li className="flex gap-4 items-start">
                                <CheckCircle2 size={16} className="text-secondary mt-1 shrink-0" />
                                <span className="text-sm text-gray-500 font-light">
                                    <strong className="text-charcoal block text-xs uppercase tracking-wide mb-1">Conception Simplifiée</strong>
                                    Moins de coutures pour une étanchéité Maximale.
                                </span>
                            </li>
                            <li className="flex gap-4 items-start">
                                <CheckCircle2 size={16} className="text-secondary mt-1 shrink-0" />
                                <span className="text-sm text-gray-500 font-light">
                                    <strong className="text-charcoal block text-xs uppercase tracking-wide mb-1">Matières Nobles</strong>
                                    Résistance supérieure, fibres recyclées bi-composants.
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Industrial Side (Blue equivalent) */}
                    <div className="bg-[#FAFAFA] p-12 lg:p-16">
                        <div className="flex items-center gap-4 mb-8">
                            <Users strokeWidth={1} size={32} className="text-charcoal" />
                            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-charcoal">Industrial Phase</h3>
                        </div>
                        <ul className="space-y-6">
                            <li className="flex gap-4 items-start">
                                <CheckCircle2 size={16} className="text-charcoal mt-1 shrink-0" />
                                <span className="text-sm text-gray-500 font-light">
                                    <strong className="text-charcoal block text-xs uppercase tracking-wide mb-1">Éthique Stricte</strong>
                                    Normes ISO 9001 & 14001. Respect absolu du droit du travail EU.
                                </span>
                            </li>
                            <li className="flex gap-4 items-start">
                                <CheckCircle2 size={16} className="text-charcoal mt-1 shrink-0" />
                                <span className="text-sm text-gray-500 font-light">
                                    <strong className="text-charcoal block text-xs uppercase tracking-wide mb-1">Réalité Économique</strong>
                                    Rotation optimisée (3 ans). "Full Social Jacket" pour la fin de vie.
                                </span>
                            </li>
                        </ul>
                    </div>

                </div>

            </div>
        </motion.section>
    );
};

export default EcoSection;
