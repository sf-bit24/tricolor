import React from 'react';
import './ProductShowcase.css';
import redCoat from '../assets/images/product_red_coat_1.jfif';
import ecodown from '../assets/images/feature_ecodown.jfif';

const ProductShowcase = () => {
    return (
        <section id="products" className="product-showcase">
            <div className="product-container">
                <div className="product-header">
                    <h2>Performance & Style</h2>
                    <p>Conçu pour les environnements les plus exigeants.</p>
                </div>

                <div className="product-main">
                    <div className="product-image">
                        <img src={redCoat} alt="Manteau Rouge Tricolor" />
                    </div>

                    <div className="product-details">
                        <h3>La Veste Signature Pro</h3>
                        <p>
                            La référence des domaines skiables.
                            Un outil de travail conçu pour 8h/jour dans des conditions extrêmes.
                        </p>

                        <ul className="product-features">
                            <li><span className="feature-dot"></span><strong>Personnalisation Corporate</strong> (Couleurs Station)</li>
                            <li><span className="feature-dot"></span>Durée de vie étendue : 3 ans garantis</li>
                            <li><span className="feature-dot"></span>Tissu Respirant & Imperméable</li>
                        </ul>

                        <div className="ecodown-badge">
                            <img src={ecodown} alt="Ecodown" className="ecodown-img" />
                            <div>
                                <strong>Technologie Ecodown</strong>
                                <p>Isolation haute performance 100% recyclée.</p>
                            </div>
                        </div>

                        <div style={{ marginTop: '2rem' }}>
                            <a href="#contact" style={{
                                textDecoration: 'underline',
                                fontWeight: 'bold',
                                color: 'var(--color-primary)'
                            }}>
                                Télécharger le Catalogue Pro &rarr;
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductShowcase;
