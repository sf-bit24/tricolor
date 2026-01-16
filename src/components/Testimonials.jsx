import React from 'react';

const Testimonials = () => {
    const styles = {
        section: { padding: '4rem 2rem', background: '#F3F2EF' }, // LinkedIn greyish bg
        container: { maxWidth: '1200px', margin: '0 auto' },
        title: { textAlign: 'center', marginBottom: '3rem', color: '#0A66C2' }, // LinkedIn Blue
        grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' },
        card: { background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' },
        header: { display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' },
        avatar: { width: '50px', height: '50px', borderRadius: '50%', background: '#DDD' },
        name: { fontWeight: '700', fontSize: '1.1rem' },
        role: { fontSize: '0.9rem', color: '#666' },
        text: { fontStyle: 'italic', lineHeight: '1.5', color: '#333' }
    };

    return (
        <section className="testimonials" style={styles.section}>
            <div style={styles.container}>
                <h2 style={styles.title}>La communauté des Pros sur LinkedIn</h2>

                <div style={styles.grid}>
                    <div style={styles.card}>
                        <div style={styles.header}>
                            <div style={styles.avatar}></div>
                            <div>
                                <div style={styles.name}>Jean-Michel B.</div>
                                <div style={styles.role}>Directeur Régie des Pistes - Les Arcs</div>
                            </div>
                        </div>
                        <p style={styles.text}>
                            "Passer à 3 ans de rotation avec Tricolor a allégé notre budget annuel de 30%. Et les équipes sont ravies du confort du pro model."
                        </p>
                    </div>

                    <div style={styles.card}>
                        <div style={styles.header}>
                            <div style={styles.avatar}></div>
                            <div>
                                <div style={styles.name}>Sarah L.</div>
                                <div style={styles.role}>Directrice ESF - Val Thorens</div>
                            </div>
                        </div>
                        <p style={styles.text}>
                            "Enfin une marque qui comprend nos besoins techniques et RSE. Le label Full Social Jacket est un vrai plus pour notre image."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
