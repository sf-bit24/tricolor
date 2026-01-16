import React from 'react';
import './VisionSection.css';
import visionImage from '../assets/images/lifestyle_1.jfif';

const VisionSection = () => {
    return (
        <section id="vision" className="vision">
            <div className="vision-container">
                <div className="vision-image-wrapper">
                    <img src={visionImage} alt="Professionnels de la montagne" />
                </div>

                <div className="vision-content">
                    <h3>Genèse du projet</h3>
                    <h2>Une réponse globale aux enjeux actuels</h2>

                    <div className="vision-text">
                        <p>
                            Professionnels de la montagne et du ski depuis 30 ans, nous avons suivi beaucoup d’évolutions du secteur.
                            Depuis 5 ans, la prise de conscience du changement climatique nous a poussés à mener une réflexion complète sur nos pratiques :
                            conception, sourcing, fabrication et cycle de vie.
                        </p>
                        <p>
                            Notre démarche s’est orientée vers une <strong>production relocalisée en Europe</strong> (Portugal), chez un fournisseur
                            apportant des solutions technologiques de pointe et conforme à la norme <strong>ISO 14001</strong>.
                        </p>

                        <div className="vision-highlight">
                            <strong>Mountain Change Makers</strong>
                            Nous avons ajusté nos conceptions pour moins de perte, plus de durabilité, de confort et de sécurité, avec une faible empreinte carbone.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VisionSection;
