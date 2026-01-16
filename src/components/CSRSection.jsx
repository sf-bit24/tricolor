import React from 'react';
import { motion } from 'framer-motion';
import { Recycle } from 'lucide-react';
import image from '../assets/images/lifestyle_2.jfif';

const CSRSection = () => {
    return (
        <motion.section
            id="engagement"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="bg-charcoal py-32 px-6 md:px-12"
        >
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="font-mono text-[10px] text-secondary uppercase tracking-[0.3em] block mb-4">
                        Économie Circulaire
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-white tracking-tight mb-8">
                        Full Social<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Jacket</span>
                    </h2>
                    <div className="space-y-4 text-gray-400 text-sm leading-relaxed mb-8">
                        <p>
                            L'obsolescence ne doit pas être une fatalité. Tricolor s'engage pour la fin de vie de vos équipements.
                        </p>
                        <p>
                            Grâce à notre partenariat avec la fondation <strong className="text-white">Full Social Jacket</strong>, nous récupérons les tenues post-saison
                            pour leur donner une seconde vie solidaire auprès de populations dans le besoin, ou pour les recycler
                            en nouvelles fibres via notre filière certifiée.
                        </p>
                    </div>
                    <div className="inline-flex items-center gap-3 px-4 py-2 border border-white/20 rounded-full">
                        <Recycle size={16} className="text-secondary" />
                        <span className="font-mono text-[10px] text-white uppercase tracking-widest">
                            100% de la production revalorisée
                        </span>
                    </div>
                </motion.div>

                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="relative overflow-hidden"
                >
                    <div className="aspect-[4/5] overflow-hidden">
                        <img
                            src={image}
                            alt="Engagement Social"
                            className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700"
                            loading="lazy"
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-60"></div>

                    {/* Floating Label */}
                    <div className="absolute bottom-6 left-6 right-6">
                        <p className="font-mono text-[9px] text-white/50 uppercase tracking-widest">
                            Fondation_FSJ // Partenariat_2024
                        </p>
                    </div>
                </motion.div>

            </div>
        </motion.section>
    );
};

export default CSRSection;
