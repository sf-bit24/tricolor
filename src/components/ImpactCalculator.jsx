import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './ui/SectionHeading';

const ImpactCalculator = () => {
    const [staffCount, setStaffCount] = useState(50);
    const standardCost6Y = staffCount * 400 * 3;
    const tricolorCost6Y = staffCount * 450 * 2;
    const savingsEuro = standardCost6Y - tricolorCost6Y;
    const standardCO2 = staffCount * 20 * 3;
    const tricolorCO2 = staffCount * (20 * 0.7) * 2;
    const savingsCO2 = Math.round(standardCO2 - tricolorCO2);

    return (
        <section id="impact" className="py-24 bg-light relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <SectionHeading subtitle="ROI & RSE">
                    CALCULEZ VOTRE IMPACT
                </SectionHeading>

                <div className="bg-white/70 backdrop-blur-xl border border-white/50 rounded-3xl p-8 md:p-12 shadow-2xl">
                    <div className="text-center mb-12">
                        <label className="block text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">Nombre de collaborateurs à équiper</label>
                        <div className="flex items-center justify-center gap-4">
                            <button onClick={() => setStaffCount(Math.max(5, staffCount - 5))} className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-xl font-bold transition-colors">-</button>
                            <input
                                type="number"
                                value={staffCount}
                                onChange={(e) => setStaffCount(Math.max(1, parseInt(e.target.value) || 0))}
                                className="text-5xl md:text-6xl font-display font-black text-center bg-transparent w-48 focus:outline-none text-primary"
                            />
                            <button onClick={() => setStaffCount(staffCount + 5)} className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-xl font-bold transition-colors">+</button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-gray-100">
                        <motion.div
                            key={savingsEuro}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="text-center p-6 bg-white rounded-2xl shadow-sm"
                        >
                            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Économies (6 ans)</h4>
                            <span className="block text-4xl md:text-5xl font-display font-bold text-dark">{savingsEuro.toLocaleString()} €</span>
                            <p className="text-xs text-gray-400 mt-2">vs rotation standard 2 ans</p>
                        </motion.div>

                        <motion.div
                            key={savingsCO2}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="text-center p-6 bg-green-50 rounded-2xl border border-green-100"
                        >
                            <h4 className="text-sm font-bold text-green-600 uppercase tracking-wider mb-2">CO2e Évité</h4>
                            <span className="block text-4xl md:text-5xl font-display font-bold text-green-700">{savingsCO2.toLocaleString()} kg</span>
                            <p className="text-xs text-green-600/70 mt-2">Impact positif direct</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImpactCalculator;
