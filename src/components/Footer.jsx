import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="bg-charcoal text-white pt-24 pb-12 overflow-hidden relative">
            {/* Background Texture Detail */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

            <div className="max-w-[1600px] mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
                    {/* Brand Column */}
                    <div>
                        <h3 className="font-display text-2xl uppercase tracking-widest bg-white text-charcoal inline-block px-2 py-1 mb-8">Tricolor</h3>
                        <p className="text-gray-400 text-xs font-mono leading-relaxed max-w-xs uppercase tracking-wider">
                            Advanced Mountain Apparel<br />
                            Engineered in Annecy, FR.<br />
                            Est. 2024
                        </p>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h4 className="font-mono text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-6">Collection</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="flex items-center group text-sm font-medium text-gray-300 hover:text-white transition-colors"><span className="w-0 group-hover:w-2 h-[1px] bg-white mr-0 group-hover:mr-2 transition-all duration-300"></span>Men's System</a></li>
                            <li><a href="#" className="flex items-center group text-sm font-medium text-gray-300 hover:text-white transition-colors"><span className="w-0 group-hover:w-2 h-[1px] bg-white mr-0 group-hover:mr-2 transition-all duration-300"></span>Women's System</a></li>
                            <li><a href="#" className="flex items-center group text-sm font-medium text-gray-300 hover:text-white transition-colors"><span className="w-0 group-hover:w-2 h-[1px] bg-white mr-0 group-hover:mr-2 transition-all duration-300"></span>Archive</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-mono text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-6">Support</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Care Instructions</a></li>
                            <li><a href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Warranty</a></li>
                            <li><a href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Contact Pro</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-mono text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-6">Legal</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Cookies</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-end border-t border-white/10 pt-12">
                    <p className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">
                        © 2026 Tricolor Systems. All rights reserved.
                    </p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-charcoal transition-all duration-300">IG</div>
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-charcoal transition-all duration-300">LN</div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
