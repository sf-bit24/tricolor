import React from 'react';
import { motion } from 'framer-motion';

// Importing the flou assets (optimized WebP)
import img1 from '../../assets/images/optimized/capucheflouclusaz.webp';
import imgGray from '../../assets/images/optimized/manteaugris.webp';
import imgBlack from '../../assets/images/optimized/beaupantalonnooir.webp';

const ArchiveItem = ({ img, title, code, width }) => (
    <div className={`relative group overflow-hidden ${width}`}>
        <img
            src={img}
            alt={title}
            className="w-full h-[500px] object-cover transition-transform duration-700 ease-out group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
        <div className="absolute bottom-6 left-6">
            <span className="font-mono text-[9px] text-white/70 block mb-1">{code}</span>
            <h4 className="font-display text-white text-xl font-bold uppercase tracking-tight">{title}</h4>
        </div>
    </div>
);

const ArchiveGallery = () => {
    return (
        <section className="bg-charcoal py-0 border-t border-white/10">

            {/* Header */}
            <div className="py-12 px-6 md:px-12 border-b border-white/5 flex justify-between items-center bg-[#0A0A0A]">
                <h3 className="text-white font-mono text-xs uppercase tracking-[0.3em]">
                    Archive_Collection // Motion_Studies
                </h3>
                <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
            </div>

            {/* Grid */}
            <div className="flex flex-wrap">
                <ArchiveItem
                    img={img1}
                    title="Clusaz Detail"
                    code="REF_092_FL"
                    width="w-full md:w-1/3"
                />
                <ArchiveItem
                    img={imgGray}
                    title="Urban Shield"
                    code="REF_110_GR"
                    width="w-full md:w-1/3"
                />
                <ArchiveItem
                    img={imgBlack}
                    title="Stealth Pant"
                    code="REF_004_BK"
                    width="w-full md:w-1/3"
                />
            </div>

            {/* Footer Strip */}
            <div className="bg-[#0A0A0A] py-4 text-center">
                <p className="font-mono text-[8px] text-gray-600 uppercase tracking-widest">
                    Capturing the speed of mountain professionals.
                </p>
            </div>

        </section>
    );
};

export default ArchiveGallery;
