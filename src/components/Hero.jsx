import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="container hero-container">

                <div className="hero-content">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="badge text-primary bg-primary-light-10">Milan Imperial Limited</span>
                        <h1 className="heading-xl hero-title">
                            Excellence <br />
                            Across <span className="text-accent gradient-text">Sectors.</span>
                        </h1>
                        <p className="text-lead hero-subtitle">
                            Premier private charter consultancy, advanced agro-business management, and robust general contracting. We manage complexity so you achieve excellence.
                        </p>

                        <div className="hero-actions">
                            <a href="#charter" className="btn btn-primary glow-effect">Explore Services</a>
                            <a href="#contact" className="btn btn-outline">Our Approach</a>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    className="hero-image-wrapper"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                >
                    <div className="image-composition">
                        {/* We will rely on CSS for the layout of these abstract elements */}
                        <div className="img-layer img-primary">
                            {/* Placeholder, will add a real looking Unsplash/gradient fallback */}
                        </div>
                        <div className="glass-card floating-card-1">
                            <span className="card-icon">✈️</span>
                            <div>
                                <strong>Aviation</strong>
                                <p>Private Charters</p>
                            </div>
                        </div>
                        <div className="glass-card floating-card-2">
                            <span className="card-icon">🌱</span>
                            <div>
                                <strong>Agriculture</strong>
                                <p>Global Funding</p>
                            </div>
                        </div>
                        <div className="glass-card floating-card-3">
                            <span className="card-icon">🏗️</span>
                            <div>
                                <strong>Contracting</strong>
                                <p>Infrastructure</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
