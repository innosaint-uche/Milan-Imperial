import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section className="section bg-primary text-light relative overflow-hidden" id="about">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent to-transparent mix-blend-screen pointer-events-none"></div>

            <div className="container relative z-10">
                <div className="grid-cols-2 items-center">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-accent tracking-widest uppercase font-bold text-sm mb-4 block">About Us</span>
                        <h2 className="heading-lg text-white mb-6">Redefining Excellence Worldwide.</h2>
                        <p className="text-lg opacity-90 mb-6 leading-relaxed max-w-xl">
                            Milan Imperial Limited operates at the nexus of high-stakes industries where precision, security, and exponential scale are paramount. We are driven by an uncompromising standard of service.
                        </p>
                        <p className="opacity-80 leading-relaxed max-w-xl mb-10">
                            Our multidisciplinary expertise covers private aviation, sustainable agro-business, and large-scale general contracting. By fusing localized knowledge with global network capabilities, we create seamless synergies that protect your investments and accelerate your growth trajectory.
                        </p>

                        <div className="flex gap-8">
                            <div>
                                <h4 className="text-4xl font-bold text-white font-['Outfit'] mb-2">3+</h4>
                                <p className="text-sm text-accent uppercase tracking-wider">Core Industries</p>
                            </div>
                            <div>
                                <h4 className="text-4xl font-bold text-white font-['Outfit'] mb-2">Global</h4>
                                <p className="text-sm text-accent uppercase tracking-wider">Reach</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Abstract graphic replacing image */}
                    <motion.div
                        className="hidden md:block relative h-full min-h-[500px]"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-bl from-primary-light to-transparent rounded-full blur-[100px] opacity-30"></div>

                        <div className="relative z-10 w-full h-full flex-center">
                            <div className="glass-panel p-8 rounded-3xl border border-white/10 backdrop-blur-md bg-white/5 relative shadow-2xl overflow-hidden aspect-square flex-center text-center">
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 bg-repeat"></div>
                                <div className="relative z-10 space-y-4">
                                    <div className="w-20 h-20 bg-accent/20 rounded-full flex-center mx-auto text-accent text-3xl mb-6 shadow-[0_0_30px_rgba(141,192,71,0.3)]">
                                        ★
                                    </div>
                                    <h3 className="heading-md text-white m-0">Classic.<br />Minimal.<br />Premium.</h3>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
