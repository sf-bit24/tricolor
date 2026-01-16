import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Building2, Mail, User, MessageSquare } from 'lucide-react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        company: '',
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        // Formspree endpoint - Replace YOUR_FORM_ID with actual Formspree ID
        const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ company: '', name: '', email: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="bg-charcoal py-32 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left: Info */}
                    <div>
                        <span className="font-mono text-[10px] text-secondary uppercase tracking-[0.3em] block mb-4">
                            Contact_Pro
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display font-medium text-white tracking-tight mb-6">
                            Équipez vos équipes.
                        </h2>
                        <p className="text-gray-400 text-sm leading-relaxed mb-12 max-w-md">
                            Vous dirigez une station, une école de ski ou une équipe de remontées mécaniques ?
                            Discutons de vos besoins en équipement technique durable.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                                    <Mail size={18} className="text-white/60" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Email</p>
                                    <a href="mailto:pro@tricolor.eco" className="text-white hover:text-secondary transition-colors">
                                        pro@tricolor.eco
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                                    <Building2 size={18} className="text-white/60" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Siège</p>
                                    <p className="text-white">Annecy, Haute-Savoie, France</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-12 rounded-lg">
                        <AnimatePresence mode="wait">
                            {status === 'success' ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="text-center py-12"
                                >
                                    <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                                    <h3 className="text-xl font-bold text-white mb-2">Message envoyé !</h3>
                                    <p className="text-gray-400 text-sm">Nous vous répondrons sous 48h.</p>
                                </motion.div>
                            ) : (
                                <motion.form
                                    key="form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onSubmit={handleSubmit}
                                    className="space-y-6"
                                >
                                    {/* Company */}
                                    <div>
                                        <label className="flex items-center gap-2 text-xs text-gray-500 uppercase tracking-widest mb-2">
                                            <Building2 size={12} /> Station / Entreprise
                                        </label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            required
                                            placeholder="Ex: Domaine Skiable de Courchevel"
                                            className="w-full bg-transparent border-b border-white/20 focus:border-secondary text-white py-3 outline-none transition-colors placeholder:text-gray-600"
                                        />
                                    </div>

                                    {/* Name */}
                                    <div>
                                        <label className="flex items-center gap-2 text-xs text-gray-500 uppercase tracking-widest mb-2">
                                            <User size={12} /> Votre Nom
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Jean Dupont"
                                            className="w-full bg-transparent border-b border-white/20 focus:border-secondary text-white py-3 outline-none transition-colors placeholder:text-gray-600"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="flex items-center gap-2 text-xs text-gray-500 uppercase tracking-widest mb-2">
                                            <Mail size={12} /> Email Professionnel
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="jean.dupont@station.fr"
                                            className="w-full bg-transparent border-b border-white/20 focus:border-secondary text-white py-3 outline-none transition-colors placeholder:text-gray-600"
                                        />
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label className="flex items-center gap-2 text-xs text-gray-500 uppercase tracking-widest mb-2">
                                            <MessageSquare size={12} /> Votre Besoin
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={4}
                                            placeholder="Décrivez votre projet d'équipement..."
                                            className="w-full bg-transparent border-b border-white/20 focus:border-secondary text-white py-3 outline-none transition-colors placeholder:text-gray-600 resize-none"
                                        />
                                    </div>

                                    {/* Error Message */}
                                    {status === 'error' && (
                                        <div className="flex items-center gap-2 text-red-400 text-sm">
                                            <AlertCircle size={16} />
                                            <span>Une erreur est survenue. Réessayez.</span>
                                        </div>
                                    )}

                                    {/* Submit Button */}
                                    <motion.button
                                        type="submit"
                                        disabled={status === 'loading'}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full bg-white text-charcoal py-4 font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-secondary hover:text-white transition-colors disabled:opacity-50"
                                    >
                                        {status === 'loading' ? (
                                            <span className="animate-pulse">Envoi en cours...</span>
                                        ) : (
                                            <>
                                                <Send size={14} />
                                                Envoyer ma demande
                                            </>
                                        )}
                                    </motion.button>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactForm;
