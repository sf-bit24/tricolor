import React from 'react';
import './TechValues.css';

const TechValues = () => {
    return (
        <section id="technology" className="tech-values">
            <div className="tech-grid">
                <div className="tech-card">
                    <span className="tech-icon">🇵🇹</span>
                    <h3>Made in Europe</h3>
                    <p>
                        Fabrication au Portugal (Usine ISO 14001).
                        Proximité géographique et conformité sociale.
                    </p>
                </div>

                <div className="tech-card">
                    <span className="tech-icon">💎</span>
                    <h3>Label NESXT</h3>
                    <p>
                        Standard d'excellence. Minimalisme technique : moins de coutures pour moins de points de rupture.
                    </p>
                </div>

                <div className="tech-card">
                    <span className="tech-icon">🛡️</span>
                    <h3>Durabilité Pro</h3>
                    <p>
                        Conçu pour durer 3 saisons intensives (vs 2 standards).
                        Meilleur ROI et impact carbone réduit.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default TechValues;
