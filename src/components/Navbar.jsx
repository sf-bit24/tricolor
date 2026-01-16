import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
        setScrolled(latest > 50);
    });

    return (
        <AnimatePresence>
            <motion.nav
                variants={{
                    visible: { y: 0 },
                    hidden: { y: -100 },
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="fixed top-6 left-0 w-full z-50 flex justify-center pointer-events-none"
            >
                <div
                    className={`
                        pointer-events-auto
                        transition-all duration-500 ease-out
                        flex items-center gap-8 
                        px-2 py-2 rounded-full 
                        border border-white/10
                        ${scrolled
                            ? 'bg-charcoal/80 backdrop-blur-xl shadow-2xl scale-95'
                            : 'bg-charcoal/40 backdrop-blur-md'
                        }
                    `}
                >
                    {/* Logo Pill */}
                    <a href="/" className="bg-white text-charcoal px-5 py-2 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-gray-200 transition-colors">
                        Tricolor
                    </a>

                    {/* Links */}
                    <ul className="hidden md:flex gap-6 items-center text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">
                        <li><a href="/#solutions" className="hover:text-white transition-colors">Solutions</a></li>
                        <li><a href="/impact#technology" className="hover:text-white transition-colors">Tech</a></li>
                        <li><a href="/impact#engagement" className="hover:text-white transition-colors">Engagement</a></li>
                    </ul>

                    {/* CTA - Collection 2025 */}
                    <a
                        href="/collection-2025"
                        className="
                            hidden md:block
                            px-5 py-2 
                            rounded-full 
                            bg-white text-charcoal
                            text-[10px] font-bold uppercase tracking-widest 
                            hover:bg-secondary hover:text-white
                            transition-all
                        "
                    >
                        Collection 2025
                    </a>
                </div>
            </motion.nav>
        </AnimatePresence>
    );
};

export default Navbar;
