import React from 'react';
import { motion } from 'framer-motion';
import { Recycle, HeartHandshake, Globe } from 'lucide-react';

const CircularChart = () => {
    return (
        <section id="engagement" className="min-h-screen flex flex-col justify-center py-20 bg-charcoal text-white relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>

            <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="text-center mb-20"
                >
                    <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/50 mb-4 block">The Circle</span>
                    <h2 className="text-5xl md:text-8xl font-display font-medium tracking-tighter uppercase">
                        Full Social<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/20">Jacket</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Step 1 */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="bg-white/5 backdrop-blur-sm p-8 border border-white/10 rounded-sm relative"
                    >
                        <div className="absolute top-4 right-4 text-white/20 font-display text-4xl font-bold">01</div>
                        <Recycle className="mb-6 text-white" size={40} strokeWidth={1} />
                        <h3 className="text-xl font-bold uppercase tracking-widest mb-4">Conception</h3>
                        <p className="text-sm text-gray-400 leading-relaxed font-light">
                            Design en mono-matière pour faciliter le recyclage futur. Intégration stricte de la <strong>Charte Éthique</strong> dès le sourcing.
                        </p>
                    </motion.div>

                    {/* Step 2 */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="bg-white/5 backdrop-blur-sm p-8 border border-white/10 rounded-sm relative"
                    >
                        <div className="absolute top-4 right-4 text-white/20 font-display text-4xl font-bold">02</div>
                        <Globe className="mb-6 text-white" size={40} strokeWidth={1} />
                        <h3 className="text-xl font-bold uppercase tracking-widest mb-4">Usage & Care</h3>
                        <p className="text-sm text-gray-400 leading-relaxed font-light">
                            Service de réparation prolongeant la vie du produit. Certification <strong>Utopies</strong> de l'empreinte environnementale durant l'usage.
                        </p>
                    </motion.div>

                    {/* Step 3 */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="bg-white/5 backdrop-blur-sm p-8 border border-white/10 rounded-sm relative"
                    >
                        <div className="absolute top-4 right-4 text-white/20 font-display text-4xl font-bold">03</div>
                        <HeartHandshake className="mb-6 text-white" size={40} strokeWidth={1} />
                        <h3 className="text-xl font-bold uppercase tracking-widest mb-4">Foundation</h3>
                        <p className="text-sm text-gray-400 leading-relaxed font-light">
                            Redistribution intégrale. Vos anciennes tenues équipent les populations vulnérables. La boucle est bouclée.
                        </p>
                    </motion.div>
                </div>

                <div className="mt-24 text-center">
                    <div className="inline-flex items-center gap-4 px-8 py-4 border border-white/20 rounded-full bg-white/5">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        <span className="font-mono text-xs uppercase tracking-widest">Certified Tricolor x Utopies</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CircularChart;
